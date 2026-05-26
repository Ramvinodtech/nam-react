import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
    constructor(props) {
        super(props);
        console.log('Parent constructor');
    }
    componentDidMount() {
        console.log('Parent mounted');
    }
    render() {
        console.log('Parent render');
        return (
            <div className="about">
                <h1>We are new Food Delivery Company</h1>
                <UserClass name={"Rama Vinod Class"} location={"Hyd Class"}/>
                <User></User>
            </div>
        )
    }
}
export default About;