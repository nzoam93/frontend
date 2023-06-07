import React, { useState, useEffect } from 'react';
import "./BackendStatement.css";

const BackendStatement = () => {
    const [statement, setStatement] = useState('');

    useEffect(() => {
        fetchBackendStatement();
    }, []);

    const fetchBackendStatement = async () => {
        try {
            const response = await fetch('/api/backend-statement');
            if (response.ok) {
                const data = await response.json();
                setStatement(data.statement);
            } else {
                console.error('Failed to fetch backend statement');
            }
        } catch (error) {
            console.error('Error occurred while fetching backend statement', error);
        }
    };

    return (
        <div>
            <p className='backend-statement'>{statement}</p>
        </div>
    );
};

export default BackendStatement;