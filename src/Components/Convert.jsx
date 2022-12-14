import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ text, language }) => {
    const [translated, setTranslated] = useState('')

    useEffect(() => {
        const translate = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            
            setTranslated(data.data.translations[0].translatedText)
        }

        let timeoutId = setTimeout(() => {
            translate()
        }, 750)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [language, text])

    return (
        <div>
            <h2 className="ui header">
                {translated}
            </h2>
        </div>
    )
}