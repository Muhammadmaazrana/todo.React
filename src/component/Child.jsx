import React from "react";


class Child extends React.Component{
    render(){
        return(
            <div>
<h1>{this.props.name}</h1>
<h1>{this.props.price}</h1>
            </div>
        )
    }
}
export default Child;