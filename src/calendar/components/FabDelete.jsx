import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {

    const { startDeleteEvent, hasEventSelected } = useCalendarStore();
    const handleClickDelete = () => {
        startDeleteEvent();
    }

    return (
        <button className="btn btn-danger fab-danger" style={{display: hasEventSelected ? '' : 'none'}} onClick={handleClickDelete}>
            <i className="fa fa-trash-alt"></i>
        </button>
    )
}
