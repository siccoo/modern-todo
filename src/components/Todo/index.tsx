import React from 'react';
import Calendar from '../Calendar';
import { TodoState } from '../../interface';
import List from '../List';

class Todo extends React.Component<{}, TodoState> {
    constructor(props: {}) {
        super(props)

        this.state = {
            items: {
                completed: ['Build a modern todo app'],
                inProgress: [
                    'Workout for 30 minutes at the gym',
                    'Buy groceries (milk, vegetables, fruits, fish)',
                    'Clean the house and backyard',
                    'Take the car to the auto shop for an oil change',
                ],
                removed: [],
            },
            newItems: '',
            views: {
                open: false,
                selected: 'inProgress'
            },
        }
    }
    render() {
        return (
            <div className='todo'>
                <Calendar />
                <List />
                Todo
            </div>
        )
    }
}

export default Todo;