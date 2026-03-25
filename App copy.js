import React from "react";
import ReactDOM from 'react-dom/client';

const version = '19.2.4';
const jsxHeading = <h1 id="heading" className="jsx-heading">Namaste React version {version} 🚀</h1>

// Functional Component
const HeadingComponent = () => {
    return (
        <div id="container">
             <Title/> {jsxHeading}
             <h1 id="functional" className="functional"> Namaste React Functional component</h1>
        </div>
    );
}

const Title = () =>  <span>React </span>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);