import React, { useState } from 'react';
import './item-add-form.css';

const ItemAddForm = (props) => {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewItem(text);
        setText('')
    };

    return (
        <form onSubmit={handleSubmit} className='item-add-form d-flex'>
            <input type='text'
                className='form-control'
                onChange={handleChange}
                value={text}
                placeholder='What need to be done' />
            <button type='submit'
                className='btn btn-outline-secondary'>
                Add item
            </button>
        </form>
    )
};

export default ItemAddForm;