import React from 'react';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {data: null};
    }
    receivedDataFromChild = (data) => {
        this.setState({data});
    } 
    render() {
        return(
            <div>
                <ChildComponent sendDataToParent={this.receivedDataFromChild}></ChildComponent>
                <div>{this.state.data && <div>Data from Child Component : {this.state.data}</div>}</div>
            </div>
        )
    }
}