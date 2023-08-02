import React, { useContext, useReducer } from 'react'

// const context=useContext();
// <context>
// </context>

const Context = () => {
    const initail = {val:0};
    const reducer = (state, action) => {
        switch (action.val) {
            case 'inc':{
                return {val:state.val++};}
            // case 'dec': {
            //     return state.val--;
            // }
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initail);

    return (
        <div className="context">
            <h1>{count.val}</h1>
            <button onClick={() => { dispatch({val:'inc'}) }}>Increment</button>
        </div>
    )
}

export default Context