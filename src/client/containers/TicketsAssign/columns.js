import React from 'react'
import { Icon } from 'antd'

const columns = props => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Issue Type',
      dataIndex: 'issue',
      key: 'issue'
    },
    {
      title: 'Action',
      render: (text, rowData) => {
        if(!rowData.status) {
          return (
            <Icon
              type='link'
              className="color-blue"
              onClick={() => props.pm.onAssignModalToggle(rowData)}
            />
          )
        } else {
          return (
            <span className="assigned">Assigned</span>
          )
        }
      },
      dataIndex: 'issue',
      key: 'action'
    }
  ]
}
export default columns
