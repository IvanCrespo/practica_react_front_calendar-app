import { addHours } from "date-fns";
import { useCalendarStore, useUIStore } from "../../hooks"

export const FabAddNew = () => {

    const { openDateModel } = useUIStore();
    const { setActiveEvent } = useCalendarStore();
    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Ivan Crespo'
            }
        });
        openDateModel();
    }

    return (
        <button className="btn btn-primary fab" onClick={handleClickNew}>
            <i className="fa fa-plus"></i>
        </button>
    )
}
