import React from 'react';

const VideoSection = () => {
  return (
    <section className="video-section" style={{ padding: '40px', backgroundColor: '#1a1a1a', color: 'white', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Explore the Universe</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
       <video 
  autoPlay 
  loop 
  muted 
  playsInline 
  controls
  style={{ width: '100%', borderRadius: '10px', display: 'block' }}
>
  <source 
    src="https://vjs.zencdn.net/v/oceans.mp4" 
    type="video/mp4" 
  />
  Your browser does not support the video tag.
</video>
      </div>
      <p style={{ marginTop: '15px', color: '#ccc' }}>
        A glimpse into the deep space explorer preview.
      </p>
    </section>
  );
};

export default VideoSection;