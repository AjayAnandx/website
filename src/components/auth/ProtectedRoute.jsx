import { Loader2 } from 'lucide-react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#0F0F0F]">
                <Loader2 className="w-8 h-8 animate-spin text-[var(--color-accent)]" />
            </div>
        );
    }

    if (!user) {
        // Redirect to login page but save the attempted url
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
