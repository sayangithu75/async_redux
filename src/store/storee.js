import {createStore}  from "redux";
import rootReducer from '../reducers/rootReducers'
import apiReducer from '../reducers/apiReducer'
import { applyMiddleware } from "redux";
import  thunkMiddleware  from 'redux-thunk'
// const redux = require('redux')
// const applyMiddleware=redux.Middleware
// const thunkMiddleware=require('redux-thunk').default
// const axios = require('axios')






const store=createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store