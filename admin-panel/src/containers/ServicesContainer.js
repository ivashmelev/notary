import React, { useEffect, useReducer, useState } from 'react';
import Axios from 'axios';
import { ServicesContext } from '../context/servicesContext';
import { servicesReducer } from '../reducers/servicesReducer';
import {
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILURE,
} from '../reducers/constants';
import { API_URL_DATA, ROUTE_SERVICES } from '../utils/api';

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const ServicesContainer = React.memo(({ children }) => {
    const [state, dispatch] = useReducer(servicesReducer, initialState);
    const [wasBeChanged, setWasBeChanged] = useState(false);

    useEffect(() => {
        const fetchServices = async () => {
            dispatch({ type: FETCH_SERVICES_REQUEST })
            try {
                const result = await Axios.get(`${API_URL_DATA}/${ROUTE_SERVICES}`);
                const payload = result.data.map((item, index) => ({
                    key: index,
                    ...item
                }));
                dispatch({
                    type: FETCH_SERVICES_SUCCESS,
                    payload
                });
            } catch (error) {
                dispatch({ type: FETCH_SERVICES_FAILURE });
            }
        }
        fetchServices();
    }, [wasBeChanged]);

    const updateService = async (obj) => {
        try {
            await Axios.post(`${API_URL_DATA}/${ROUTE_SERVICES}`,
                `id=${obj.id}&title=${obj.title}&description=${obj.description}&edit=${true}`, {
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
        <ServicesContext.Provider value={{
            ...state, updateService
        }}>
            {children}
        </ServicesContext.Provider>
    )
})