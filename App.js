
{/* <div id="parent">
    <div id="child1">
        <h1 id="heading1">heading1</h1>
        <h1 id="heading1">heading2</h1>
    </div>
</div> */}


const heading = React.createElement(
    'div',
    {id : 'heading', 
        abc: 'highlight'  // this object is part of props
    }, 
    React.createElement(
        'div',
        {id : 'child1', 
            abc: 'highlight'  // this object is part of props
        }, 
        [React.createElement(
            'h1',
            {id : 'heading1', 
                abc: 'highlight'  // this object is part of props
            }, 
            'heading1'),
        React.createElement(
                'h1',
                {id : 'heading2', 
                    abc: 'highlight'  // this object is part of props
                }, 
                'heading2')
        ]
    ) 
);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);