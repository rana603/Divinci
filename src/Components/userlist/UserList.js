import { Link } from "react-router-dom";
import  React from 'react';
import { rows } from "../../DummyData";
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";




export default function App() {
  const [data, setData] = useState(rows);
  const [a,setA]=useState(false);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  
  const columns = [
    { field: 'col1', headerName: 'id', width: 150 },
    { field: 'col2', headerName: 'Products', width: 150,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.col2} alt="" />
          {/* {params.row.col3} */}
        </div>
      );
    },
  },
    { field: 'col3', headerName: 'Product Name', width: 150 },
    { field: 'col4', headerName: 'Stock', width: 150 },
    { field: 'col5', headerName: 'status', width: 150,
  renderCell:(params)=>{
          <button>{a? "Active":"Inactive"}</button>
  } },
    { field: 'col6', headerName: 'Price', width: 150 },
    { field: 'col7', headerName: 'Edit', width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/product/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>

          <i class="fa-solid fa-trash"  
            onClick={() => handleDelete(params.row.id)}
            ></i>
          
        </>
      );
    },
  },
   
  ];
  return (
    <div  className="userList" >
      <DataGrid rows={data} columns={columns}  disableSelectionOnClick
     
        checkboxSelection />
    </div>
  );
}
