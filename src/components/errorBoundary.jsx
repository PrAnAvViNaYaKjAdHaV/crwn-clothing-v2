import React, { useState } from 'react';

function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);

    const componentDidCatch = (error, info) => {
        console.error(error, info);
        setHasError(true);
    };

    if (hasError) {
        return <h1>Something went wrong.</h1>;
    }

    return children;
}

export default ErrorBoundary;