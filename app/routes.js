/* eslint flowtype-errors/show-errors: 0 */
import React from "react";

import WalletList from "./components/Wallet/";
import VoteList from "./components/Vote/";
import TokenList from "./components/Tokens/";
import TokenView from "./components/Tokens/View";
import ContactList from "./components/Contact/";
import SettingList from "./components/Settings/";
import SendAmount from "./components/Wallet/Send/SendAmount";
import Receive from "./components/Wallet/Receive/";
import Freeze from "./components/Wallet/Freeze";
import Create from "./components/Wallet/Create/";
import CreateAccount from "./components/Wallet/CreateAccount/";
import WalletView from "./components/Wallet/WalletView/";
import ViewTransaction from "./components/Wallet/WalletView/View";
import WalletBackup from "./components/Wallet/Backup/";
import Share from "./components/Settings/Share";
import ContactDetails from "./components/Contact/ContactDetails";
import VoteDetails from "./components/Vote/VoteDetails";
import Feedback from "./components/Settings/Feedback";
import AddressBook from "./components/Settings/AddressBook";
import Language from "./components/Settings/Language";
import Notifications from "./components/Settings/Notifications";
import Node from "./components/Settings/Node";
import CreateToken from "./components/Tokens/CreateToken";
import OfflineSignature from "./components/Wallet/OfflineSignature";
import Transfer from "./components/Transactions/Transfer";
import Tronwatch from "./components/Content/TronWatch";
import Broadcast from "./components/Transactions/Broadcast";
import VoteMultiple from "./components/Vote/Votes/";

export const routes = [
  {
    path: "/wallets/",
    sidebar: () => <WalletList />
  },
  {
    path: "/wallets/walletDetails/:account/:token?",
    main: () => <WalletView />
  },
  {
    path: "/wallets/walletBackup/:account",
    main: () => <WalletBackup />
  },
  {
    path: "/wallets/create",
    main: () => <Create />
  },
  {
    path: "/wallets/createAccount",
    main: () => <CreateAccount />
  },
  {
    path: "/wallets/send/:account/:token?",
    main: () => <SendAmount />
  },
  {
    path: "/wallets/receive/:account",
    main: () => <Receive />
  },
  {
    path: "/wallets/offline/:account",
    main: () => <OfflineSignature />
  },
  {
    path: "/wallets/freeze/:account",
    main: () => <Freeze />
  },
  {
    path: "/wallets/transactionDetails/:account/:txid",
    main: () => <ViewTransaction />
  },
  {
    path: "/settings/",
    sidebar: () => <SettingList />
  },
  {
    path: "/settings/addressbook",
    main: () => <AddressBook />
  },
  {
    path: "/settings/Feedback",
    main: () => <Feedback />
  },
  {
    path: "/settings/share",
    main: () => <Share />
  },
  {
    path: "/settings/notifications",
    main: () => <Notifications />
  },
  {
    path: "/settings/language",
    main: () => <Language />
  },
  {
    path: "/settings/node",
    main: () => <Node />
  },
  {
    path: "/vote/",
    sidebar: () => <VoteList />
  },
  {
    path: "/vote/voteDetails/:rep",
    main: () => <VoteDetails />
  },
  {
    path: "/vote/voting/",
    main: () => <VoteMultiple />
  },
  {
    path: "/tokens/",
    sidebar: () => <TokenList />
  },
  {
    path: "/tokens/TokenDetails/:token/",
    main: () => <TokenView />
  },
  {
    path: "/tokens/createtoken/",
    main: () => <CreateToken />
  },
  {
    path: "/contacts",
    sidebar: () => <ContactList />,
    main: () => <ContactDetails />
  },
  /* OFFLINE SIGNING STUFF*/
  {
    path: "/wallets/createtransfer/:account?",
    main: () => <Transfer />
  },
  {
    path: "/wallets/broadcast/",
    main: () => <Broadcast />
  },
  {
    path: "/wallets/createassettransfer/:account?/:token?",
    main: () => <SendAmount isCold="true" />
  },
  {
    path: "/wallets/createfreeze/:account?",
    main: () => <Freeze isCold="true" />
  },

  {
    path: "/",
    sidebar: () => <WalletList />,
    main: () => <Tronwatch />
  }
];
