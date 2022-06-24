import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from './features/posts/Home'
import Favorites from './features/posts/Favorites'
import SignInPage from './features/users/SignInPage'
import SignUpPage from './features/users/SignUpPage'
import CreateMessage from './features/posts/CreateMessage'
import EditMessage from './features/posts/EditMessage'

function App() {
    return (
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/create-message" element={<CreateMessage />} />
          <Route path="/edit-message" element={<EditMessage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
        {/* Catch all - Replace with 404 page later */}
        <Route path="*" element={<div>This page doesn't exist</div>} />
      </Routes>
    );
  }
  
  export default App;