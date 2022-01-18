import { ButtonProps } from "@mui/material"
import { styled } from "@mui/system"
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Dialogs from "./login";
// import {
//     getAuth,
//     signInWithPopup,
//     GoogleAuthProvider,
// } from "firebase/auth";

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

    const responseGoogle = (response: any) => {
        console.log(response)
    }
    const onSuccess = (response: any) => {
        console.log(response)
    }
    const logout = () => {
        console.log("logout")
    }

    return (<div>
        <Animation />
        {/* <GoogleLogin clientId="964222035550-l18h6rfmb1si65171shall8u3gdctt6b.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={responseGoogle}
            isSignedIn={true}
        /> */}
        {/* <GoogleLogout
            clientId="964222035550-l18h6rfmb1si65171shall8u3gdctt6b.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
        ></GoogleLogout> */}
        <Dialogs />
    </div>)
}