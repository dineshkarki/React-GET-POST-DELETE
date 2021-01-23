import React from 'react';

export default class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onChange = (e) => {
        this.setState({value: e.target.value});
    }
    sendDataToParent = () => {
        this.props.sendDataToParent(this.state.value);
    }
    render() {
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.onChange} /> 
                <button onClick={this.sendDataToParent}>Send Data to Parent</button>
            </div>
        )
    }
}