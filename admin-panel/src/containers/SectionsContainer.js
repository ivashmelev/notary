import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';
import { SectionsContext } from '../context/sectionsContext';
import { sectionsReducer } from '../reducers/sectionsReducer';
import {
    FETCH_SECTIONS_REQUEST,
    FETCH_SECTIONS_SUCCESS,
    FETCH_SECTIONS_FAILURE,
    UPDATE_ID_SECTIONS
} from '../reducers/constants';
import { API_URL_DATA, ROUTE_SECTIONS } from '../utils/api';

const initialState = {
    sections: [],
    selectID: '',
    isLoading: false,
    isError: false
}

export const SectionsContainer = React.memo(({ children }) => {
    const [state, dispatch] = useReducer(sectionsReducer, initialState)

    useEffect(() => {
        const fetchSections = async () => {
            dispatch({ type: FETCH_SECTIONS_REQUEST })
            try {
                const result = await Axios.get(`${API_URL_DATA}/${ROUTE_SECTIONS}`);
                const payload = {
                    data: result.data,
                    selectID: result.data[0].id
                }
                dispatch({
                    type: FETCH_SECTIONS_SUCCESS,
                    payload
                });
            } catch (error) {
                dispatch({ type: FETCH_SECTIONS_FAILURE });
            }
        }
        fetchSections();
    }, []);

    const updateIdSection = async (id) => dispatch({ type: UPDATE_ID_SECTIONS, payload: id });

    return (
        <SectionsContext.Provider value={{
            ...state, updateIdSection
        }}>
            {children}
        </SectionsContext.Provider>
    )
})