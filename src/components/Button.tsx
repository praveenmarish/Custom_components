import { ButtonProps } from "@mui/material"
import { styled } from "@mui/system"

const Base = (props: ButtonProps) => {
    return (
        <button {...props}> Submit </button>
    )
}

const Animation = styled(Base)(({ theme }) => ({
    "&": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.dark,
        border: "none",
        borderRadius: "0.250em",
        fontWeight: "bold",
        cursor: "pointer",
        padding: 0,
        width: "125px",
        height: "40px",
        transition: "width 2s, background-color 2s"
    },
    "&:hover": {
        width: "50px",
        backgroundColor: theme.palette.secondary.dark
    }
}));

export const AnimButton = () => {
    return (<Animation />)
}