import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { FavoritesProvider } from './contexts/FavoritesContext'
import { BookingProvider } from './contexts/BookingContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import RoomsPage from './pages/RoomsPage'
import RoomDetailPage from './pages/RoomDetailPage'
import SpaPage from './pages/SpaPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FavoritesProvider>
          <BookingProvider>
            <div className="app">
              <Header />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/rooms" element={<RoomsPage />} />
                  <Route path="/rooms/:id" element={<RoomDetailPage />} />
                  <Route path="/spa" element={<SpaPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <ProfilePage />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </BookingProvider>
        </FavoritesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
