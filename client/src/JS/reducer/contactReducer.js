import { GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS ,GET_CONTACTS_FAIL } from "../constant/actionsTypes";
const initialState = {
    contacts : [],
    loadContacts : false,
    user:{},
    errors: []
}

export const contactReducer = (state = initialState , {type , payload})=>{
    switch (type) {
        case GET_CONTACTS_LOAD:
            return {...state , loadContacts:true}
        case GET_CONTACTS_SUCCESS:
            return {...state , loadContacts : false , contacts : payload}
        case GET_CONTACTS_FAIL:
            return {...state , loadContacts : false , errors : payload}
        default:
            return state;
    }
};