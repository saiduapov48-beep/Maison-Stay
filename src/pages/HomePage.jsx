import { Link } from 'react-router-dom'
import RoomCard from '../components/RoomCard'
import { ROOMS } from '../data/rooms'
import '../styles/HomePage.css'

export default function HomePage() {
  const featuredRooms = ROOMS.slice(0, 4)

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-fade-in">
          <h1>Experience Luxury Reimagined</h1>
          <p>Step into a world where elegance meets comfort. Your sanctuary awaits.</p>
          <Link to="/rooms" className="btn btn-secondary btn-lg">
            Explore Our Rooms
          </Link>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header text-center animate-fade-in">
            <h2>Our Signature Collections</h2>
            <p>Carefully curated spaces designed for the discerning traveler</p>
          </div>

          <div className="rooms-grid animate-stagger">
            {featuredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="text-center mt-lg">
            <Link to="/rooms" className="btn btn-outline btn-lg">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header text-center animate-fade-in">
            <h2>World-Class Amenities</h2>
            <p>More than just a room - a complete experience</p>
          </div>

          <div className="services-grid animate-stagger">
            <div className="service-card">
              <div className="service-icon">🌿</div>
              <h3>Wellness Spa</h3>
              <p>Rejuvenate with our signature spa treatments and wellness programs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🍽️</div>
              <h3>Fine Dining</h3>
              <p>Culinary excellence crafted by world-renowned chefs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏋️</div>
              <h3>Fitness Center</h3>
              <p>State-of-the-art facilities with personalized training services.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌅</div>
              <h3>Concierge</h3>
              <p>24/7 personalized service for all your needs and desires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header text-center animate-fade-in">
            <h2>Guest Experiences</h2>
            <p>What our guests are saying</p>
          </div>

          <div className="testimonials-grid animate-stagger">
            <div className="testimonial-card">
              <p className="testimonial-text">"A truly exceptional experience. Every detail was perfect, from the moment we arrived to our departure."</p>
              <p className="testimonial-author">- Sarah Mitchell</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"The service is impeccable. The staff anticipated every need before we even asked. Simply magnificent."</p>
              <p className="testimonial-author">- James Chen</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"A sanctuary of elegance and tranquility. We've already booked our return visit for next season."</p>
              <p className="testimonial-author">- Elena Rodriguez</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center animate-fade-in">
          <h2>Ready to Start Your Journey?</h2>
          <p>Book your stay with us and discover the art of luxury hospitality</p>
          <div className="cta-buttons">
            <Link to="/rooms" className="btn btn-secondary btn-lg">Book Now</Link>
            <a href="#contact" className="btn btn-outline btn-lg">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  )
}
