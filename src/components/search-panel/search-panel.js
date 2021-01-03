import React, { useEffect, useState } from 'react';
import './search-panel.css';

const SearchPanel = (props) => {

    const [text, setText] = useState('');

    const { fromSearchForm } = props;

    const searchForm = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        fromSearchForm(text)
    }, [text, fromSearchForm]);

    return (
        <input type='text'
            className='form-control'
            onChange={searchForm}
            value={text}
        />
    )
};

export default SearchPanel;