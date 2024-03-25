import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvents } from "../store";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        // TODO: Llegar al backend

        // Todo bien
        if (calendarEvent._id) {
            // Actualizando
            dispatch(onUpdateEvents({ ...calendarEvent }));
        } else {
            // Creando
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
        }
    }

    const startDeleteEvent = () => {
        // Todo: llegar al backend
        dispatch(onDeleteEvent());
    }

    return {
        // Propiedades
        activeEvent,
        events,
        hasEventSelected: !! activeEvent,

        // Metodos
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent
    }
}
