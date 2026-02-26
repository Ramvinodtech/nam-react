import React from "react";
import ReactDOM from 'react-dom/client';

const jsxHeading = <h1 id="heading" className="jsx-heading">Namaste React vers 🚀</h1>

// Functional Component
const HeadingComponent = () => {
    return <h1 id="heading" className="jsx-heading"> Namaste React Functional component</h1>;
}

const Title = () => {
    
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);