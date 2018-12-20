import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";
import FontAwesome from "react-fontawesome";
import Store from "store";

const Notification = styled.div`
    background-color : white;
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    width:80%;
    padding:20px;
    border-radius:15px;
    margin-bottom:15px;
    box-sizing:border-box;
    border : 2px  solid ${props => (props.seen?"transparent" :"yellow")}
`;

const Title = styled.span `
  font-weight:600;
`;

const Button = styled.button `
  height:40px;
  width:40px;
  border-radius:50%;
  border:0;
  color:white;
  font-size:10px;
  cursor:pointer;
  background-color:${ props =>{
    if(props.seen){
      return "skyblue";
    }else if(props.success){
      return "green";
    }else if(props.danger){
      return "pink";
    }
  }};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-out;
  &:hover{
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
  &:active,
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(1px);
  }
`;

const NotificationPresenter = ({id,text, seen}) =>(
  <Notification seen ={seen}>
    <Flex alignCenter justifyBetween>
      <Title>{text}</Title>
      <FlexItem>
        <Store.Consumer>
          {store =>(
            <Fragment>
              <Button success seen ={seen} onClick ={() => store.seeNotification(id)} >
                  <FontAwesome name="times"/>
              </Button>
            </Fragment>
          ) }
        </Store.Consumer>
      </FlexItem>
    </Flex>
  </Notification>
);

NotificationPresenter.propTypes ={
    id : PropTypes.number.isRequired,
    seen : PropTypes.bool.isRequired,
    text : PropTypes.string.isRequired
}

export default NotificationPresenter;