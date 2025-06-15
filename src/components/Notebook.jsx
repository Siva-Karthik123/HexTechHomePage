import '../styles/Notebook.css';
import notebookImage from '../assets/note.png'; // your image path

function Notebook() {
  return (
    <div>
      <section className="notebook-intro-section">
        <div className="notebook-intro-container">
          {/* LEFT COLUMN */}
          <div className="notebook-intro-left">
            <p className="notebook-tag">📘 NOTEBOOKS &gt;</p>
            <h2 className="intro-heading">
              Fast, flexible, <br />
              collaborative analytics
            </h2>
          </div>

          {/* RIGHT COLUMN */}
          <div className="notebook-intro-right">
            <p className="intro-highlight">
              <strong>Hex's notebooks are built for the analyses that actually matter.</strong>{' '}
              <span className="intro-muted">
                With an integrated toolkit, you no longer need to jump between tools to query, predict,
                transform, and visualize data.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="notebook-intro-section">
        <div className="notebook-intro-container">
          {/* LEFT COLUMN */}
          {/* RIGHT COLUMN */}
          <div className="notebook-intro-left">
            <p className="intro-highlight">
              {/* <strong>Hex's notebooks are built for the analyses that actually matter.</strong>{' '} */}
              <span className="intro-muted">
                From simple reports to complex workflows, easily build apps that allow business stakeholders to understand and take action.
              </span>
            </p>
          </div>
          <div className="notebook-intro-right">
            <p className="notebook-tag">📊 Data Apps &gt;</p>
            <h2 className="intro-heading">
              Powerful, interactive<br />
              data apps
            </h2>
          </div>

        </div>
      </section>
      <section className="notebook-intro-section">
        <div className="notebook-intro-container">
          {/* LEFT COLUMN */}
          <div className="notebook-intro-left">
            <p className="notebook-tag">🧭 Discover Self-Service &gt;</p>
            <h2 className="intro-heading">
              Enable self-serve,<br />
              without the silos 
            </h2>
          </div>

          {/* RIGHT COLUMN */}
          <div className="notebook-intro-right">
            <p className="intro-highlight">
              {/* <strong>Hex's notebooks are built for the analyses that actually matter.</strong>{' '} */}
              <span className="intro-muted">
                Provide a simple workflow for natural language driven insights in a beautiful, visual-based interface, while ensuring data stays reusable and trusted.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notebook;
