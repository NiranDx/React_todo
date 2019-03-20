import React,{Component} from 'react'
import {connect} from 'react-redux'
class TaskList extends Component {
   render() {
       console.log("in TaskList1",this.props.activitie)
           return (
           <ul > {
                   this.props.activitie.tasks.map((item) => (
                      <li key={item.id}> Todo => {item.task} </li>
                   ))
           
               }
           </ul>)
   }
}

const mapStateToProps = (state) => {
    return {
        activitie:state.taskPass
    }
}

export default connect(mapStateToProps)(TaskList)