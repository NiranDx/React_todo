import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'

export const addtask = (value) => ({
  type:"ADDTASK",
  payload: value
})

const initState = {
id:2,
  tasks: [
          {id: 1, task: 'Do homework'},
          {id: 2, task: 'coding '}],
}

const taskReducer = (state = initState , action) => {
  switch(action.type){
    case "ADDTASK":
          state = {
           ...state,

           tasks:[...state.tasks,{id:state.tasks.id+=1,task:action.payload,}]
          }
    default:
  }
  return state
}
const rootReducer = combineReducers({
  taskPass : taskReducer
})
export const store = createStore(rootReducer)

class App extends Component {

   render() {   
       return (
         <Provider store={store}>
              <div><center>
                  <h1>Todo</h1>
                  <TaskList/>
                  <InputTask/>
                  <br/></center>
              </div>
         </Provider>
           
       );
   }
}
export default App;