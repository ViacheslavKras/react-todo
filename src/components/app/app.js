import React, { useEffect, useState } from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import ItemFilter from '../item-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

let lastId = 1;

const App = () => {
    const createNewItem = (label) => {
        return {
            id: lastId++,
            label: label,
            done: false,
            important: false
        }
    };

    const [items, setItems] = useState(
        [
            createNewItem('Drink a coffe'),
            createNewItem('Read a book'),
            createNewItem('Go to walk'),
            createNewItem('Enlightment')
        ]
    );

    const [searchText, setSearchText] = useState('');

    const [visibleItems, setVisibleItems] = useState([]);

    const [filterName, setFilterName] = useState('all');

    const addNewItem = (label) => {
        const newItem = createNewItem(label);
        const newArray = [
            ...items,
            newItem
        ];
        setItems(newArray)
    };

    const onLabelClick = (id) => {
        const idx = items.findIndex((item) => item.id === id);
        const newItem = { ...items[idx], done: !items[idx].done };
        const newArray = [
            ...items.slice(0, idx),
            newItem,
            ...items.slice(idx + 1)
        ];
        setItems(newArray)
    };

    const onImportant = (id) => {
        const idx = items.findIndex((item) => item.id === id);
        const newItem = { ...items[idx], important: !items[idx].important };
        const newArray = [
            ...items.slice(0, idx),
            newItem,
            ...items.slice(idx + 1)
        ];
        setItems(newArray)
    };

    const onDelete = (id) => {
        const idx = items.findIndex((item) => item.id === id)
        const newArray = [
            ...items.slice(0, idx),
            ...items.slice(idx + 1)
        ];
        setItems(newArray)
    };

    const fromSearchForm = (text) => {
        setSearchText(text);
    };

    const onFilterChange = (value) => {
        setFilterName(value);
    };

    useEffect(() => {
        const visible = items.filter((item) => item.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1);

        switch (filterName) {
            case 'active':
                return setVisibleItems(visible.filter((item) => item.done === false));
            case 'done':
                return setVisibleItems(visible.filter((item) => item.done === true));
            default:
                return setVisibleItems(visible)
        }

    }, [searchText, filterName, items]);

    const numToDo = items.filter((item) => item.done === false).length;
    const numDone = items.length - numToDo;

    return (
        <div className='todo-main'>
            <div className='top-panel'>
                <Header
                    numToDo={numToDo}
                    numDone={numDone}
                />
                <div className='d-flex'>
                    <SearchPanel
                        fromSearchForm={fromSearchForm} />
                    <ItemFilter
                        onFilterChange={onFilterChange}
                        filterName={filterName} />
                </div>
            </div>
            <TodoList
                items={visibleItems}
                onLabelClick={onLabelClick}
                onImportant={onImportant}
                onDelete={onDelete} />
            <ItemAddForm
                addNewItem={addNewItem} />
        </div>
    )
};

export default App;