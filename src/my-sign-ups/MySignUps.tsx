import { Grid } from '@material-ui/core';
import { Card, Select } from 'antd';
import { Link } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Option } = Select;

export const MySignUps = () => {
  const signups = [
    {
      id: "1",
      title: "My Event",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      percent: 75
    },
    {
      id: "2",
      title: "Second Event",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      percent: 25
    },
    {
      id: "3",
      title: "Third Event",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      percent: 50
    },
    {
      id: "4",
      title: "Fourth Event",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      percent: 35
    },
    {
      id: "5",
      title: "Fifth Event",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      percent: 85
    },
  ]
  return (
    <>
      <Select defaultValue="grid" style={{ width: 120 }}>
        <Option value="grid">Grid</Option>
        <Option value="list">List</Option>
        <Option value="calendar">Calendar</Option>
      </Select>
      <br />
      <br />
      <Grid container spacing={4}>
        {signups.map(signup =>
          <Grid key={`signup-${signup.id}`} item xs={4}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Link to={`/signups/${signup.id}`}>View Signup <ArrowRightOutlined /></Link>
              ]}
            >
              <Meta
                title={signup.title}
                description={signup.description}
              />
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  )
}