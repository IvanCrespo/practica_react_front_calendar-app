import { createSlice } from '@reduxjs/toolkit';

/* const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Ivan Crespo'
    }
} */

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        events: [],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.activeEvent = null;
        },
        onUpdateEvents: (state, { payload }) => {
            state.events = state.events.map(event => {
                if (event._id === payload._id) {
                    return payload;
                }

                return event;
            })
        },
        onDeleteEvent: (state) => {
            if (state.activeEvent) {
                state.events = state.events.filter(event => event._id !== state.activeEvent._id);
                state.activeEvent = null;
            }
        },
        onLoadEvents: (state, { payload = [] }) => {
            state.isLoadingEvents = false;
            // state.events = payload;
            payload.forEach(event => {
                const exists = state.events.some(dbEvent => dbEvent._id === event._id);
                if (!exists) {
                    console.log('No existe');
                    state.events.push(event);
                }
            })
        },
        onLogoutCalendar: (state) => {
            state.isLoadingEvents = true,
                state.events = [],
                state.activeEvent = null
        }
    }
});
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvents, onDeleteEvent, onLoadEvents, onLogoutCalendar } = calendarSlice.actions;