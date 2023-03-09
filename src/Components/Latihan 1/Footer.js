import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div><h2>My Footer</h2>
            {this.props.paragraf()}
            </div>
        )
    }
}

export default Footer