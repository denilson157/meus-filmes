import { Routes, Route, Navigate } from 'react-router-dom'
import {
    Home,
    FavoriteMovies
} from '../pages'

export const AppRoutes = () => {
    return (

        <Routes>

            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<FavoriteMovies />} />
            <Route path="*" element={<Navigate to="/home" />} />

        </Routes>

    )
}