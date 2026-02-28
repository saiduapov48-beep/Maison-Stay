import { useState } from 'react'
import RoomCard from '../components/RoomCard'
import { ROOMS } from '../data/rooms'
import '../styles/RoomsPage.css'

export default function RoomsPage() {
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredRooms = filter === 'all'
    ? ROOMS
    : ROOMS.filter(room => room.category === filter)

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  return (
    <div className="rooms-page">
      <div className="container py-lg">
        <div className="page-header animate-fade-in">
          <h1>Our Collections</h1>
          <p>Discover our curated selection of luxury rooms and suites</p>
        </div>

        <div className="filters-section">
          <div className="filter-group">
            <label htmlFor="category-filter" className="filter-label">Room Type</label>
            <div className="filter-buttons">
              {['all', 'room', 'suite'].map(category => (
                <button
                  key={category}
                  className={`filter-btn ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category === 'all' ? 'All Rooms' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="sort-group">
            <label htmlFor="sort-select" className="sort-label">Sort By</label>
            <select
              id="sort-select"
              className="sort-select input-field"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="rooms-count">
          Showing {sortedRooms.length} room{sortedRooms.length !== 1 ? 's' : ''}
        </div>

        <div className="rooms-grid animate-stagger">
          {sortedRooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  )
}
