import { useState } from 'react'
import ProfileCard from './Components/ProfileCard'
import QRCode from './Components/QRCode'
import { Route, Routes } from 'react-router-dom'
import ProfileUrl from './Components/ProfileUrl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<QRCode/>} />
      <Route path='/profileUrl' element={<ProfileUrl/>} />
      <Route path="/profile" element={<ProfileCard/>} />
    </Routes>
    </>
  )
}

export default App
