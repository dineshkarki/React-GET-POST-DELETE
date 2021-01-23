import React from 'react';
import axios from 'axios';

export default class GetData extends React.Component {
    state = {
        users:[]
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({users: res.data})
        })
    }
    render() {
        return (
           <ul>
               {
                   this.state.users.map(user => <li key={user.id}>{user.name}</li>)
               }
           </ul> 
        )
    }
}