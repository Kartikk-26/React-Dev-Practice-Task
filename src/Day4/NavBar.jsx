// Navbar.js (Update)
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </li>
        <li>
          <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
