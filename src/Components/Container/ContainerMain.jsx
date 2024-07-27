import React from 'react';

const ContainerMain = ({ children }) => {
    return (
        <div className="container mx-auto px-4 py-6 max-w-screen-lg">
            {children}
        </div>
    );
};

export default ContainerMain;