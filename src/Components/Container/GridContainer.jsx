

const GridContainer = ({ children }) => {
    return (

        <div className="container mx-auto px-4 py-6 max-w-full md:max-w-full lg:max-w-6xl xl:max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
            {children}
        </div>
    );

};

export default GridContainer;