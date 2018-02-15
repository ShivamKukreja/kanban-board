import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskCard from "./TaskCard";
import Superagent from 'superagent';

export default class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
        // @TODO : API
        Superagent.get('data.json').then((response) => {
            this.setState({
                lists: response.body
            })
        }).catch((error) => {
            console.error(`Error while fetching mock data : ${error}`);
        })
    }
    render() {
        let listItems = this.state.lists.map((list, index) => {
            let taskCards = list.tasks.map((task, index) => {
                return (
                    <TaskCard key={index} value={task.description} />
                )
            });
            return (
                <TaskList key={index} title={list.title}>
                    {taskCards}
                </TaskList>
            )
        })
        return (
            <div style={{ padding: 20 }}>
                {listItems}
            </div>
        )
    }
}