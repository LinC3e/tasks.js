import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import ProfilePage from './pages/Profile'
import TaskForm from './pages/TaskFormPage'

import ProtectedRoutes from './ProtectedRoutes'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path='/tasks' element={<TasksPage />} />
            <Route path='/add-task' element={<TaskForm />} />
            <Route path='/tasks/:id' element={<TaskForm />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App