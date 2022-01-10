import StyledTabs from 'components/TopPanel';
import { Outlet } from 'react-router-dom';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <div>

        <StyledTabs />

        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Outlet />
        </div>
    </div>
);

export default MinimalLayout;