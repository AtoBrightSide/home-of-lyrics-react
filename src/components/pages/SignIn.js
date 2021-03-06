import React from 'react'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

import axios from '../../axios'
import A from 'axios'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn() {
    const [values, setValues] = React.useState({
        username: '',
        password: ''
    });
    const history = useHistory();

    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: values.username,
            password: values.password
        }

        A.post('http://127.0.0.1:5000/login', data)
            .then(response => {
                console.log(response.data.token)
                localStorage.setItem('token', response.data.token);
                history.push('/');
            })
            .catch(error => {
                console.log("error is: ", error.response)
                swal({
                    title: 'Invalid Entry',
                    text: 'Check username and/or password',
                    icon: 'warning',
                    dangerMode: true
                  });
            })

    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} method="POST" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    value={values.username}
                                    onChange={(e) => {
                                        console.log('ef');
                                        setValues((values) => ({
                                            ...values,
                                            username: e.target.value
                                        }));
                                    }}
                                    autoComplete="username"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={values.password}
                                    onChange={(e) => {
                                        console.log('ef');
                                        setValues((values) => ({
                                            ...values,
                                            password: e.target.value
                                        }));
                                    }}
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            LOGIN
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default SignIn
