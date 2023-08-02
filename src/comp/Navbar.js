import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Home from './Home'

function Navbar() {
    const navigate = useNavigate();
    const navigateto=(path)=>{
        navigate(path)
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                           
                            <li class="mx-2 nav-item">
                                <a class="nav-link active"><NavLink to='/' class="nav-link active">HOME Page </NavLink></a>
                            </li>
                            <li class="mx-2 nav-item">
                                <a class="nav-link active"><NavLink to={'/about'} class="nav-link active">About</NavLink></a>
                            </li>
                            <li class="mx-2 nav-item">
                                <a class="nav-link active"><NavLink to={'/products'} class="nav-link active">Products</NavLink></a>
                            </li>
                            <li class="mx-2 nav-item">
                                <a class="nav-link active"><NavLink to={'/users'} >Users Page</NavLink></a>
                            </li>
                            <li class="mx-2 nav-item">
                                <a class="nav-link active"><NavLink to={'/form'} >Form</NavLink></a>
                            </li>
                            <li class="mx-2 nav-item">
                                <a class="nav-link active"><NavLink to={'/formikform'} >ForkikForm</NavLink></a>
                            </li>
                            <li class="mx-2 nav-item">
                                <a class="nav-link active"><NavLink to={'/context'} >Context</NavLink></a>
                            </li>
                            <li class="mx-2 nav-item">
                                <a class="nav-link active"><NavLink to={'/axios'} >Axios</NavLink></a>
                            </li>
                            <li class="mx-2 nav-item">
                                <a class="nav-link active"><NavLink to={'/particle'} >Particle</NavLink></a>
                            </li>
                            <li class="mx-2 nav-item">
                                <a class="nav-link active"><NavLink to={'/crudapp'} >CrudApp</NavLink></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <button onClick={()=>navigateto('/home')}>Click</button>
            <button onClick={()=>navigateto('/hom')}>Not Click</button>
        </div>
    )
}

export default Navbar