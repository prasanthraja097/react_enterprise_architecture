import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { ErrorBoundary } from '@app/ErrorBoundary'
import { ReactQueryProvider } from '@app/providers/QueryProvider'
import { ReduxProvider } from '@app/providers/ReduxProvider'
import AppRouter from '@app/AppRouter'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ReduxProvider>
        <ReactQueryProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ReactQueryProvider>
      </ReduxProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)

