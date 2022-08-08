import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown'
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

const items = [
    {
        title: 'What is React',
        content: 'Its brain fuck biaatch'
    },
    {
        title: 'you gay?',
        content: 'yes.'
    },
    {
        title: 'no bitches?',
        content: '🥺'
    }
]

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Blue',
        value: 'blue'
    },
    {
        label: 'Green',
        value: 'green'
    },
]

export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div className='ui container'>
            <Header />
            <Route path='/' >
                <Accordion items={items} />
            </Route>
            <Route path='/search' >
                <Search />
            </Route>
            <Route path='/dropdown' >
                <Dropdown label='Color' options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path='/translate' >
                <Translate />
            </Route>
        </div>
    )
}