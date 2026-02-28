import { useAuth } from '../contexts/AuthContext'
import { useBooking } from '../contexts/BookingContext'
import { useFavorites } from '../contexts/FavoritesContext'
import { ROOMS } from '../data/rooms'
import RoomCard from '../components/RoomCard'
import '../styles/ProfilePage.css'

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const { getUserBookings, cancelBooking } = useBooking()
  const { favorites } = useFavorites()

  if (!user) {
    return <div className="container py-lg">Loading...</div>
  }

  const userBookings = getUserBookings(user.id)
  const favoriteRooms = ROOMS.filter(r => favorites.includes(r.id))

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getLoyaltyPerks = (tier) => {
    const perks = {
      bronze: ['Welcome drink', '10% discount'],
      silver: ['Welcome drink', '15% discount', 'Room upgrade'],
      gold: ['Welcome drink', '20% discount', 'Room upgrade', 'Late checkout']
    }
    return perks[tier] || perks.bronze
  }

  const tier = user.loyaltyTier || 'bronze'

  return (
    <div className="profile-page">
      <div className="container py-lg">
        {/* Profile Header */}
        <div className="profile-header animate-fade-in">
          <div className="profile-info">
            <div className="profile-avatar">{user.name.charAt(0).toUpperCase()}</div>
            <div className="profile-details">
              <h1>{user.name}</h1>
              <p className="profile-email">{user.email}</p>
              <p className="profile-member">Member since {formatDate(user.joinDate)}</p>
            </div>
          </div>
          <button className="btn btn-outline" onClick={logout}>
            Logout
          </button>
        </div>

        {/* Loyalty Status */}
        <div className="loyalty-card animate-fade-in">
          <div className="loyalty-tier">
            <span className="tier-badge">{tier.toUpperCase()}</span>
            <h3>Loyalty Program</h3>
          </div>
          <p className="loyalty-description">
            Enjoy exclusive benefits as a valued member
          </p>
          <div className="loyalty-perks">
            {getLoyaltyPerks(tier).map((perk, idx) => (
              <div key={idx} className="perk-item">
                <span className="perk-check">✓</span>
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bookings Section */}
        <div className="bookings-section animate-fade-in">
          <h2>My Reservations</h2>
          {userBookings.length === 0 ? (
            <div className="empty-state">
              <p>You haven't made any reservations yet.</p>
              <a href="/rooms" className="btn btn-secondary">
                Browse Rooms
              </a>
            </div>
          ) : (
            <div className="bookings-list">
              {userBookings.map(booking => {
                const room = ROOMS.find(r => r.id === booking.roomId)
                return (
                  <div key={booking.id} className="booking-item">
                    <div className="booking-info">
                      <h3>{room?.name}</h3>
                      <div className="booking-dates">
                        <span>Check-in: {formatDate(booking.checkIn)}</span>
                        <span>Check-out: {formatDate(booking.checkOut)}</span>
                      </div>
                      <div className="booking-details">
                        <span>{booking.guests} guest{booking.guests !== 1 ? 's' : ''}</span>
                        <span className="booking-status">{booking.status}</span>
                      </div>
                      {booking.specialRequests && (
                        <p className="booking-requests">Note: {booking.specialRequests}</p>
                      )}
                    </div>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      Cancel
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Favorite Rooms Section */}
        <div className="favorites-section">
          <h2>My Favorite Rooms</h2>
          {favoriteRooms.length === 0 ? (
            <div className="empty-state">
              <p>You haven't added any favorite rooms yet.</p>
              <a href="/rooms" className="btn btn-secondary">
                Explore Rooms
              </a>
            </div>
          ) : (
            <div className="favorites-grid">
              {favoriteRooms.map(room => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
        </div>

        {/* Account Settings */}
        <div className="settings-section animate-fade-in">
          <h2>Account Settings</h2>
          <div className="settings-grid">
            <div className="setting-item">
              <h3>Email</h3>
              <p>{user.email}</p>
            </div>
            <div className="setting-item">
              <h3>Loyalty Tier</h3>
              <p className="tier-display">{tier.charAt(0).toUpperCase() + tier.slice(1)}</p>
            </div>
            <div className="setting-item">
              <h3>Total Reservations</h3>
              <p>{userBookings.length}</p>
            </div>
            <div className="setting-item">
              <h3>Favorite Rooms</h3>
              <p>{favoriteRooms.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
