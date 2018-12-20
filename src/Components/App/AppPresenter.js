import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import Store from "store";

const AppPresenter = () =>(
  <Fragment>
    <Header/>
    <Flex>
        <Store.Consumer>
          {
            Store => {
              return Object.keys(Store.notifications).map(key =>
                <Notification 
                    key = {Store.notifications[key].id}
                    id = {Store.notifications[key].id}
                    text = {Store.notifications[key].text}
                    seen = {Store.notifications[key].seen}
                />
              )
            }
          }
        </Store.Consumer>  
    </Flex>
  </Fragment>
);

export default AppPresenter;