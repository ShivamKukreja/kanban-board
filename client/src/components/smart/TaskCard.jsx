import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

export default class TaskCard extends Component {
    static get propTypes() {
        return {
            value: PropTypes.string.isRequired,
            onChange: PropTypes.func
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ""
        }
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(event) {
        let newValue = event.target.value;
        // somwhow this literal shorthand is not working
        //this.setState({ newValue });
        this.setState({ value: newValue });
    }
    render() {
        return (
            <Paper>
                <TextField
                    fullWidth
                    name="TaskCardLabel"
                    {...this.props}
                    value={this.state.value}
                    onChange={this.onValueChange}
                />
            </Paper>
        )
    }
}