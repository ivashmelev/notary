import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';
import { AppointmentContext } from '../context/appointmentContext';
import { appointmentReducer } from '../reducers/appointmentReducer';
import {
    FETCH_APPOINTMENT_REQUEST,
    FETCH_APPOINTMENT_SUCCESS,
    FETCH_APPOINTMENT_FAILURE,
} from '../reducers/constants';
import { API_URL_DATA, ROUTE_APPOINTMENT } from '../utils/api';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const AppointmentContainer = React.memo(({ children }) => {
    const [state, dispatch] = useReducer(appointmentReducer, initialState)

    useEffect(() => {
        const fetchAppointment = async () => {
            dispatch({ type: FETCH_APPOINTMENT_REQUEST })
            try {
                const result = await Axios.get(`${API_URL_DATA}/${ROUTE_APPOINTMENT}`);
                const users = result.data.sort((a, b) => {
                    if (moment(a.date) > moment(b.date)) return -1;
                    if (moment(a.date) < moment(b.date)) return 1;
                    return 0
                })
                const payload = users.map((item, index) => ({
                    key: index,
                    name: item.name,
                    date: moment(item.date).format('DD MMMM YYYY'),
                    phone: `+${item.phone.replace(' ', '')}`,
                    mail: item.mail
                }));
                dispatch({
                    type: FETCH_APPOINTMENT_SUCCESS,
                    payload
                });
            } catch (error) {
                dispatch({ type: FETCH_APPOINTMENT_FAILURE });
            }
        }
        fetchAppointment();
    }, []);

    return (
        <AppointmentContext.Provider value={{
            ...state
        }}>
            {children}
        </AppointmentContext.Provider>
    )
})