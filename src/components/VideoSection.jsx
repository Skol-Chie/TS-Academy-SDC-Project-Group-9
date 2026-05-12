import React from 'react';

const VideoSection = () => {
  return (
    <section className="video-section" style={{ 
      padding: '40px 10%', 
      backgroundColor: '#ffffff', 
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center', 
      gap: '30px',
      justifyContent: 'center',
      flexWrap: 'wrap' 
    }}>
      
      {/* Reduced Video Size */}
      <div style={{ flex: '0 1 380px' }}> 
        <div style={{ 
          borderRadius: '20px', 
          overflow: 'hidden', 
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)' 
        }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            style={{ width: '100%', display: 'block' }}
          >
            <source 
               src="https://vjs.zencdn.net/v/oceans.mp4" 
              type="video/mp4" 
            />
          </video>
        </div>
      </div>

      {/* Reduced Text Size */}
      <div style={{ flex: '0 1 400px' }}>
        <h2 style={{ 
          color: '#004aad', 
          fontSize: '1.8rem', // Much smaller, compact heading
          lineHeight: '1.2',
          fontWeight: '700',
          marginBottom: '12px',
          textAlign: 'center'
        }}>
          How Planetary Data <br /> Helps Us Understand Space
        </h2>
        <p style={{ 
          fontSize: '0.95rem', // Smaller paragraph text
          color: '#555',
          lineHeight: '1.5',
          margin: '0'
          
        }}>
          Planetary science goes beyond images. Comparing <strong>mass</strong>, <strong>diameter</strong>, 
          <strong> gravity</strong>, and <strong>density</strong>, we gain insight into how planets form.
        </p>
      </div>

    </section>
  );
};

export default VideoSection;