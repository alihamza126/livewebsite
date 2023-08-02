import React, { useEffect, useState } from 'react'
import axios from 'axios';
const todoURL = 'https://jsonplaceholder.typicode.com/todos'

const Axios = () => {
    const [todo, setTodo] = useState([]);
    // useEffect(() => {
    //     axios.get(todoURL).then((res) => {
    //         setTodo(res.data)
    //     }, [])
    // })
    const [name,setName]=useState('')
    const [completed,setCompleted]=useState(true)
    const  handlesubmit=async (e)=>{
            e.preventDefault();
            await axios.post(todoURL,{
                title:name,
                "completed":completed
            }).then((res)=>{
                console.log(res.status);
                console.log('sucessfully')
            }).catch((err)=>{
                console.log(err)
            })  
    }
    useEffect(()=>{
       
    })
    return (
        <div className="axios">
            {/* {
                todo.map((ele, index) => {
                    if (ele.id < 5) {
                        return (
                            <ol key={index}>
                                <li>{ele.id}</li>
                                <li>{ele.title}</li>
                                <li>{ele.completed.toString()}</li>
                            </ol>
                        )
                    }
                    else
                        return
                })
            } */}

            {/* ========Post Request======== */}

                <form onSubmit={handlesubmit}>
                    Title : &nbsp; <input type="text" name="title" value={name} onChange={(e)=>{setName(e.value)}}/> <br/> <br/>
                    Completed : &nbsp; <input type="text" name="completed" value={completed} onChange={(e)=>{setCompleted(e.value)}}/> <br/> <br/>
                    <input type="submit" value="Post" />
                </form>
        </div>
    )
}

export default Axios