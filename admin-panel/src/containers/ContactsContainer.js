import React, { useEffect, useReducer, useState } from 'react';
import Axios from 'axios';
import { ContactsContext } from '../context/contactsContext';
import { contactsReducer } from '../reducers/contactsReducer';
import {
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAILURE,
} from '../reducers/constants';
import { API_URL_DATA, ROUTE_CONTACTS } from '../utils/api';

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const ContactsContainer = React.memo(({ children }) => {
    const [state, dispatch] = useReducer(contactsReducer, initialState);
    const [wasBeChanged, setWasBeChanged] = useState(false);

    useEffect(() => {
        const fetchContacts = async () => {
            dispatch({ type: FETCH_CONTACTS_REQUEST })
            try {
                const result = await Axios.get(`${API_URL_DATA}/${ROUTE_CONTACTS}`);
                const payload = result.data.map((item, index) => ({
                    key: index,
                    ...item
                }));
                dispatch({
                    type: FETCH_CONTACTS_SUCCESS,
                    payload
                });
            } catch (error) {
                dispatch({ type: FETCH_CONTACTS_FAILURE });
            }
        }
        fetchContacts();
    }, [wasBeChanged]);

    const updateContact = async (obj) => {
        try {
            await Axios.post(`${API_URL_DATA}/${ROUTE_CONTACTS}`,
                `id=${obj.id}&address=${obj.address}&mail=${obj.mail}&phone=${obj.phone}&edit=${true}`, {
                headers: {
                    'Accept': 'application/text',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
            setWasBeChanged(!wasBeChanged);
        } catch (error) {
            throw error
        }
    }

    return (
        <ContactsContext.Provider value={{
            ...state, updateContact
        }}>
            {children}
        </ContactsContext.Provider>
    )
})