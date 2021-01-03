import React from 'react';
import './header.css';

const Header = (props) => {
    const { numToDo, numDone } = props;

    return (
        <div className='d-flex justify-content-between align-items-baseline'>
            <h1>Todo List</h1>
            <p>{numToDo} more to do, {numDone} done</p>
        </div>
    )
};

export default Header;