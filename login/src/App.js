import React, { Component } from 'react';
import Login from './components/login';
import Dashboard from './components/dashboard';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faSmile as fasFaSmile, faArrowAltCircleRight, faDollarSign, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import {faSmile as farFaSmile, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'
// import $ from 'jQuery';

library.add(faAngleDown, farFaSmile, fasFaSmile, faArrowAltCircleRight, faDollarSign, faMoneyBillAlt, faUserPlus )


class App extends Component {

    state = {
      WSCONFIG : {
        "pacnet": {
            "socketURL": "papi-pacnet.fpms8.me:9000",
        },
        "globe": {
            "socketURL": "papi-globe.fpms8.me:9000",
        },
        "wtt": {
            "socketURL": "papi-wtt.fpms8.me:9000",
        },
        "pccw": {
            "socketURL": "papi-pccw.fpms8.me:9000",
        },
        "lan": {
            "socketURL": "papi-lan.fpms8.me:9000",
        },
        "dev": {
            "socketURL": "devtest.fpms8.me:9000",
        },
        "dev-all": {
            "socketURL": "devtest-all.fpms8.me:9000",
        }
      },

      cardsInfo: [
        {id:1, info: "onlinePlayer", chinese: "在线玩家", value: 0, awesomeIcon: ['far', 'smile']},
        {id:2, info: "topup", chinese: "充值额度", value: 20000, awesomeIcon: ['fas', 'dollar-sign']},
        {id:3, info: "withdrawal", chinese: "提款额", value: 0, awesomeIcon: ['fas', 'dollar-sign']},
        {id:4, info: "bet", chinese: "投注额", value: 100000, awesomeIcon: ['far', 'money-bill-alt']},
        {id:5, info: "newPlayer", chinese: "新玩家", value: 0, awesomeIcon: ['fas', 'user-plus']},
      ]
    }
    

  render() {
    
    const servers = Object.keys(this.state.WSCONFIG);
    return (
      <div>
        {/* <Login
          servers = {servers}
        />  */}

        <Dashboard
          cards = {this.state.cardsInfo}
          />
      </div>
    );
  }
}


export default App;
