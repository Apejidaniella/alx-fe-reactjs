import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Profile from "./components/Profile"
import ProfileDetails from "./components/ProfileDetails"
import ProfileSettings from "./components/ProfileSettings"
import Blogs from "./components/Blogs"
import BlogDetails from "./components/BlogDetails"
import Home from "./components/Home"
import Protected from "./components/Protected"

function App() {
 

  return (
    <>
        <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Protected />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="/profile/details" element={<ProfileDetails />} />
              <Route path="/profile/settings" element={<ProfileSettings />} />
            </Route>  
          </Route>
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

