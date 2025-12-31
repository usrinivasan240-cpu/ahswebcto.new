"use client";

import { Component, ReactNode } from "react";
import { AlertCircle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary p-4">
          <div className="max-w-md w-full glass-card p-8 rounded-2xl text-center">
            <AlertCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4 font-display">Something went wrong</h2>
            <p className="text-gray-400 mb-6">
              We apologize for the inconvenience. Please refresh the page or contact us if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full neon-button font-semibold"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
