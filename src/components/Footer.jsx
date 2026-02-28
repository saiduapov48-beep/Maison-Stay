import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>MAISON STAY</h4>
            <p className="small-text">Luxury experiences crafted for the modern traveler.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#spa">Spa</a></li>
              <li><a href="#dining">Dining</a></li>
              <li><a href="#events">Events</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <p className="small-text">
              <a href="#instagram" className="footer-social">Instagram</a><br />
              <a href="#facebook" className="footer-social">Facebook</a><br />
              <a href="#twitter" className="footer-social">Twitter</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="small-text">&copy; 2024 MAISON STAY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
