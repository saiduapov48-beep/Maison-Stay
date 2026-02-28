import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ROOMS } from '../data/rooms'
import { useAuth } from '../contexts/AuthContext'
import { useBooking } from '../contexts/BookingContext'
import { useFavorites } from '../contexts/FavoritesContext'
import '../styles/RoomDetailPage.css'

export default function RoomDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { updateCurrentBooking, createBooking } = useBooking()
  const { isFavorite, toggleFavorite } = useFavorites()

  const room = ROOMS.find(r => r.id === parseInt(id))
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [guests, setGuests] = useState(1)
  const [specialRequests, setSpecialRequests] = useState('')
  const [bookingMessage, setBookingMessage] = useState('')

  if (!room) {
    return (
      <div className="container py-lg text-center">
        <h2>Room not found</h2>
      </div>
    )
  }

  const handleBooking = (e) => {
    e.preventDefault()

    if (!user) {
      navigate('/login')
      return
    }

    if (!checkInDate || !checkOutDate) {
      setBookingMessage('Please select both check-in and check-out dates')
      return
    }

    try {
      updateCurrentBooking({
        roomId: room.id,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guests,
        specialRequests
      })

      createBooking(user.id)
      setBookingMessage('Booking confirmed! Check your profile for details.')
      setTimeout(() => navigate('/profile'), 2000)
    } catch (error) {
      setBookingMessage('Error creating booking. Please try again.')
    }
  }

  const liked = isFavorite(room.id)

  return (
    <div className="room-detail-page">
      <div className="container py-lg">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>

        <div className="detail-grid">
          <div className="detail-image-section">
            <div className="main-image">
              <img src={room.image} alt={room.name} />
              <button
                className={`favorite-btn-large ${liked ? 'liked' : ''}`}
                onClick={() => toggleFavorite(room.id)}
              >
                ♥
              </button>
            </div>
          </div>

          <div className="detail-content-section">
            <div className="detail-header">
              <div>
                <span className="room-badge">{room.category}</span>
                <h1>{room.name}</h1>
                <p className="room-meta">{room.size} • {room.guests} guest{room.guests !== 1 ? 's' : ''}</p>
              </div>
              <div className="price-display">
                <span className="price-large">${room.price}</span>
                <span className="price-label">/night</span>
              </div>
            </div>

            <p className="room-full-description">{room.description}</p>

            <div className="amenities-section">
              <h3>Amenities</h3>
              <div className="amenities-grid">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="amenity-item">
                    <span className="amenity-check">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="booking-section">
          <div className="booking-form-container">
            <h2>Book Your Stay</h2>
            <form onSubmit={handleBooking} className="booking-form">
              <div className="form-group">
                <label htmlFor="checkin">Check-in Date</label>
                <input
                  id="checkin"
                  type="date"
                  className="input-field"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkout">Check-out Date</label>
                <input
                  id="checkout"
                  type="date"
                  className="input-field"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  className="input-field"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} Guest{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="requests">Special Requests</label>
                <textarea
                  id="requests"
                  className="input-field"
                  placeholder="Any special requirements or preferences?"
                  rows="3"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                />
              </div>

              {bookingMessage && (
                <div className={`booking-message ${bookingMessage.includes('confirmed') ? 'success' : 'error'}`}>
                  {bookingMessage}
                </div>
              )}

              <button type="submit" className="btn btn-secondary btn-lg btn-block">
                {user ? 'Confirm Booking' : 'Login to Book'}
              </button>
            </form>
          </div>

          <div className="booking-info-container">
            <h3>Why Choose This Room?</h3>
            <div className="info-item">
              <h4>Luxury & Comfort</h4>
              <p>Premium bedding and furnishings ensure the ultimate comfort during your stay.</p>
            </div>
            <div className="info-item">
              <h4>Prime Location</h4>
              <p>Located in the heart of the city with easy access to attractions and dining.</p>
            </div>
            <div className="info-item">
              <h4>24/7 Service</h4>
              <p>Our dedicated concierge team is available round the clock to assist you.</p>
            </div>
            <div className="info-item">
              <h4>Complimentary Amenities</h4>
              <p>Enjoy free WiFi, premium toiletries, and morning coffee service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
