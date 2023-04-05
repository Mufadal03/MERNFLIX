import * as data from './actionTypes'
import { userApi } from '../api/modules/user.api'
import { favouriteApi } from '../api/modules/favourite.api'

export const signUp = (payload) => async dispatch => {
    dispatch({type:data.SIGNUP_REQUEST})
    try {
        const response = await userApi.signup(payload)
        dispatch({type:data.SIGNUP_SUCCESS})
        return response
    } catch (error) {
        dispatch({ type: data.SIGNUP_FAILURE })
        console.log(error)
         throw error
    }
}

export const logIn = (payload) => async dispatch => {
    dispatch({ type: data.LOGIN_REQUEST })
    try {
        const response = await userApi.login(payload)
        dispatch({ type: data.LOGIN_SUCCESS ,payload:response.token})        
        return response
    } catch (error) {
        dispatch({ type: data.LOGIN_FAILURE })
        throw error
    }
}

export const userInfo = () => async dispatch => {
    dispatch({type:data.USER_INFO_REQUEST})
    try {
        const response = await userApi.info()
        dispatch({type:data.USER_INFO_SUCCESS,payload:response.username})
    } catch (error) {
        dispatch({type:data.USER_INFO_FAILURE})
        throw error
    }
}

export const logout = () => async dispatch => {
    document.cookie = "jwttoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    dispatch({type:data.LOGOUT})
}

export const addToFavourite = (payload) => async dispatch => {
    dispatch({type:data.FAVOURITE_REQUEST})
    try {
        const response = await favouriteApi.addToFav(payload)
        dispatch({type:data.FAVOURITE_SUCCESS})
        return response
    } catch (error) {
        dispatch({ type: data.FAVOURITE_FAILURE })
        throw error
    }
}
export const getFavourites = () => async dispatch => {
    dispatch({ type: data.FAVOURITE_REQUEST })
    try {
        const response = await favouriteApi.getFav()
        dispatch({ type: data.FAVOURITE_SUCCESS })
        return response
    } catch (error) {
        dispatch({ type: data.FAVOURITE_FAILURE })
        throw error
    }
}

export const removeFavourite = (id) => async dispatch => {
    dispatch({ type: data.FAVOURITE_REQUEST })
    try {
        const response = await favouriteApi.removeFav(id)
        dispatch({ type: data.FAVOURITE_SUCCESS })
        return response
    } catch (error) {
        dispatch({ type: data.FAVOURITE_FAILURE })
        throw error
    }
}