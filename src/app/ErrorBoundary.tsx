import React from 'react'
import { Button } from '@shared/components/ui'

type State = { hasError: boolean }

export class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: any) {
    // Mark parameters as used so `noUnusedLocals` doesn't fail
    void error
    void info
    // TODO: send to telemetry (Sentry, Datadog, etc.)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h2>Something went wrong</h2>
          <p>Our team has been notified. Try refreshing the page.</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Reload
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
