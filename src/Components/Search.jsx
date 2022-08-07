import React, {useState, useEffect} from "react";
import axios from "axios";

export default () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const renderedResults = results.map( e => {
        return (
            <div key={e.pageid} className="item">
                <div className="right floated content">
                    <a rel="noopener noreferrer" className="ui button" href={`https://en.wikipedia.org?curid=${e.pageid}`} target="_blank">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {e.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: e.snippet }}></span>
                </div>
            </div>
        )
    })

    useEffect(() => {
        let search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php' , {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })

            setResults(data.query.search)
        }

        const timeoutId = setTimeout(() => {
            if (term) { 
                search () 
            }
        }, 750)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [term])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} className="input" onChange={e => setTerm(e.target.value)}/>
                </div>
            </div>

            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}