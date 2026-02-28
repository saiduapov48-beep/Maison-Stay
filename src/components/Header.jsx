import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import '../styles/Header.css'

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <Link to="/" className="logo">
          <h2>MAISON STAY</h2>
        </Link>
        
        <nav className="nav-menu">
          <Link to="/rooms" className="nav-link">Rooms</Link>
          <Link to="/spa" className="nav-link">Spa</Link>
          {user && <Link to="/profile" className="nav-link">Profile</Link>}
        </nav>

        <div className="header-actions flex items-center gap-sm">
          {user ? (
            <>
              <span className="user-name">{user.name}</span>
              <button className="btn btn-ghost btn-sm" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost btn-sm">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
