import { Navigate } from 'react-router-dom'

function Home() {
  // Home now redirects to the featured menu category
  return <Navigate to="/" replace />
}

export default Home
