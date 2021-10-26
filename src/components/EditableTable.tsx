import React, { useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { Button } from 'antd';

interface Props {
  rows?: any[],
  addNewText?: string,
  columns: ProColumns<any>[]
}

export const EditableTable = ({ addNewText, rows, columns: userColumns }: Props) => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<any[]>([]);

  const finalColumn: ProColumns<any> = {
    title: 'Option',
    valueType: 'option',
    width: 200,
    render: (text, record, _, action) => [
      <Button style={{ padding: 0 }} type="link" key="editable" onClick={() => { action?.startEditable?.(record.id) }}>Edit</Button>,
      <Button style={{ padding: 0 }} type="link" key="delete" onClick={() => { setDataSource(dataSource.filter((item) => item.id !== record.id)) }}>Delete</Button>,
    ],
  }

  const columns = [...userColumns, finalColumn];

  return (
    <>
      <EditableProTable<any>
        rowKey="id"
        recordCreatorProps={{
          creatorButtonText: addNewText || "Add New Row",
          position: 'bottom',
          record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
        }}
        columns={columns}
        request={async () => ({
          data: rows,
          total: 10,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          onlyAddOneLineAlertMessage: <>You can only add one new row at a time.</>,
          type: "multiple",
          actionRender: (row, config, dom) => [dom.save, dom.cancel],
          editableKeys,
          onChange: setEditableRowKeys,
        }}
      />
    </>
  );
};