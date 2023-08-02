import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const crudURL = 'https://64c8c74da1fe0128fbd63111.mockapi.io/Crud';


const Update = () => {
    const navigate=useNavigate()
    const [id, setid] = useState('');
    const [n, setName] = useState('');
    const [age, setAge] = useState('');
    const [mail, setMail] = useState('');
    const [stat, setStat] = useState('');
    const [error, setError] = useState('');
    
    useEffect(()=>{
        setid(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setMail(localStorage.getItem('mail'));
        
    },[])
    const handleupdate=(e)=>{
            e.preventDefault()
            axios.put(`${crudURL}/${id}`,{
                name:n,
                age:age,
                mail:mail
            }).then(()=>{
                navigate('/crudapp/read');
            }).catch((err)=>{
                console.log(err)
            })
            
    }
    

    return (
        <div className="container">
            <div className="row m-auto" >
                <div className="col-md-4 col-sm-12 col-11 bg-info mt-5 p-5 rounded-3" >
                    <span className='d-block p-3 mb-3 text-white fs-2 rounded-4 text-center bg-primary'>Update Data</span>
                    <form onSubmit={handleupdate}>
                        <div className="input-group">
                            <label className='input-group-text'>Name</label>
                            <input type="text" className='form-control' value={n} placeholder='Name' onChange={(f)=>{setName(f.target.value)}} />
                        </div>
                        <div className="input-group mt-2">
                            <label className='input-group-text'>Age</label>
                            <input type="number" className='form-control' placeholder='Age' value={age} onChange={(e) => { setAge(e.target.value) }} />
                        </div>
                        <div className="input-group mt-2">
                            <label className='input-group-text'>Email</label>
                            <input type="email" className='form-control' placeholder='Email' value={mail} onChange={(e) => { setMail(e.target.value) }} />
                        </div>
                        <input type="submit" value='Update' className='btn btn-primary mt-3 w-100 ' />
                    </form>

                    {(error === true) &&
                        <div className="alert mt-4 alert-danger alert-dismissible fade show" role="alert">
                            <strong>Success</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    }
                    {(error === false) &&
                        <div className="alert mt-4 alert-success alert-dismissible fade show" role="alert">
                            <strong>Failed</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Update