import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const crudURL = 'https://64c8c74da1fe0128fbd63111.mockapi.io/Crud';

const Create = () => {
    const navigate=useNavigate()
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [mail, setMail] = useState('');
    const [stat, setStat] = useState('');
    const [error, setError] = useState(false);
    
    const reset=()=>{
        setName('');
        setAge('');
        setMail('');
    }

    const handlesubmit = async(e) => {
        e.preventDefault();
    
        await axios.post(crudURL, {
            name,
            age,
            mail
        }).then((res) => {
            setStat(res.statusText)
            setError(false)
            reset()
            setTimeout(() => {
                navigate('/crudapp/read')
            }, 1500);
        }).catch((err) => {
            setStat(err.message.slice(0,14))
            setError(true)

        })
    }

    return (
        <div className="container">
            <div className="row m-auto" >
                <div className="col-md-4 col-sm-12 col-11 bg-success mt-5 p-5 rounded-3" >
                    <span className='d-block p-3 mb-3 text-white fs-2 rounded-4 text-center bg-primary'>Create Form</span>
                    <form onSubmit={handlesubmit}>
                        <div className="input-group">
                            <label className='input-group-text'>Name</label>
                            <input type="text" className='form-control' value={name} placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="input-group mt-2">
                            <label className='input-group-text'>Age</label>
                            <input type="number" className='form-control' placeholder='Age' value={age} onChange={(e) => { setAge(e.target.value) }} />
                        </div>
                        <div className="input-group mt-2">
                            <label className='input-group-text'>Email</label>
                            <input type="email" className='form-control' placeholder='Email' value={mail} onChange={(e) => { setMail(e.target.value) }} />
                        </div>
                        <input type="submit" value='Create' className='btn btn-primary mt-3 w-100 ' />
                    </form>

                    {(stat!==''&&error===true)&&
                    <div className="alert mt-4 alert-danger alert-dismissible fade show" role="alert">
                        <strong>{stat}</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    }
                    {(stat!==''&&error===false)&&
                    <div className="alert mt-4 alert-success alert-dismissible fade show" role="alert">
                        <strong>{stat}</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Create