import { applyMiddleware, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import {reducer as AuthReducer} from './authRedux/reducer'
export const store = legacy_createStore(AuthReducer,applyMiddleware(thunk))