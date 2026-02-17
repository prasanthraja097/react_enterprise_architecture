import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '@store/hooks'
import type { Role } from '@core/permissions/roles'

type ProtectedRouteProps = {
  children: React.ReactElement
  requiredRoles?: Role[]
}

// UI-level guard that enforces authentication + optional role checks.
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRoles }) => {
  const auth = useAppSelector((s) => s.auth)
  const location = useLocation()

  if (!auth.isAuthenticated) {
    // Redirect to login while preserving current location
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  if (requiredRoles && requiredRoles.length > 0) {
    const hasRole = auth.user?.roles?.some((r) => requiredRoles.includes(r as Role))
    if (!hasRole) return <div>Unauthorized — insufficient permissions</div>
  }

  return children
}

export default ProtectedRoute
