export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mn-4 px-4">
            <span className="navbar-brand">
                <i className="fas fa-calendar-alt"></i>
                &nbsp;
                Ivan Crespo
            </span>
            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                &nbsp;
                Salir
            </button>
        </div>
    )
}
