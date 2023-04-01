import React, { Component } from 'react';

class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('https://example.com/data')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        return (
            <div>
                <h1>My Component</h1>
                <ul>
                    {this.state.data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Life;
