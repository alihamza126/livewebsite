import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Detailspage() {
   const[searchparam,setparam]= useSearchParams()
  return (
    <div>
        <h1>Detailspage</h1>

        <form action="">
            <input type="text" onChange={(e)=>{setparam(e.target.value==''? {} :{q:e.target.value})}}/>
            <button onClick={(e)=>{alert(searchparam.get('q'));e.preventDefault()}}>search</button>
        </form>
    </div>
  )
}

export default Detailspage