import React, {Component} from "react";

class Input extends Component {
    render() {
        return <div className='input'>
            <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required />
        </div>
    }

}
export default Input