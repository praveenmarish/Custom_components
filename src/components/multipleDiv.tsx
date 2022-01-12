import { keyframes, styled } from "@mui/material";

const Loading = keyframes({
    "from": {
        backgroundColor: "#aaaa",
        width: "1px",
    },
    "to": {
        backgroundColor: "#2b2d2f",
        width: "300px",
    }
})

const Changer = keyframes({
    "from": {
        backgroundColor: "#2b2d2f",
        width: "0px",
        height: "0px"
    },
    "to": {
        backgroundColor: "#71dfbe",
        width: "50px",
        height: "50px",
        borderRadius: "100%"
    }
})

const Stroke = keyframes({
    "to": {
        strokeDashoffset: 0
    }
})

const Base = (props: Props) => {

    return (
        <div {...props}>
            <div id="main" className="main">
                <svg x="0px" y="0px" fill="none" className="checkmark" viewBox="0 0 25 30">
                    <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
                </svg>
            </div>
        </div>
    )
}


const Animation = styled(Base)({
    "&": {
        position: "relative"
    },
    "& .main": {
        backgroundColor: "#2b2d2f",
        border: "none",
        borderRadius: "0.250em",
        fontWeight: "bold",
        cursor: "pointer",
        padding: 0,
        height: "10px",
        animation: `${Loading} 2000ms`,
        animationDirection: "alternate",
        animationIterationCount: 2
    },
    "& .main::after": {
        content: '""',
        display: "block",
        animation: `${Changer} 2000ms 4000ms`,
        animationFillMode: "forwards",
    },
    "& .checkmark": {
        stroke: "white",
        width: "30px",
        height: "30px",
        strokeDashoffset: "40.84104919433594",
        strokeDasharray: "40.84104919433594",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "3px",
        zIndex: 100,
        animation: `${Stroke} 1000ms 6000ms`,
        animationFillMode: "forwards",
    },
    "& .center, & .checkmark, & .main, & .main::after": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
});



export const MultiDiv = () => {
    return (<Animation />)
}

interface Props {
    className?: string
}