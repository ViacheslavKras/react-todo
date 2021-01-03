import React from 'react';
import './todo-list-item.css';

const TodoListItem = (props) => {

    const { id, label, done, important, onLabelClick, onImportant, onDelete } = props;

    let labelClassName = 'label';

    if (done) {
        labelClassName += ' done'
    }

    if (important) {
        labelClassName += ' important'
    }

    return (
        <li className='list-group-item list-group-item-action'>
            <span className={labelClassName}
                onClick={() => onLabelClick(id)}>
                {label}
            </span>
            <button className='btn btn-outline-danger btn-sm' type='button'
                onClick={() => onDelete(id)}>
                <i className="fa fa-trash-o"></i>
            </button>
            <button className='btn btn-outline-primary btn-sm' type='button'
                onClick={() => onImportant(id)}>
                <i className="fa fa-exclamation"></i>
            </button>
        </li>
    )
};

export default TodoListItem;