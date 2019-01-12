import React, { Component } from "react";
import { FormattedNumber, FormattedDate, FormattedTime } from "react-intl";
import SubHeaderToken from "./SubHeaderToken";
import styles from "./SubHeader.css";
import { dropsToTrx } from "../../../utils/currency";

export default class SubHeader extends Component {
  render() {
    console.log(this.props.account);
    return (
      <div className={styles.main}>
        <div className={styles.mainAmount}>
          <FormattedNumber value={dropsToTrx(this.props.account.trx)} />{" "}
          <span>TRX</span>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subAmountContainer}>
            <div className={styles.subAmountHeader}>Bandwidth</div>
            <div className={styles.subAmount}>
              <FormattedNumber value={this.props.account.bandwidth} />{" "}
              <span>BW</span>
            </div>
          </div>
          <div className={styles.subAmountContainer}>
            <div className={styles.subAmountHeader}>TronPower</div>
            <div className={styles.subAmount}>
              <FormattedNumber value={this.props.account.frozenBalance} />{" "}
              <span>TP</span>
            </div>
            {this.props.account.frozenBalance > 0 ? (
              <div className={styles.tpExpire}>
                Expires:{" "}
                <FormattedDate value={this.props.account.frozenExpireTime} />{" "}
                <FormattedTime value={this.props.account.frozenExpireTime} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={styles.scroll}>
          <div className={styles.container}>
            {Object.keys(this.props.account.tokens2).map((coin, i) => {
              if (this.props.account.tokens2[coin].amount > 0) {
                return (
                  <SubHeaderToken
                    key={coin}
                    amount={this.props.account.tokens2[coin].amount}
                    token={this.props.account.tokens2[coin]}
                    isToken="true"
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
