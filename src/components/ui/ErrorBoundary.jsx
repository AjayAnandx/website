
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
                    <h1 className="text-3xl font-bold text-red-500 mb-4">Something went wrong.</h1>
                    <div className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full overflow-auto border border-gray-800">
                        <h2 className="text-xl font-semibold mb-2 text-red-400">Error:</h2>
                        <pre className="text-red-300 whitespace-pre-wrap mb-6">{this.state.error && this.state.error.toString()}</pre>
                        <h2 className="text-xl font-semibold mb-2 text-gray-400">Stack Trace:</h2>
                        <pre className="text-gray-500 text-sm whitespace-pre-wrap">{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
