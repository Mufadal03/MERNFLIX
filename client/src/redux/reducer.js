import { getToken } from '../utils/getToken'
import * as data from './actionTypes'
const initialState = {
    isAuth: getToken()?true:false,
    token: getToken() || null,
    favourites: [],
    isLoading: false,
    isError: false,
    username:null
}

export const reducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case data.LOGIN_REQUEST: {
            return {
                ...state,
                isLoading:true
            }
        }
        case data.LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token:payload
            }
        }
        case data.LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError:true
            }
        }
        case data.LOGOUT: {
            return {
                ...state,
                token: null,
                isAuth:false
            }
        }
        case data.USER_INFO_SUCCESS: {
            return {
                ...state,
                username:payload
            }
        }
        default :return state
    }
}