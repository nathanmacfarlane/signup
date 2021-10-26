import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { ColDef } from 'ag-grid-community';
import { Button } from 'antd';

export const EditableGrid = () => {
  const rowData = [
    { title: "Toyota", description: "Celica" },
    { title: "Ford", description: "Mondeo" },
    { title: "Porsche", description: "Boxter" }
  ];

  const allRowSettings: ColDef = {
    editable: true,
    singleClickEdit: true
  }

  return (
    <>
      <Button>Add Item</Button>
      <br />
      <br />
      <div className="ag-theme-balham" style={{ height: 400, width: 600 }}>
        <AgGridReact
          columnDefs={[
            { headerName: "Title", field: "title", ...allRowSettings },
            { headerName: "Description", field: "description", ...allRowSettings },
          ]}
          rowData={rowData}>
        </AgGridReact>
      </div>
    </>
  );
}