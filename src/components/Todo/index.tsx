import React from 'react';
import Calendar from '../Calendar';

class Todo extends React.Component {
    constructor(props: {}) {
        super(props)
    }
    render() {
        return (
            <div className='todo'>
                <Calendar />
                Todo
            </div>
        )
    }
}

export default Todo;