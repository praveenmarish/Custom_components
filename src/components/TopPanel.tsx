// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { useSearchParams } from 'react-router-dom';
// import { AnimButton } from './Button';
// import { Progress } from './Progress';
// import { MultiDiv } from './multipleDiv';
// import { StyledSwitch } from './StyledSwitch';

// function TabPanel(props: Main.TabPanelProps) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 1 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// function a11yProps(index: number) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// const Base = ({ children }: Main.TabProps) => {
//     return <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
//         {children}
//     </div>
// }

// const ComponentMap: { [key: string]: JSX.Element } = {
//     "button": <AnimButton />,
//     "loading": <Progress />,
//     "loadandok": <MultiDiv />,
//     "switch": <StyledSwitch />
// }

// const Route = (name: string) => {
//     return <Base> {ComponentMap[name]} </Base>
// }

// const BasicTabs = () => {

//     const [search, setSearch] = useSearchParams();
//     const [value, setValue] = React.useState(parseInt(search.get("tab") || '0'));

//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);
//         setSearch({ tab: newValue.toString() })
//         //navigate()
//     };

//     return (
//         <Box sx={{ width: '100%' }}>
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                 <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
//                     <Tab label="Button" {...a11yProps(0)} />
//                     <Tab label="Loading" {...a11yProps(1)} />
//                     <Tab label="Loading and ok" {...a11yProps(2)} />
//                     <Tab label="Switch" {...a11yProps(3)} />
//                 </Tabs>
//             </Box>
//             <TabPanel value={value} index={0}>
//                 {Route("button")}
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//                 {Route("loading")}
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//                 {Route("loadandok")}
//             </TabPanel>
//             <TabPanel value={value} index={3}>
//                 {Route("switch")}
//             </TabPanel>
//         </Box>
//     );
// }

// export default BasicTabs

// namespace Main {
//     export interface TabProps {
//         children?: React.ReactNode;
//     }
//     export interface TabPanelProps {
//         children?: React.ReactNode;
//         index: number;
//         value: number;
//     }
// }


import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import { useSearchParams } from 'react-router-dom';
import { AnimButton } from './Button';
import { Progress } from './Progress';
import { MultiDiv } from './multipleDiv';
import { StyledSwitch } from './StyledSwitch';
import React from 'react';


const Tab = styled(TabUnstyled)({
    fontFamily: "sans-serif",
    color: "white",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "bold",
    backgroundColor: "transparent",
    width: "100%",
    padding: "12px 16px",
    margin: "6px 6px",
    border: "none",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",

    "&:hover": {
        backgroundColor: "#808285",
    },

    "&.Mui-selected": {
        color: "#2b2d2f",
        outline: "none",
        backgroundColor: "#ffff",
        cursor: "not-allowed",
    }
});

const TabPanel = styled(TabPanelUnstyled)({
    width: "100%",
    fontFamily: "sans-serif",
    fontSize: "0.875rem",
});

const TabsList = styled(TabsListUnstyled)({
    minWidth: "320px",
    backgroundColor: "#2b2d2f",
    borderRadius: "8px",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "space-between"
});


const Base = ({ children }: Main.TabProps) => {
    return <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        {children}
    </div>
}

const ComponentMap: { [key: string]: JSX.Element } = {
    "button": <AnimButton />,
    "loading": <Progress />,
    "loadandok": <MultiDiv />,
    "switch": <StyledSwitch />
}

const Route = (name: string) => {
    return <Base> {ComponentMap[name]} </Base>
}

const StyledTabs = () => {

    const [search, setSearch] = useSearchParams();
    const [value, setValue] = React.useState(parseInt(search.get("tab") || '0'));
    console.log(value)

    const handleChange = (event: React.SyntheticEvent<Element, Event>, value: string | number) => {
        setValue(value as number);
        setSearch({ tab: value.toString() })
    };

    return (
        <TabsUnstyled onChange={handleChange} value={value}>
            <TabsList>
                <Tab>Button</Tab>
                <Tab>Loading</Tab>
                <Tab>Loading and ok</Tab>
                <Tab>Switch</Tab>
            </TabsList>
            <TabPanel value={0}>{Route("button")}</TabPanel>
            <TabPanel value={1}>{Route("loading")}</TabPanel>
            <TabPanel value={2}>{Route("loadandok")}</TabPanel>
            <TabPanel value={3}>{Route("switch")}</TabPanel>
        </TabsUnstyled>
    );
}

export default StyledTabs

namespace Main {
    export interface TabProps {
        children?: React.ReactNode;
    }
    export interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }
}