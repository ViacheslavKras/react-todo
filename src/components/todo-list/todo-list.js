import React from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.css';

const TodoList = (props) => {
    const { items, onLabelClick, onImportant, onDelete } = props;
    return (
        <ul className='list-group'>
            {items.map((item) => {
                const { id, ...itemProps } = item;
                return (
                    <TodoListItem
                        key={id}
                        id={id}
                        {...itemProps}
                        onLabelClick={onLabelClick}
                        onImportant={onImportant}
                        onDelete={onDelete}
                    />
                )
            })}
        </ul>
    );
};

export default TodoList;