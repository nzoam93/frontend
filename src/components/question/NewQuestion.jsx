import React, { useState } from 'react';

const NewQuestion = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [questionTitle, setQuestionTitle] = useState('');
    const [answerA, setAnswerA] = useState('');
    const [answerB, setAnswerB] = useState('');
    const [answerC, setAnswerC] = useState('');
    const [answerD, setAnswerD] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleQuestionSubmit = () => {
        // defining the parameters of the question
        const questionData = {
            questionTitle,
            answerA,
            answerB,
            answerC,
            answerD,
            correctAnswer
        };

        // call the POST action in the backend so that you can store it in the database
        fetch('/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(questionData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Request failed with status ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                // console.log('Question submitted:', data);
                // Additional logic or actions upon successful submission
            })
            .catch(error => {
                // Handle error case
                console.error('Error submitting question:', error);
                // Access the response status and response body (if available)
                console.log('Response status:', error.response.status);
                console.log('Response body:', error.response.body);
            });


        // Reset the form
        setQuestionTitle('');
        setAnswerA('');
        setAnswerB('');
        setAnswerC('');
        setAnswerD('');
        setCorrectAnswer('');

        // Close the modal
        closeModal();
    };

    return (
        <div>
            <button onClick={openModal} className='new-question'>Add New Question</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <label>Question Title:</label>
                        <input
                            type="text"
                            value={questionTitle}
                            onChange={(e) => setQuestionTitle(e.target.value)}
                        /><br></br>
                        <label>Answer A:</label>
                        <input
                            type="text"
                            value={answerA}
                            onChange={(e) => setAnswerA(e.target.value)}
                        /><br></br>
                        <label>Answer B:</label>
                        <input
                            type="text"
                            value={answerB}
                            onChange={(e) => setAnswerB(e.target.value)}
                        /><br></br>
                        <label>Answer C:</label>
                        <input
                            type="text"
                            value={answerC}
                            onChange={(e) => setAnswerC(e.target.value)}
                        /><br></br>
                        <label>Answer D:</label>
                        <input
                            type="text"
                            value={answerD}
                            onChange={(e) => setAnswerD(e.target.value)}
                        /><br></br>
                        <label>Correct Answer:</label>
                        <input
                            type="text"
                            value={correctAnswer}
                            onChange={(e) => setCorrectAnswer(e.target.value)}
                        /><br></br>
                        <button onClick={handleQuestionSubmit}>Submit</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewQuestion;