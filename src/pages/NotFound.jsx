import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold mb-8">Oops!</h1>
          <p className="text-4xl mb-8">404 - Page not found!</p>
          <Link to="/" className="btn btn-primary">
            <FaHome className="text-xl mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
