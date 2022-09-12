import React from 'react';
import Calendar from '../Calendar';
import { TodoState } from '../../interface';
import List from '../List';

import { FocusEvent, KeyboardEvent, ChangeEvent, BaseSyntheticEvent } from 'react';

class Todo extends React.Component<{}, TodoState> {
    listItemEditInput: HTMLInputElement | null;
    newItemInput: HTMLInputElement | null;


    constructor(props: {}) {
        super(props)

        this.handleListItemComplete = this.handleListItemComplete.bind(this)
        this.handleListItemEditOnKeyUp = this.handleListItemEditOnKeyUp.bind(this)
        this.handleListItemRemove = this.handleListItemRemove.bind(this)
        this.handleListItemRemovedRestore = this.handleListItemRemovedRestore.bind(this)
        this.handleNewItemInputOnBlur = this.handleNewItemInputOnBlur.bind(this)
        this.handleNewItemInputOnChange = this.handleNewItemInputOnChange.bind(this)
        this.handleNewItemInputOnKeyUp = this.handleNewItemInputOnKeyUp.bind(this)

        this.setListItemEditInputRef = this.setListItemEditInputRef.bind(this)
        this.setNewItemInputRef = this.setNewItemInputRef.bind(this)
        this.addNewItem = this.addNewItem.bind(this)

        this.listItemEditInput = null
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

    handleListItemComplete(event: BaseSyntheticEvent) {
        const { completed, inProgress, removed } = this.state.items

        const { index } = event.target.dataset
        let currentIndex = index

        if (!currentIndex) {
            const iconParent = event.target.closest("list__inProgress__item__complete")
            if (!iconParent) {
                currentIndex = iconParent.dataset.index
            }
        }

        completed.push(inProgress[currentIndex])
        this.setState({
            items: {
                completed,
                inProgress,
                removed,
            }
        })
    }

    handleListItemEditOnKeyUp(event: BaseSyntheticEvent & KeyboardEvent<HTMLInputElement>) {
        const { index } = event.target.dataset
        const { value } = event.target
        const { completed, inProgress, removed } = this.state.items

        inProgress[index] = value
        this.setState({
            items: {
                completed,
                inProgress,
                removed,
            }
        })

        const { key } = event
        const isEnterKeyPressed = key === "Enter"
        if (!isEnterKeyPressed) {
            return
        }

        this.handleListItemComplete(event)
    }

    handleListItemRemove(event: BaseSyntheticEvent) {
        const { completed, inProgress, removed } = this.state.items

        const { index } = event.target.dataset
        let currentIndex = index

        if (!currentIndex) {
            const iconParent = event.target.closest("list__inProgress__item__remove")
            if (!iconParent) {
                currentIndex = iconParent.dataset.index
            }
        }

        removed.push(inProgress[currentIndex])
        this.setState({
            items: {
                completed,
                inProgress,
                removed,
            }
        })
    }

    handleListItemRemovedRestore(event: any) {

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

    setListItemEditInputRef(element: HTMLInputElement | null) {
        this.listItemEditInput = element
    }

    setNewItemInputRef(element: HTMLInputElement | null) {
        this.newItemInput = element
    }

    render() {
        const { items, views } = this.state

        return (
            <div className='todo'>
                <Calendar />
                <List
                    items={items}
                    views={views}
                    handleListItemComplete={this.handleListItemComplete}
                    handleListItemEditOnKeyUp={this.handleListItemEditOnKeyUp}
                    handleListItemRemove={this.handleListItemRemove}
                    handleListItemRemovedRestore={this.handleListItemRemovedRestore}
                    handleNewItemInputOnBlur={this.handleNewItemInputOnBlur}
                    handleNewItemInputOnChange={this.handleNewItemInputOnChange}
                    handleNewItemInputOnKeyUp={this.handleNewItemInputOnKeyUp}
                    setListItemEditInputRef={this.setListItemEditInputRef}
                    setNewItemInputRef={this.setNewItemInputRef}
                />
            </div>
        )
    }
}

export default Todo;