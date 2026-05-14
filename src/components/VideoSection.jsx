import "../styles/video.css";

import video from "../assets/video/videoImage.mp4";

export default function VideoSection() {
  return (
    <section className="video-section">
      {/* Left Side */}
      <div className="video-card">
        <video  controls className="content">

          <source src={video} type="video/mp4" />
          your browser does not support the video tag.
        </video>

        <div className="play-button" onClick={() => {}}>
          ▶
        </div>
      </div>

      {/* Right Side */}
      <div className="text-content">
        
        
           <h2>How Planetary Data Helps Us</h2>
          
          <h3>Understand Space</h3>
        
        

        <p>
          Planetary science goes beyond images. Comparing
          <span> mass</span>,
          <span> diameter</span>,
          <span> gravity</span>, and
          <span> density</span>, we gain insight into how planets form,
          behave, and interact within the solar system.
        </p>
      </div>
    </section>
  );
}

