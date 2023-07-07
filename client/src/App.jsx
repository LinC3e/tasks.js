import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/login' element={<h1>Login Page</h1>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/tasks' element={<h1>Tasks Page</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App