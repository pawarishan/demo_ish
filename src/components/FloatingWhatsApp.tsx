"use client";

import { useEffect, useState } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to animate in after load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/918800685189?text=Hi%20IPSOL%20Technologies,%20I%20am%20interested%20in%20Microsoft%20licenses%20/%20Business%20Central%20services.%20Please%20contact%20me."
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-wa ${isVisible ? 'visible' : ''}`}
      aria-label="Chat on WhatsApp"
    >
      <div className="wa-icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </div>
      <div className="wa-text">Chat on WhatsApp</div>

      <style jsx>{`
        .floating-wa {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #25D366;
          color: white;
          padding: 0.5rem 1rem 0.5rem 0.5rem;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          z-index: 1000;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .floating-wa.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .floating-wa:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 35px rgba(37, 211, 102, 0.5);
          color: white;
        }

        .wa-icon-container {
          background: white;
          color: #25D366;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wa-text {
          font-weight: 600;
          font-size: 0.95rem;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .floating-wa {
            bottom: 1.5rem;
            right: 1.5rem;
            padding: 0.5rem;
          }
          .wa-text {
            display: none;
          }
        }
      `}</style>
    </a>
  );
}
