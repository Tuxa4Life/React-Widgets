import { useState, useEffect } from "react"

export default ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect (() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname) // to update this component
        }

        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate')
        }
    }, [])
    return currentPath === path ? children : null
}