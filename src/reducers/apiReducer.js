const initialState={
    loading:true,
    data:[],
    error:''
}

const apiReducer=(state=initialState,action)=>{
    switch(action.type){
        case'FETCH_USERS_REQUEST':{
            return{
                ...state,
                loading:true
            }
        }
        case'FETCH_USERS_SUCCESS':{
            return{
                loading:false,
                data:action.payload,
                // data:[
                //     ...state.data,
                //     action.payload
                // ],
                error:""
            }
        }
        case'FETCH_USERS_FAILURE':{
            return{
                loading:false,
                data:[],
                error:action.payload
            }
        }

        default: return state;
    }
}


export default apiReducer