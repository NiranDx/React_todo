import React, { Component } from 'react';

class InputTask extends Component {

    state = { task: '' }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <input type="hidden" name="id" value={this.props.id} /><br />
                DO : <input type="text" name="task" onChange={this.handleChange} /> <br />
                WHERE : <input type="text" name="address" onChange={this.handleChange}/> <br/>
                DATE : <input type="date" name="date" onChange={this.handleChange}/> <br/>
                <button onClick={() => this.props.addTask(this.state.task,this.state.address,this.state.date)}>Add</button>
            </div>
        )
    }
}

export default InputTask