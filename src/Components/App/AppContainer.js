import React , {Component} from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";


class AppContainer extends Component{

  constructor(props){
    super(props);
   let check = null;
   this._seeNotification = id =>{
        this.setState( currentState  => {
          
          if(currentState.notifications[id].seen){
            check = false;
          }else{
            check =  true;
          }
          return{
            ...currentState ,
              notifications :{
              ...currentState.notifications ,
              [id] : {...currentState.notifications[id],
                seen : check    
                     
              }
               
            }
          }
        } )
    }

    this._deleteNotification = id =>{
      this.setState(
        currentState =>{
          const newState = delete currentState.notifications[id];
          return newState;
        }
      )
    }

    this.state ={
      notifications :{
        "1" :{
            id :1,
            text :"lee",
            seen : false
        },
        "2" :{
          id :2,
          text :"bae",
          seen : false
      },
      "3" :{
        id :3,
        text :"an",
        seen : false
      }
      },
      seeNotification :  this._seeNotification ,
      deleteNotification :this._deleteNotification
    }
  }

  render(){
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    )
  }

}
export default AppContainer