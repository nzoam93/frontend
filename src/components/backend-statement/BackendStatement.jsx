import React, { useState, useEffect } from 'react';
import "./BackendStatement.css";

const BackendStatement = () => {
    const [statement, setStatement] = useState('base');

    useEffect(() => {
        fetch('/api/backend-statement')
            .then(response => response.json())
            .then(data => setStatement(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <p className='backend-statement'>{statement}</p>
        </div>
    );
};

export default BackendStatement;