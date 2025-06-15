import '../styles/Feature.css';
import img1 from '../assets/app.png';
import img2 from '../assets/note.png';
import img3 from '../assets/self.png';

function Features() {
  return (
    <section className="features">
      <h2 className="features-heading">One home for <br /> <span>analytics, AI, and apps</span></h2>
      <p className="features-subtext">
        Hex allows teams to work together across one platform, making it easy to find answers in your data, share them with stakeholders, and make decisions with confidence.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <img src={img1} alt="Notebook" />
          <h3 className="label green">📒 NOTEBOOKS</h3>
          <p><strong>Deep-dive analysis:</strong> Explore the new, novel, and gnarly in an AI-powered, multiplayer notebook where Python, SQL, and no-code live together.</p>
        </div>

        <div className="feature-card">
          <img src={img2} alt="Data Apps" />
          <h3 className="label yellow">📊 DATA APPS</h3>
          <p><strong>Publish and share:</strong> Turn analyses into beautiful experiences for stakeholders to pull insights and provide feedback.</p>
        </div>

        <div className="feature-card">
          <img src={img3} alt="Self-Serve" />
          <h3 className="label purple">🪄 SELF–SERVE</h3>
          <p><strong>Self serve exploration:</strong> Get answers quickly in a point-and-click experience, on top of governed data and semantic models.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
