
import React, {Component} from 'react'
import Welcome from "./Welcome"
class Parent extends Component {
    render(){
        return(
            <div>
                <h1><u>this is parent componant</u></h1>
                <img src="./logo512.png" alt="" />
                <Welcome/>
            </div>
        )
    }
}
export default Parent