import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import {useForm} from "../../hooks" 
import {startGoogleSignIn, startLoginWithEmailPassword} from "../../store"
import { useMemo, useState } from "react";

export const LoginPage = () => {
    const {status, errorMessage} = useSelector(state => state.auth)
    const dispath = useDispatch()
    
    const [formSubmitted, setFormSubmitted] = useState(false)
    const {email, password, onInputChange} = useForm({
        email: '',
        password: ''
    });
    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true)
        dispath(startLoginWithEmailPassword({email, password})) //! no es esta la accion a despachar
        // console.log({email, password})
    }

    const isAthenticating = useMemo(() => status === 'checking', [status])

    const onGoogleSignIn = () => {
        dispath(startGoogleSignIn())
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            onChange={onInputChange}
                            value={email}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            onChange={onInputChange}
                            value={password}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid 
                            item 
                            xs={12} 
                            sm={12} 
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                                disabled = {isAthenticating}
                                type="submit" 
                                variant="contained" 
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                                disabled = {isAthenticating}
                                variant="contained" fullWidth
                                onClick={onGoogleSignIn}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"end"}>
                        <Link
                            component={RouterLink}
                            color="inherit"
                            to="/auth/register"
                        >
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
