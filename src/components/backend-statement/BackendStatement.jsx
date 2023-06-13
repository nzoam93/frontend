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
        return null;
    }

    console.log(statement)

    return (
        <div>
            {/* note: statement.statement below because statement is an object with a key of statement that I am keying into */}
            <p className='backend-statement'>{statement.statement}</p>
        </div>
    );
};

export default BackendStatement;