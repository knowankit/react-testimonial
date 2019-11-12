import React, { Component } from 'react';
import './index.css'

class Testimonial extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.timer = this.props.timer ? this.props.timer : 4
    }
    componentDidMount() {
        const totalLength = this.props.children.length - 1
        setInterval(() => {
            if (totalLength === this.state.count) {
                this.setState({
                    count: 0
                })
            } else {
                this.setState((state, props) => ({
                    count: state.count + 1
                }))
            }
        }, this.timer);
    }

    render() {
        return (
            <div className='container-fluid testimonial'>
                {this.props.children[this.state.count]}
            </div>
        )
    }
}

export default Testimonial;