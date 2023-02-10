import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUsers} from '../actions/action'


const Api=()=>{



    const dispatch=useDispatch();

    const data=useSelector((state)=>{
        console.log(9, state);
        return state.apiReducer.data
    });

    const handleClick=()=>{
        dispatch(fetchUsers())
    }
    
    return (
        <>
        <div className='container'>
            <h1>I am Sayan Samanta</h1>
            <div>
            <button type='submit'  onClick={handleClick}>FETCH THE NAMES</button>
            </div>
        </div>

        <div className='showItem'>

            {
                data.map((e)=>{
                    return(

                        <div className="eachItem" key={e.id}>
                        <h3>{e.name}</h3>
                        </div>
                    )
                })
            }
        </div>

        </>
    )

}

export default Api