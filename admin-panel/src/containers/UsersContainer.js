import React, { useEffect, useReducer, useState } from 'react';
import Axios from 'axios';
import { UsersContext } from '../context/usersContext';
import { usersReducer } from '../reducers/usersReducer';
import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE
} from '../reducers/constants';
import { API_URL_DATA, ROUTE_USERS } from '../utils/api'

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const UsersContainer = React.memo(({ children }) => {
    const [state, dispatch] = useReducer(usersReducer, initialState)
    const [wasBeChanged, setWasBeChanged] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            dispatch({ type: FETCH_USERS_REQUEST })
            try {
                const result = await Axios.get(`${API_URL_DATA}/${ROUTE_USERS}`);
                const payload = result.data.map((item, index) => ({
                    key: index,
                    id: item.id,
                    name: item.name,
                    mail: item.mail,
                    login: item.login,
                }));
                dispatch({
                    type: FETCH_USERS_SUCCESS,
                    payload
                });
            } catch (error) {
                dispatch({ type: FETCH_USERS_FAILURE });
            }
        }
        fetchUsers();
    }, [wasBeChanged]);

    const createUser = async (obj) => {
        try {
            await Axios.post(`${API_URL_DATA}/${ROUTE_USERS}`,
                `id=${obj.id}&name=${obj.name}&login=${obj.login}&mail=${obj.mail}&password=${obj.password}&create=${true}`, {
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

    const removeUser = async (id) => {
        try {
            await Axios.post(`${API_URL_DATA}/${ROUTE_USERS}`,
                `id=${id}&delete=true`, {
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

    const updateUser = async (obj) => {
        try {
            await Axios.post(`${API_URL_DATA}/${ROUTE_USERS}`,
                `id=${obj.id}&name=${obj.name}&login=${obj.login}&mail=${obj.mail}&password=${obj.password}&edit=${true}`, {
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
        <UsersContext.Provider value={{
            ...state, createUser, removeUser, updateUser
        }}>
            {children}
        </UsersContext.Provider>
    )
})