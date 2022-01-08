// Layout imports
import { AnimButton } from 'components/Button';
import { MultiDiv } from 'components/multipleDiv';
import { Progress } from 'components/Progress';
import { StyledSwitch } from 'components/StyledSwitch';
import MinimalLayout from 'Layout/Main';

//Animation routing


// ==============================|| CHAT ROUTING ||============================== //

const UiRoute = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'btn',
            element: <AnimButton />
        }, {
            path: 'loading',
            element: <Progress />
        }, {

            path: 'loadingCheckOk',
            element: <MultiDiv />
        }, {
            path: "switch",
            element: <StyledSwitch />
        }
    ],
};

export default UiRoute;