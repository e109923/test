import React, { Component } from 'react'
import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../constants/apiConstants';
import Image from 'react-bootstrap/Image';
import Bildiri from './Bildiri.js';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtSifre: '',
            aciklama: null,
            aciklamaTur: null,
        }
    }

    handleChange = (e) => {
        const { id, value } = e.target
        this.setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    handleSubmitClick = (e) => {
        e.preventDefault();

        const payload = {
            "key": API_KEY,
            "eposta": this.state.txtEmail,
            "sifre": this.state.txtSifre,
        }

        axios.post(API_BASE_URL + 'giris', payload)
            .then((response) => {
                this.setState({ aciklama: response.data.aciklama, aciklamaTur: response.data.aciklamaTur, degisken: new Date() });

                if(response.data.personelId>0){
                    localStorage.setItem("EYS_TOKEN", response.data.token);
                    localStorage.setItem("EYS_PERSONELID", response.data.personelId);
                    localStorage.setItem("EYS_ORGANIZASYONID", response.data.organizasyonId);

                    this.props.handler(true);
                }
            });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmitClick}>

                        <Grid item xs={12} style={{textAlign:"center"}}>
                            <Image src="images/logo.png" style={{ height: "100px", width: "100px" }} alt="Logo" />
                        </Grid>

                        <Grid item xs={3}>
                            <label htmlFor="txtUsername">E-Posta</label>
                        </Grid>
                        <Grid item xs={8}>
                            <input type="text" id="txtEmail" className="form-control" value={this.state.txtEmail} onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={1}>
                            &nbsp;
                        </Grid>

                        <Grid item xs={3}>
                            <label htmlFor="txtPassword">Şifre</label>
                        </Grid>
                        <Grid item xs={6}>
                            <input type="password" id="txtSifre" className="form-control" value={this.state.txtSifre} onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={3}>
                            &nbsp;
                        </Grid>

                        <Grid item xs={3}>
                            &nbsp;
                        </Grid>
                        <Grid item xs={6}>
                            <Button id="btnGiris"
                                className="form-control btn-primary"
                                type="submit">Giriş</Button>
                        </Grid>
                        <Grid item xs={3}>
                            &nbsp;
                        </Grid>
                </form>
                
                <Bildiri baslik={this.state.aciklamaTur} aciklama={this.state.aciklama} degisken={this.state.degisken} />
                
            </>
        )
    }

}
