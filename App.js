const heading = React.createElement(
    'h1',
    {id : 'heading', 
        abc: 'highlight'  // this object is part of props
    }, 
    'Hello World from React' // children part of props
);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);