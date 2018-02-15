import React, { Component } from 'react';
// import TaskCard from './TaskCard';
import List from 'material-ui/List';
import TextField from 'material-ui/TextField';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title || ""
        };
    }
    render() {
        /* let listItems = this.state.tasks.map((task, index) => {
            return (                
                <TaskCard key={index} value={task.name} />
            )
        })
        return (
            <div style = {{padding: 20}}>
                {listItems}
            </div>
        ) */
        const listItems = this.props.children ? this.props.children.map((child, index) => {
            return (
                <div style={{ marginBottom: '5px' }} key={index}> {/*FIXME: Use appropriate key here*/}
                    {child}
                </div>
            );
        }) : null;
        
        return (
            <List style={{ backgroundColor: '#d2d2d2', padding: '5px 10px', marginBottom: '10px', borderRadius: '3px' }}>                
                <TextField
                    name="listTitle"
                    style={{ fontSize: 'inherit', fontWeight: 'bold', marginBottom: '10px' }}
                    placeholder={this.props.titlePlaceholder || ''}
                    value={this.state.title}
                />                
                { listItems }               
            </List>
        );        
    }
}