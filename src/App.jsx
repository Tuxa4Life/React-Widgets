import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown'

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
            <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
        </div>
    )
}