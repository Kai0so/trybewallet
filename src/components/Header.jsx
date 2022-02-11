import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;

    return (
      <>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <span data-testid="total-field">0 </span>
        <span data-testid="header-currency-field">BRL</span>
      </>
    )
  }
}

const mapStateToProps = state => ({
  userEmail: state.user.email});

export default connect(mapStateToProps)(Header);