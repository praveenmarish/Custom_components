import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LoginForm from './loginform';
import { styled } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import RegisterationForm from './registerform';

const StyledDialog = styled(Dialog)({
    "& .MuiDialog-paper": {
        height: "500px",
        width: "600px"
    }
})

const StyledDialogTitle = styled(DialogTitle)({
    textAlign: "center",
    marginBottom: "20px"
})

const StyledDialogContent = styled(DialogContent)({
    //position: "relative"
})

export default function Dialogs() {
    const [search, setSearch] = useSearchParams();
    const [openRegister, setOpenRegister] = React.useState(search.get("Dialog") === "Register")
    const [openLogin, setOpenLogin] = React.useState(search.get("Dialog") === "Login");
    const [openReset, setOpenReset] = React.useState(false)

    React.useEffect(() => {
        console.log(openRegister, openLogin)
        if (search.get("Dialog")) {
            if (search.get("Dialog") === "Login") {
                setOpenRegister(false)
                setOpenLogin(true)
            } else if (search.get("Dialog") === "Register") {
                setOpenLogin(false)
                setOpenRegister(true)
            }
        } else {
            setOpenLogin(false);
            setOpenRegister(false)
        }
    }, [search])

    const handleClickOpen = () => {
        setSearch({ Dialog: "Login" })
        setOpenLogin(true)
    };

    const handleClose = () => {
        setOpenLogin(false);
        setOpenRegister(false)
        setSearch({})
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Login
            </Button>
            <StyledDialog
                open={openLogin}
                onClose={handleClose}
            >
                <StyledDialogTitle>Login</StyledDialogTitle>
                <StyledDialogContent>
                    <LoginForm />
                </StyledDialogContent>
            </StyledDialog>
            <StyledDialog
                open={openRegister}
                onClose={handleClose}
            >
                <StyledDialogTitle>Register</StyledDialogTitle>
                <StyledDialogContent>
                    <RegisterationForm />
                </StyledDialogContent>
            </StyledDialog>
            <StyledDialog
                open={openReset}
                onClose={handleClose}
            >

            </StyledDialog>
        </React.Fragment>
    );
}
