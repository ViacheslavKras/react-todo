import React from 'react';
import './search-panel.css';

const SearchPanel = (props) => {
    const { fromSearchForm } = props;

    const searchForm = (e) => {
        fromSearchForm(e.target.value);
    };

    return (
        <input type='text'
            className='form-control'
            onChange={searchForm}
        />
    )
};

export default SearchPanel;