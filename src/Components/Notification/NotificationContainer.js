import React, { Component } from "react";
import NotificationPresenter from "./NotificationPresenter";

class NotificationContainer extends Component {

  render(){
    return <NotificationPresenter {...this.props} {...this.state}  />
  }
}

export default NotificationContainer;