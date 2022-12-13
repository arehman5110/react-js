import axios from "axios"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";

const Index = () => {

    const [users , setUsers] = useState([]);

    const handleRemove = (id) =>{
      axios.delete("http://127.0.0.1:8000/api/remove-user/"+id)
      .then(
        getAllUsers()
      )
    }

    const handleEdit = (id) =>{
      
    }


    useEffect(()=>{
        getAllUsers();
    })

    async function getAllUsers(){
           
        try{
             axios.get("http://127.0.0.1:8000/api/get-all-users")
            .then((response)=>{
                console.log(response.data);
                setUsers(response.data);
            });
            

        }catch(err){
            console.log(err);
        }
    }


  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
      <div className="card p-5 col-8 bg-slat">
      <table className="table table-border ">
      <thead>
        <th>#</th>
        <th>User Name</th>
        <th>Password</th>
        <th>Edit</th>
        <th>Delete</th>
      </thead>
      <tbody>
        {users.map((value,i)=>{
          return(
            <>
              <tr>
                <td>{i+1}</td>
                <td>{value.name}</td>
                <td>{value.password}</td>
                <td><button className="btn btn-primary btn-sm" ><NavLink className="anchor-tag" to={`/edit-user/${value.id}`} >Edit</NavLink> </button></td>
                <td><button className="btn btn-danger btn-sm" onClick={()=>handleRemove(value.id)}>Remove</button></td>
              </tr>
            </>
          )
        })}
      </tbody>
      </table>
      </div>
      </div>


    </div>
  )
}

export default Index;
