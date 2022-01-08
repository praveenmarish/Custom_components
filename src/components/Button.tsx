import { ButtonProps } from "@mui/material"
import { height, styled } from "@mui/system"

const Base = (props: ButtonProps) => {
    return (
        <button {...props}> Submit </button>
    )
}

const Animation = styled(Base)({
    "&": {
        backgroundColor: "#2b2d2f",
        color: "#71dfbe",
        border: "none",
        borderRadius: "0.250em",
        fontWeight: "bold",
        cursor: "pointer",
        padding: 0,
        width: "125px",
        height: "40px",
    },
    "&:hover": {
        animation: "progress 2s",
        backgroundColor: "#71dfbe"
    },
    "@keyframes progress": {
        "from": {
            backgroundColor: "#2b2d2f"
        },
        "to": {
            backgroundColor: "#71dfbe"
        }
    }
});

export const AnimButton = () => {
    return (<Animation />)
}