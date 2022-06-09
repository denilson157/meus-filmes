import { useContext, useEffect } from "react"
import { AuthContext } from '../contexts/AuthContext'

export const Home = () => {

    const { state, update } = useContext(AuthContext);

    return (
        <>
            <div>
                home
                {state}
            </div>
        </>
    )
} 