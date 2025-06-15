import '../styles/TopTicker.css';

function TopTicker() {
  return (
    <div className="top-ticker">
      <div className="ticker-wrapper">
        <div className="ticker-text">
          🎯 <a href="#" target="_blank" rel="noopener noreferrer">
            Summit 2025: <span>how modern data teams are ditching legacy tools and playbooks</span>
          </a>
          &nbsp;&nbsp;&nbsp;
          🚀 <a href="#" target="_blank" rel="noopener noreferrer">
            Announcing Hex's $70M Series C: <span>doubling down on the new era of agentic analytics</span>
          </a>
          &nbsp;&nbsp;&nbsp;
          🎟️ <a href="#" target="_blank" rel="noopener noreferrer">
        In SF June 2–4 for Summit? <span>Join us at club Hex</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopTicker;