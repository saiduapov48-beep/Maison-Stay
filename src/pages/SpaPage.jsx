import { useState } from 'react'
import { SPA_TREATMENTS } from '../data/rooms'
import '../styles/SpaPage.css'

export default function SpaPage() {
  const [selectedTreatment, setSelectedTreatment] = useState(null)

  return (
    <div className="spa-page">
      <div className="spa-hero">
        <div className="container text-center animate-fade-in">
          <h1>Wellness & Spa</h1>
          <p>Rejuvenate your body and mind with our signature treatments</p>
        </div>
      </div>

      <div className="container py-lg">
        <div className="section-intro text-center animate-fade-in">
          <h2>Our Signature Treatments</h2>
          <p>Experience healing therapies designed to restore balance and tranquility</p>
        </div>

        <div className="treatments-grid animate-stagger">
          {SPA_TREATMENTS.map(treatment => (
            <div
              key={treatment.id}
              className="treatment-card"
              onClick={() => setSelectedTreatment(treatment.id)}
            >
              <div className="treatment-header">
                <h3>{treatment.name}</h3>
                <span className="treatment-duration">{treatment.duration}</span>
              </div>
              <p className="treatment-description">{treatment.description}</p>
              <div className="treatment-footer">
                <span className="treatment-price">${treatment.price}</span>
                <button className="btn btn-outline btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedTreatment && (
          <div className="treatment-modal" onClick={() => setSelectedTreatment(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {(() => {
                const treatment = SPA_TREATMENTS.find(t => t.id === selectedTreatment)
                return (
                  <>
                    <button className="modal-close" onClick={() => setSelectedTreatment(null)}>×</button>
                    <h2>{treatment.name}</h2>
                    <div className="modal-details">
                      <div className="detail-row">
                        <span className="detail-label">Duration:</span>
                        <span>{treatment.duration}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Price:</span>
                        <span className="price-highlight">${treatment.price}</span>
                      </div>
                    </div>
                    <p className="modal-description">{treatment.description}</p>
                    <button className="btn btn-secondary btn-lg btn-block mt-lg">
                      Book Treatment
                    </button>
                  </>
                )
              })()}
            </div>
          </div>
        )}

        <div className="spa-benefits mt-xl">
          <h2 className="text-center mb-lg">Benefits of Our Spa</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌿</div>
              <h3>Natural Products</h3>
              <p>All treatments use organic, sustainably sourced products</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Expert Therapists</h3>
              <p>Certified professionals with years of experience</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🕉️</div>
              <h3>Holistic Approach</h3>
              <p>Treatments combining ancient and modern wellness techniques</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✨</div>
              <h3>Luxury Environment</h3>
              <p>Serene spaces designed for ultimate relaxation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
