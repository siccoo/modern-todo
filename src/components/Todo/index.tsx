import React from 'react';
import Calendar from '../Calendar';
import { TodoState } from '../../interface';
import List from '../List';

import { FocusEvent, KeyboardEvent, ChangeEvent } from 'react';

class Todo extends React.Component<{}, TodoState> {
    newItemInput: HTMLInputElement | null;

    constructor(props: {}) {
        super(props)

        this.handleNewItemInputOnBlur = this.handleNewItemInputOnBlur.bind(this)
        this.handleNewItemInputOnChange = this.handleNewItemInputOnChange.bind(this)
        this.handleNewItemInputOnKeyUp = this.handleNewItemInputOnKeyUp.bind(this)
        this.setNewItemInputRef = this.setNewItemInputRef.bind(this)
        this.addNewItem = this.addNewItem.bind(this)

        this.newItemInput = null

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

    addNewItem({ newItems }: { newItems: string }) {
        const { newItemInput } = this
        if (!newItemInput) {
            return
        }

        const { completed, inProgress, removed } = this.state.items

        inProgress.push(newItems)
        this.setState({
            items: {
                completed,
                inProgress,
                removed
            },
            newItems: ''
        })

        newItemInput.value = ''
    }

    handleNewItemInputOnBlur(event: FocusEvent<HTMLInputElement>) {
        const { newItems } = this.state
        if (!newItems) {
            return
        }

        this.addNewItem({ newItems })
    }

    handleNewItemInputOnChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        this.setState({ newItems: value })
    }

    handleNewItemInputOnKeyUp(event: KeyboardEvent<HTMLInputElement>) {
        const { newItems } = this.state;
        const { key } = event;
        const isEnterKeyPressed = key == 'Enter'
        if (!newItems || !isEnterKeyPressed) {
            return
        }

        this.addNewItem({ newItems })
    }

    setNewItemInputRef(element: HTMLInputElement | null) {
        this.newItemInput = element
    }

    render() {

        return (
            <div className='todo'>
                <Calendar />
                <List
                    items={{
                        completed: [],
                        inProgress: [],
                        removed: []
                    }} views={{
                        open: false,
                        selected: ''
                    }}
                    handleNewItemInputOnBlur={this.handleNewItemInputOnBlur}
                    handleNewItemInputOnChange={this.handleNewItemInputOnChange}
                    handleNewItemInputOnKeyUp={this.handleNewItemInputOnKeyUp}
                    setNewItemInputRef={this.setNewItemInputRef}
                />
                Todo
            </div>
        )
    }
}

export default Todo;