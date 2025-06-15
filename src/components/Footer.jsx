import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left branding */}
        <div className="footer-brand">
          <h2 className="footer-logo">HEX</h2>
          <p className="footer-made">Made with 🥔 on 🌍.</p>
        </div>

        {/* Link columns */}
        <div className="footer-links">
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li>Careers</li>
              <li>Customers</li>
              <li>Media kit</li>
              <li>Newsroom</li>
            </ul>
          </div>

          <div>
            <h4>PRODUCT</h4>
            <ul>
              <li>Notebooks</li>
              <li>Explore</li>
              <li>Hex Magic</li>
              <li>Enterprise</li>
              <li>For Teams</li>
              <li>App Builder</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h4>RESOURCES</h4>
            <ul>
              <li>Blog</li>
              <li>Docs</li>
              <li>Quickstart</li>
              <li>Resources</li>
              <li>Templates</li>
              <li>Changelog</li>
              <li>Trust Center</li>
            </ul>
          </div>

          <div>
            <h4>CONTACT</h4>
            <ul>
              <li>Support</li>
              <li>Sales</li>
              <li>Twitter</li>
              <li>Email us</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom text */}
      <div className="footer-bottom">
        <p>© 2025 Hex Technologies Inc.</p>
        <ul>
          <li>Privacy policy</li>
          <li>Terms & conditions</li>
          <li>Modern slavery statement</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
