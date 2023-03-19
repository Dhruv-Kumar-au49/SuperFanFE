import { Link } from 'react-router-dom';
import '../style/home.css';

function WelcomePage() {
  return (
    
      <div className="welcome-page-content">
        <h1 className='welcome-page-heading'>Welcome to our Fortnite Skin Store!</h1>
        <p className='welcome-page-content'>
          We have the latest and greatest skins for your favorite Fortnite
          characters. Browse our collection and find the perfect skin to make
          your character stand out from the rest.
        </p>
        <div className="cta-section">
          <Link to="/products" className="cta-btn">
            Browse Skins
          </Link>
        </div>
      </div>
    
  );
}

export default WelcomePage;
