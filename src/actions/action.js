import axios from "axios"




export const fetchUserRequest=()=>{
    return {
        type:"FETCH_USERS_REQUEST"
    }
}

export const fetchUserSuccess=(users)=>{
    return {
        type:"FETCH_USERS_SUCCESS",
        payload:users
    }
}

export const fetchUserFailure=(error)=>{
    return {
        type:"FETCH_USERS_FAILURE",
        payload:error
    }
}


export const fetchUsers=()=>(dispatch, getState) => {
    dispatch(fetchUserRequest())
    axios.get(" https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        const users=response.data.map(user=>user)
        dispatch(fetchUserSuccess(users))
    }).catch(error=>{
        error='error'
        console.log("data can't be fetched")
        dispatch(fetchUserFailure(error))
    })

}



