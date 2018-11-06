import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {Button, Dropdown} from "semantic-ui-react";

import fs from 'fs';
import path from 'path'

import {connect} from "react-redux";
import Header from "../ContentPrimaryHeader";
import Wallet from "./Wallet";

import ReactMarkdown from 'react-markdown';

import {MoreIcon, WalletIcon, DownloadIcon, SendIcon} from "../Icons";
import styles from "./WalletList.css";
import buttonStyles from "../Button.css";

const TOS_KEY = 'USER_ACCEPTED_TOS';
const ACCEPTED = 'ACCEPTED';

const tos = fs.readFileSync(path.join(__dirname, 'components/Wallet/tos.md'), 'utf8');

class WalletList extends Component {

  constructor(props){
    super(props);


    const tosAccepted = (window.localStorage.getItem(TOS_KEY) === ACCEPTED);

    this.state = {
      tosAccepted,
      isChecked: false
    }
  }

  handleChange() {
    this.setState({ isChecked: !this.state.isChecked })
  }

  clickAccept(){
    if(this.state.isChecked){
      window.localStorage.setItem(TOS_KEY, ACCEPTED);
      this.setState({
        tosAccepted: true
      });
    }
  }

  renderTos() {
    if(this.state.tosAccepted)
      return '';

    return (
      <div className={styles.tosContainer}>
        <div className={styles.tosHeader}>
          The TronWatch Desktop Wallet is currently in BETA.<br/>
          It is running on the TRON Mainnet, however it is still BETA software, it changes often and can contain bugs. Use at
          your own risk.<br/>
          Always make sure you have backups of your private key and recovery phrases.
        </div>

        <div className={styles.tos}>
            <ReactMarkdown source={tos}/>
        </div>

        <div className={styles.tosCheckboxContainer}>
          <input onChange={this.handleChange.bind(this)} value={this.state.tosAccepted} type="checkbox"/>I read and accept the Terms of Service
        </div>
        <button onClick={this.clickAccept.bind(this)}>Accept</button>
      </div>
    )
  }

  render() {
    let accounts = this.props.wallet.persistent.accounts;
    let accountKeys = Object.keys(accounts);
    return (
      <div className={styles.container}>
        {this.renderTos()}
        <Header className={styles.header} text="MY WALLETS :">
          <Dropdown icon={<MoreIcon/>}>
            <Dropdown.Menu>
              <NavLink to="/wallets/broadcast">
                <Dropdown.Item
                  text="Broadcast Signed Transaction"
                  icon={<SendIcon/>}
                />
              </NavLink>

              <NavLink to="/wallets/createtransfer">
                <Dropdown.Item text="Create Raw Transfer" icon={<SendIcon/>}/>
              </NavLink>
              <NavLink to="/wallets/createassettransfer">
                <Dropdown.Item
                  text="Create Raw Asset Transfer"
                  icon={<SendIcon/>}
                />
              </NavLink>
              <NavLink to="/wallets/createfreeze">
                <Dropdown.Item
                  text="Create Raw Freeze Transaction"
                  icon={<SendIcon/>}
                />
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </Header>
        <div className={styles.buttonContainer}>
          <NavLink to="/wallets/create">
            <Button
              className={`${buttonStyles.button} ${buttonStyles.gradient}`}
            >
              Create New Wallet
            </Button>
          </NavLink>
        </div>
        <div className={styles.walletContainer}>
          {accountKeys.map((key, i) => (
            // NavLink in Wallet Component
            <Wallet
              key={key}
              pub={accounts[key].publicKey}
              trx={accounts[key].trx}
              name={accounts[key].name}
              tokens={accounts[key].tokens}
              index={accounts[key].publicKey}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({wallet: state.wallet}),
    dispatch => ({})
  )(WalletList)
);
