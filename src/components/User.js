// import { useState } from "react";
import { Component } from "react";
class User extends Component {
    // const [count] = useState(0);
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
        console.log('Second Child Constructor')
    }

    componentDidMount() {
        console.log('Second Child Mounted')
    }

    render() { 
        console.log('Second Child Render')
        return (
            <div className="user-card">
                <h1>Count: {this.state.count}</h1>
                <h2>Name : Ram</h2>
                <h3>Location : Hyderabad</h3>
                <h3>Contact : @ramvinod27</h3>
            </div>
        )
    }
}


export default User;