import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
const curdURL = 'https://64c8c74da1fe0128fbd63111.mockapi.io/Crud';

const Read = () => {
    const [apidata, setapidata] = useState([]);
    const navigate=useNavigate();

    const readData =async () => {
         await axios.get(curdURL).then((res) => {
              setapidata(res.data)
        }).catch((err) => {
            alert("err.messege")
        })
    }
    const  handleDelete=(e)=>{
            axios.delete(`${curdURL}/${e}`).then(()=>{
                readData()
            })
            .catch((er)=>console.log(er));
            readData();
    }       
    useEffect(() => {
        readData();
    }, [])
    const setLocalStorage=(id,na,age,mail)=>{
        window.localStorage.setItem('id',id);
        window.localStorage.setItem('name',na);
        window.localStorage.setItem('age',age);
        window.localStorage.setItem('mail',mail);
    }

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-12 col-12 col-sm-12 table-responsive">
                    <table className='table table-bordered table-striped table-info table-hover'>
                        <caption>List of users</caption>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {
                                apidata.map((ele) => {
                                        return (
                                        <tr key={ele.id}>
                                            <td>{ele.id}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.age}</td>
                                            <td>{ele.mail}</td>
                                            <td><Link to={'/crudapp/update'} className='btn btn-primary' onClick={()=>setLocalStorage(ele.id,ele.name,ele.age,ele.mail)}>Update</Link></td>
                                            <td><Link  className='btn btn-danger' onClick={()=>{(window.confirm())&&handleDelete(ele.id)}}>Delete</Link></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Read