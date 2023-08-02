import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const CrudApp = () => {
    return (
       <div className="container">
         <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid ">
                <a class="navbar-brand fw-bold text-primary" href="#">Crud App</a>
                <button class="navbar-toggler bg-primary outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#subnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="subnavbarNav">
                    <ul class="navbar-nav gap-1">
                        <li class="mx-2 nav-item">
                            <a class="nav-link active bg-success mt-3"><NavLink to={'read'} className='bg-success text-decoration-none'>Read data</NavLink></a>
                        </li> 
                        <li class="mx-2 nav-item">
                            <a class="nav-link active bg-info"><NavLink to={'insert'} className='bg-info text-decoration-none' >Insert data</NavLink></a>
                        </li> 
                        <li class="mx-2 nav-item">
                            <a class="nav-link active bg-info"><NavLink to={'update'} className='bg-info text-decoration-none' >Update data</NavLink></a>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
       </div>
    )
}

export default CrudApp