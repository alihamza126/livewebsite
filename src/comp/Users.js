import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

function Users() {
    let pramid=useParams();
    pramid  = pramid.id;
  return (
    <div>
       <div>
       <NavLink to={'/users/1'}>User 1</NavLink>
        <NavLink to={'/users/2'}>User 2</NavLink>
        <NavLink to={'/users/3'}>User 3</NavLink>

       </div>
        <h3>id is {pramid}</h3>
        <Outlet/>
    </div>
  )
}

export default Users