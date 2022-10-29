import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';


const columns = [
  { field: 'Scheduled Audit', headerName: 'Scheduled Audit', width: 200, },
  { field: 'Date', headerName: 'Date', width: 200 },
  { field: 'action', headerName: 'Action', width: 200 ,  sortable: false,
      renderCell:(cellValues)=>{
      return(
        <div >
        <Button
        className='prbuton'
        variant="contained"
        color='primary'>
          Edit
        </Button>
        <Button
        variant="contained"
        color='primary'>
          Delete
        </Button>
        </div>
      )
    }
  }
];

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function DataTable() {
  return (
    <div className='adduser' style={{ height: 200, width: '700px' , marginLeft:'60px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
        onRowAdd/>
    </div>
  );
}
