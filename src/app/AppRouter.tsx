import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from '@core/guards/ProtectedRoute'
import { GlobalLayout } from './GlobalLayout'
import { Role } from '@core/permissions/roles'

const AuthModule = lazy(() => import('@modules/auth/AuthRoutes'))
const DashboardModule = lazy(() => import('@modules/dashboard'))
const UsersModule = lazy(() => import('@modules/users'))
const CustomersModule = lazy(() => import('@modules/customers'))

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/auth/*" element={<AuthModule />} />

        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route
            path="dashboard/*"
            element={
              <ProtectedRoute>
                <DashboardModule />
              </ProtectedRoute>
            }
          />

          <Route
            path="users/*"
            element={
              <ProtectedRoute requiredRoles={[Role.ADMIN]}>
                <UsersModule />
              </ProtectedRoute>
            }
          />

          <Route
            path="customers/*"
            element={
              <ProtectedRoute>
                <CustomersModule />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<div>404 - Not Found</div>} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter
