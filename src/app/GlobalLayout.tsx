import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const GlobalLayout: React.FC = () => {
  return (
    <div>
      <header style={{ padding: 12, borderBottom: '1px solid #eee' }}>
        <nav>
          <Link to="/dashboard" style={{ marginRight: 12 }}>
            Dashboard
          </Link>
          <Link to="/users" style={{ marginRight: 12 }}>
            Users
          </Link>
          <Link to="/customers">Customers</Link>
        </nav>
      </header>
      <main style={{ padding: 24 }}>
        <Outlet />
      </main>
      <footer style={{ padding: 12, borderTop: '1px solid #eee' }}>
        © {new Date().getFullYear()} - Example Enterprise App
      </footer>
    </div>
  )
}

export default GlobalLayout
