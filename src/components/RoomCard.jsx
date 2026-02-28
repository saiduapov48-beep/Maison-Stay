import { Link } from 'react-router-dom'
import { useFavorites } from '../contexts/FavoritesContext'
import '../styles/RoomCard.css'

export default function RoomCard({ room }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const liked = isFavorite(room.id)

  return (
    <div className="room-card animate-fade-in">
      <div className="room-image-container">
        <img src={room.image} alt={room.name} className="room-image" />
        <div className="room-overlay">
          <Link to={`/rooms/${room.id}`} className="btn btn-secondary">
            View Details
          </Link>
        </div>
        <button
          className={`favorite-btn ${liked ? 'liked' : ''}`}
          onClick={() => toggleFavorite(room.id)}
          aria-label="Add to favorites"
        >
          <span>♥</span>
        </button>
        <span className="room-category">{room.category}</span>
      </div>

      <div className="room-info">
        <h3 className="room-name">{room.name}</h3>
        <p className="small-text">{room.size} • {room.guests} guest{room.guests !== 1 ? 's' : ''}</p>
        <p className="room-description">{room.description}</p>
        
        <div className="room-footer">
          <div className="price">
            <span className="price-amount">${room.price}</span>
            <span className="price-period">/night</span>
          </div>
          <Link to={`/rooms/${room.id}`} className="btn btn-outline btn-sm">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
