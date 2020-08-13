import React, { useEffect, useReducer, useContext, useState } from 'react';
import Axios from 'axios';
import { TariffsContext } from '../context/tariffsContext';
import { SectionsContext } from '../context/sectionsContext';

import { tariffsReducer } from '../reducers/tariffsReducer';
import {
    FETCH_TARIFFS_REQUEST,
    FETCH_TARIFFS_SUCCESS,
    FETCH_TARIFFS_FAILURE,
} from '../reducers/constants';
import { API_URL_DATA, ROUTE_SECTIONS, ROUTE_TARIFFS } from '../utils/api';

const initialState = {
    data: [],
    isLoadingTariffs: false,
    isError: false
}

export const TariffsContainer = React.memo(({ children }) => {
    const [state, dispatch] = useReducer(tariffsReducer, initialState);
    const { selectID } = useContext(SectionsContext);
    const [wasBeChanged, setWasBeChanged] = useState(false);

    useEffect(() => {
        const fetchTariffs = async () => {
            dispatch({ type: FETCH_TARIFFS_REQUEST })
            try {
                const result = await Axios.get(`${API_URL_DATA}/${ROUTE_SECTIONS}?id=${selectID}`);
                const payload = result.data.map((item, index) => ({
                    key: index,
                    ...item
                }));
                dispatch({
                    type: FETCH_TARIFFS_SUCCESS,
                    payload
                });
            } catch (error) {
                dispatch({ type: FETCH_TARIFFS_FAILURE });
            }
        }
        if (selectID) fetchTariffs();
    }, [selectID, wasBeChanged]);

    const updateTariffs = async (obj) => {
        try {
            await Axios.post(`${API_URL_DATA}/${ROUTE_TARIFFS}`,
                `id=${obj.id}&title=${obj.title}&tariff=${obj.tariff}&subtitle=${obj.subtitle}&price=${obj.price}&edit=${true}`, {
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
        <TariffsContext.Provider value={{
            ...state, updateTariffs
        }}>
            {children}
        </TariffsContext.Provider>
    )
})