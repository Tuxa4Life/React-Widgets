import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabinc',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
]

export default () => {
    const [language, setLanguage] = useState(options[0])
    const [inputVal, setInputVal] = useState('')

    return (
        <div>
            <div style={{margin: '10px 0'}} className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value={inputVal} onChange={(event) => setInputVal(event.target.value)}/>
                </div>
            </div>

            <Dropdown label='Language' selected={language} onSelectedChange={setLanguage} options={options} />
            <hr />
            <h3 className="ui header">Output: </h3>
            <Convert text={inputVal} language={language.value}/>
        </div>
    )
}