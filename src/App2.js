import React, { Component } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './constants/apiConstants';
export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loginStatus: this.loginUpdate(),
        }
    }

    loginUpdate(){
        let token = localStorage.getItem("TOKEN");

        let tmpStatus = token!==""?true:false;

        if(tmpStatus){
            const payload = {
                "token": token
            }
    
            axios.post(API_BASE_URL + 'giris/kontrol', payload)
                .then((response) => {
                    tmpStatus=response.data.response;
                    return tmpStatus;
                });
        }else{
            return tmpStatus;
        }

        return null;
      }

    render() {
        return (
            <>
                {this.state.loginStatus===true &&
                    <p>Part 1</p>
                }

                {this.state.loginStatus===false &&
                    <p>Part 2</p>
                }

                {this.state.loginStatus===null &&
                    <p>Part 3</p>
                }
                </>
        )
    }
}
