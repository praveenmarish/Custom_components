import { styled } from "@mui/system"
import img from "assets/bluemoon.jpg"

const Base = (props: Props) => {
    return (
        <div {...props}>
            <div className="container">
            </div>
        </div>
    )
}

const BlurComponent = styled(Base)(({ theme }) => ({
    "&": {
        height: "80vh",
        width: "90vw",
        position: "relative",
        background: "center",
        backgroundImage: `url(${img})`,
    },
    "& .container": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "70%",
        animation: "expand 2s",
        animationFillMode: "forwards",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
        //background: theme.palette.primary.dark,
        //opacity: 0.6
    },
    "& .container::before": {
        content: "''",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "center",
        backgroundImage: `url(${img})`,
        filter: "blur(8px)",
    },
    "@keyframes expand": {
        "0%": {
            width: "1%",
        },
        "100%": {
            width: "80%",

        }
    }
}));

export const BlurEffect = () => {
    return (<BlurComponent />)
}

interface Props {
    className?: string
}