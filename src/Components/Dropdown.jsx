import React, { useState, useEffect, useRef } from "react";

export default ({ options, selected, onSelectedChange }) => {
    const [openState, setOpenState] = useState(false)

    const formRef = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
            if (!formRef.current.contains(event.target)) { setOpenState(false) }
        }
        document.body.addEventListener ('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

    const renderedOptions = options.map((e) => {
        if (e.value === selected.value) { return null }

        return <div key={e.value} className="item" onClick={() => onSelectedChange(e)}>{e.label}</div>
    })

    return (
        <div>
            <div ref={formRef} className="ui form">
                <div className="field">
                    <label className="label">Select Color</label>
                    <div onClick={() => setOpenState(!openState)} className={`ui selection dropdown ${openState ? 'visible active' : ''}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${openState ? ' visible transition' : ''}`}>
                            { renderedOptions }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}