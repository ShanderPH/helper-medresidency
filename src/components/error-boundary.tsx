"use client";

import { Component, type ReactNode } from "react";
import { Button } from "@heroui/react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary component to catch and handle React errors gracefully
 * Prevents the entire app from crashing when a component throws an error
 *
 * Usage:
 * ```tsx
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    // TODO: In production, send to error tracking service (e.g., Sentry)
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="text-center max-w-md">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-danger" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-foreground mb-4">
              Ops! Algo deu errado
            </h1>

            <p className="text-foreground-600 mb-6">
              Desculpe, encontramos um erro inesperado. Nossa equipe foi
              notificada e estamos trabalhando para resolver o problema.
            </p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mb-6 text-left bg-danger/5 p-4 rounded-lg border border-danger/20">
                <summary className="cursor-pointer font-semibold text-danger mb-2">
                  Detalhes do erro (apenas em desenvolvimento)
                </summary>
                <pre className="text-xs overflow-auto text-foreground-600">
                  {this.state.error.message}
                  {"\n\n"}
                  {this.state.error.stack}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                color="primary"
                startContent={<RefreshCw className="w-4 h-4" />}
                onClick={this.handleReset}
              >
                Tentar Novamente
              </Button>

              <Button
                variant="bordered"
                onClick={() => (window.location.href = "/")}
              >
                Voltar ao Início
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
