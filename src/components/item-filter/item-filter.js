import React from 'react';
import './item-filter.css';

const ItemFilter = (props) => {

    const { onFilterChange, filterName } = props;

    const buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    return (
        <div className='btn-group' role='group' aria-label='Basic outlined example'>
            {
                buttons.map(({name, label}) => {
                    const isActive = filterName === name;
                    const clazz = isActive ? 'btn-primary' : 'btn-outline-secondary';

                    return (
                        <button type='button'
                            className={`btn ${clazz}`}
                            key={name}
                            onClick={() => onFilterChange(name)}>
                            {label}
                        </button>
                    )
                })
            }
        </div>
    )
};

export default ItemFilter;