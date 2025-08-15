
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast';
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='browse' element={<Browse />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
