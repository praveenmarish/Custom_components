import { styled } from "@mui/material";

const Base = (props: Props) => {
    return (
        <div {...props}></div>
    )
}

const Animation = styled(Base)({
    width: "300px",
    height: "10px",
    borderRadius: "0.250em",
    animation: "progress 1000ms",
    animationFillMode: "forwards",
    animationDirection: "alternate",
    animationIterationCount: "infinite",

    "@keyframes progress": {
        "from": {
            backgroundColor: "#aaaa",
            width: "1px",
        },
        "to": {
            backgroundColor: "#2b2d2f",
            width: "300px",
        }
    }
});


export const Progress = () => {
    return (<Animation />)
}

interface Props {
    className?: string
}