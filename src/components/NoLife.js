import React, { Component } from 'react';

class NoLife extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerId: null,
            time: 0,
        };
    }

    componentDidMount() {
        const timerId = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time + 1,
            }));
        }, 1000);
        this.setState({ timerId });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    render() {
        return (
            <div>
                <h1>My Component</h1>
                <p>Time elapsed: {this.state.time} seconds</p>
            </div>
        );
    }
}

export default NoLife;
