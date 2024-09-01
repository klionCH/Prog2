import { Outlet, Link } from "react-router-dom";

const Angeln = () => {
    return (
        <>
            <h1>Angeln</h1>
            <nav>
                <Link to="/">Start</Link>
                <Link to="/auto">Auto</Link>
                <Link to="/angeln">Angeln</Link>
            </nav>
            <Outlet/>
        </>
    );
};

export default Angeln;