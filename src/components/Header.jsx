import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
        <h1>Messaging Board</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <li><Link to="/create-message">Create Message</Link></li>
                <li><Link to="/edit-message">Edit Message</Link></li>
                <li><Link to="/sign-in">Sign In</Link></li>
                <li><Link to="/sign-up">Sign Up</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header