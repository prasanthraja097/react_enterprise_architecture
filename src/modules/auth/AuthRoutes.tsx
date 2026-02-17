import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route index element={<Navigate to="login" replace />} />
    </Routes>
  )
}
