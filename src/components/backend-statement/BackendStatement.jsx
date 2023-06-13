import React, { useState, useEffect } from 'react';
import "./BackendStatement.css";

const BackendStatement = () => {
    const [statement, setStatement] = useState("");

    useEffect(() => {
        fetch('/api/backend-statement')
            // .then(response => {
            //     if (!response.ok) {
            //         throw new Error('Network response was not OK');
            //     }
            //     return response.json();
            // })
            .then(response => response.json())
            .then(data => setStatement(data))
            .catch(error => console.log(error));
    }, []);

    if(!statement){
        console.log("hi from !statement")
        return null;
    }

    console.log(statement)

    return (
        <div>
            {/* note: String(statement) below so that we avoid the React error of returning an object */}
            <p className='backend-statement'>{String(statement)}</p>
        </div>
    );
};

export default BackendStatement;