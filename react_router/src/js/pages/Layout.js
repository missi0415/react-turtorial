import React from "react";
import { Link,withRouter } from "react-router-dom";

class Layout extends React.Component {
  navigate() {
    console.log(this.props.history);
    // this.props.history.push("/");
    this.props.history.replace("/")
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        {/* <Link to="/archives">archives</Link>,
        <Link to="/settings">settings</Link> */}
        <Link to="/archives"><button class="btn btn-danger">archives</button></Link>
        <Link to="/settings"><button class="btn btn-success">settings</button></Link>
        <button class="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}
export default withRouter(Layout);