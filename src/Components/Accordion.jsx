import React, { useState } from "react";

export default ({items}) => {
    // state
    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((e, i) => {
        let active = i === activeIndex ? 'active' : ''

        return (
            <React.Fragment key={e.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(i)}>
                    <i className="dropdown icon"></i>
                    {e.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{e.content}</p>
                </div> 
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}