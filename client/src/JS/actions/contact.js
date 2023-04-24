import { GET_CONTACTS_FAIL , GET_CONTACTS_LOAD ,GET_CONTACTS_SUCCESS } from "../constant/actionsTypes";
import axios from "axios";

export const getContacts = () =>async(dispatch)=>{
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        let result = await axios.get("/api/contact");
        dispatch({
            type:GET_CONTACTS_SUCCESS,
            payload:result.data.response
        })
        console.log(result.data.response)
    } catch (error) {
        console.log(error)
        dispatch({type:GET_CONTACTS_FAIL , payload:error})
    }
}