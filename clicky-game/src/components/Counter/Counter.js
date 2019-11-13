import React from "react";
import ImageCard from "../ImageCard";

class Counter extends React.Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };


    render() {
        return (
            <ImageCard
                count={this.state.count}
                handleIncrement={this.handleIncrement}
            />
        )
    }
}

export default Counter;