import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    'div',
    {id : 'heading', 
        key: '12',
        abc: 'highlight1'  // this object is part of props
    }, 
    React.createElement(
        'div',
        {id : 'child1', 
            key: '13',
            abc: 'highlight2'  // this object is part of props
        }, 
        [React.createElement(
            'h1',
            {id : 'heading1', 
                key: '14',
                abc: 'highlight3'  // this object is part of props
            }, 
            'heading1'),
        React.createElement(
                'h1',
                {id : 'heading2', 
                    key: '15',
                    abc: 'highlight4'  // this object is part of props
                }, 
                'heading2')
        ]
    ) 
);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);