import { Routes, Route } from 'react-router-dom'
import ForArtists from './Pages/ForArtists'
import ForFans from './Pages/ForFans'
import Layout from './Components/Layout'
import HomePage from './Pages/HomePage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route index element={ <HomePage/> }/>
          <Route path="for-artists" element={ <ForArtists /> }/>
          <Route path='for-fans' element={ <ForFans /> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App
