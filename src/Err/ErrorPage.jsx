import { Link } from 'react-router-dom';
import './NotFound.css'; // Make sure to create a corresponding CSS file for styling

const ErrorPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="not-found-link">
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
