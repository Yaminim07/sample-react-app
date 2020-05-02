import React from 'react';
import { MDBDataTable } from 'mdbreact';

function TableComponent(props){
    const data = {
        columns: [
            {
                label: 'id',
                field: 'id',
                sort: 'asc',
                width: 150
            },{
                label: 'First name',
                field: 'firstName',
                sort: 'asc',
                width: 150
            },{
                label: 'Last Name',
                field: 'lastName',
                sort: 'asc',
                width: 150
            },{
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 150
            },{
                label: 'Created',
                field: 'created',
                sort: 'asc',
                width: 150
            },{
                label: 'Orders',
                field: 'orders',
                sort: 'asc',
                width: 150
            }
        ],
        rows: props.data
    }

    return (
        <MDBDataTable
          striped
          bordered
          small
          data={data}
        />
      );
  
}

export {
    TableComponent
}