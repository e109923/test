import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Header from './components/Header.js';
import Default from './components/Default.js';
import Appbar from './components/Appbar.js';

import axios from 'axios';
import { API_BASE_URL } from './constants/apiConstants';
import Bildiri from './components/Bildiri.js';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loginStatus: null,
        }
    }

    componentDidMount() {
        this.loginUpdate();
    }

    loginUpdate(){
        let token = localStorage.getItem("EYS_TOKEN");
        let personelId = localStorage.getItem("EYS_PERSONELID");

        let tmpStatus = (token!=="" && personelId>0)?true:false;

        if(tmpStatus){
            const payload = {
                "token": token,
                "personelId": personelId,
            }
    
            axios.post(API_BASE_URL + 'giris/kontrol', payload)
                .then((response) => {
                    tmpStatus=response.data.response;
                    this.setState({loginStatus:tmpStatus});
                });
        }else{
            this.setState({loginStatus:tmpStatus});
        }
      }

      handler = (val) => {
        this.setState({loginStatus:val && this.loginUpdate()});
      }

    render() {
        return (
            <>
                {this.state.loginStatus===true &&
                    <>
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                <Appbar handler={val => this.handler(val)} page="panel" />
                                </Route>
                                <Route path="/baglanti">
                                <Appbar handler={val => this.handler(val)} page="baglanti" />
                                </Route>
                                <Route path="/panel" page="panel">
                                    <Appbar handler={val => this.handler(val)} page="panel" />
                                </Route>
                                <Route path="/isliste">
                                <Appbar handler={val => this.handler(val)} page="isliste" />
                                </Route>
                                <Route path="/personelliste">
                                <Appbar handler={val => this.handler(val)} page="personelliste" />
                                </Route>
                                <Route path="/yetkililiste">
                                <Appbar handler={val => this.handler(val)} page="yetkililiste" />
                                </Route>
                                <Route path="/ekipmanliste">
                                <Appbar handler={val => this.handler(val)} page="ekipmanliste" />
                                </Route>
                                <Route path="/sozlesmeliste">
                                <Appbar handler={val => this.handler(val)} page="sozlesmeliste" />
                                </Route>
                                <Route path="/rapor">
                                <Appbar handler={val => this.handler(val)} page="rapor" />
                                </Route>
                            </Switch>

                        </Router>

                        <Bildiri baslik="Bilgi" aciklama="Giriş başarılı" degisken={new Date()} />
                        
                        </>
                }

                {this.state.loginStatus===false &&
                    <Container maxWidth="lg">
                    <Header />
                    <Default handler={val => this.handler(val)} />
                    </Container>
                }

                {this.state.loginStatus===null &&
                    <p>Vvino yükleniyor...</p>
                }

                </>
        )
    }
}
