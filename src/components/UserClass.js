import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            count2: 2
        }
        console.log("First Child Constructor");
    }

    componentDidMount() {
        console.log('First Child Mounted')
    }
    
    render() {
        console.log('First Child Render');
        const {name, location} = this.props;
        const {count, count2} = this.state;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count : count + 1
                    })
                }}>Increment Counter</button>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Contact : @ramvinod27</h3>
        </div>
        )
    }

}

export default UserClass;