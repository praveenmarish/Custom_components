import { Link, Outlet } from 'react-router-dom';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <div>
        <Link to="/btn"> Button</Link><br />
        <Link to="/loading">Loading</Link><br />
        <Link to="/loadingCheckOk">Loading to ok</Link><br />
        <Link to="/switch">Switch</Link>

        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Outlet />
        </div>
    </div>
);

export default MinimalLayout;