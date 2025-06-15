import "../styles/Partners.css";
import seekgeek from "../assets/seetgeek.png";
import anthropic from "../assets/Anthropic.png";

function Partners(){
  return (
    <section className="trusted-section">
      <div className="trusted-header">
        <span className="trusted-line"></span>
        <span className="trusted-title">TRUSTED BY LEADING DATA COMPANIES</span>
        <span className="trusted-line"></span>
      </div>
      <div className="trusted-logos">
        {/* Replace with your actual logo images or SVGs */}
        <div>
          <i style={{color:"red"}} className="fa-brands fa-reddit fa-2xl"></i><br/>
          <label className="trusted-logo-label">Reddit</label>
        </div>
        <div>
          <i style={{color:"white"}} class="fa-solid fa-n fa-2xl"></i><br/>
          <label className="trusted-logo-label">Notion</label>
        </div>
        <div>
          <img src={anthropic} alt="Anthropic" /><br/>
          <label className="trusted-logo-label">Anthropic</label>
        </div>
        <div>
          <img src={seekgeek} alt="SeatGeek" /><br/>
          <label className="trusted-logo-label">SeekGeek</label>
        </div>
      </div><br/>
      <h2 style={{color:"white"}}>14+ more Companies</h2>
      <div className="trusted-header">
        <span className="trusted-line"></span>
        {/* <span className="trusted-title">TRUSTED BY LEADING DATA COMPANIES</span> */}
        {/* <span className="trusted-line"></span> */}
      </div>
    </section>
  )
}
export default Partners;