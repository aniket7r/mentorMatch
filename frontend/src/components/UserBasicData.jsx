// // after signup it redirects user to fill some question to vibe match and skill match
// //  only used once when usser created account for the first time


// const fun_for_wraping_coments = ()=>{
//     // import React, { useState } from 'react';
// // const UserData = () => {
// //     const qCard = () => {
// //         const [selectedOption, setSelectedOption] = useState('');
        
// //         const handleOptionChange = (event) => {
// //           setSelectedOption(event.target.value);
// //         };
      
// //         const handleSubmit = (event) => {
// //           event.preventDefault();
// //           // Do something with the selected option
// //           console.log('Selected Option:', selectedOption);
// //         };
      
// //         return (
// //           <div className="card">
// //             <h2>Question</h2>
// //             <form onSubmit={handleSubmit}>
// //               <div>
// //                 <input
// //                   type="radio"
// //                   id="option1"
// //                   name="option"
// //                   value="option1"
// //                   checked={selectedOption === 'option1'}
// //                   onChange={handleOptionChange}
// //                 />
// //                 <label htmlFor="option1">Option 1</label>
// //               </div>
// //               <div>
// //                 <input
// //                   type="radio"
// //                   id="option2"
// //                   name="option"
// //                   value="option2"
// //                   checked={selectedOption === 'option2'}
// //                   onChange={handleOptionChange}
// //                 />
// //                 <label htmlFor="option2">Option 2</label>
// //               </div>
// //               <div>
// //                 <input
// //                   type="radio"
// //                   id="option3"
// //                   name="option"
// //                   value="option3"
// //                   checked={selectedOption === 'option3'}
// //                   onChange={handleOptionChange}
// //                 />
// //                 <label htmlFor="option3">Option 3</label>
// //               </div>
// //               <div>
// //                 <input
// //                   type="radio"
// //                   id="option4"
// //                   name="option"
// //                   value="option4"
// //                   checked={selectedOption === 'option4'}
// //                   onChange={handleOptionChange}
// //                 />
// //                 <label htmlFor="option4">Option 4</label>
// //               </div>
// //               <button type="submit">Submit</button>
// //             </form>
// //           </div>
// //         );
// //       };

// //     qCard();
// //     qCard()

// // }


// // export default UserData;





// // const Question_to_ask = ()=> {
// //         fetch('http://localhost:4000/admin/getquestion')
// //         .then(response => response.json())
// //         .then(data => {
// //           console.log('Received data from server:');
// //           console.log(data); // Display data in the console
// //         })
// //         .catch(error => console.error('Error:', error));

// //     }


// // import React, { useEffect } from 'react';

// // const Question_to_ask = () => {
// //     useEffect(() => {
// //         fetch('http://localhost:4000/admin/getquestion')
// //             .then(response => response.json())
// //             .then(data => {
// //                 console.log('Received data from server:');
// //                 console.log(data); // Display data in the console
// //             })
// //             .catch(error => console.error('Error:', error));
// //     }, []); // empty array ensures effect runs only once
// // };

// // // export default Question_to_ask;



// // export default Question_to_ask;



// }


// import React, { useState } from 'react';
// import { useEffect } from 'react';


// const questionsData = [
//   {
//     qid: "v1",
//     text: 'What is the capital of France?',
//     options: ['Paris', 'London', 'Berlin', 'Rome'],
//     is_vibe_q: true
//   },
//   {
//     qid: "v2",
//     text: 'Which would you rather be?',
//     options: ['Normal', 'Weird'],
//     is_vibe_q: true
//   },
//   {
//     qid: "v3",
//     text: 'Are you modest?',
//     options: ['Yes', 'No'],
//     is_vibe_q: true
//   },
//   {
//     qid: "v4",
//     text: 'What is the capital of France1?',
//     options: ['Paris', 'London', 'Berlin', 'Rome'],
//     is_vibe_q: true
//   },
//   {
//     qid: "v5",
//     text: 'What is the capital of France2?',
//     options: ['Paris', 'London', 'Berlin', 'Rome'],
//     is_vibe_q: true
//   }
// ];


// const QuestionCard = ({ question, onSelect }) => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div>
//       <h3>{question.text}</h3>
//       <ul>
//         {question.options.map((option, index) => (
//           <li key={index}>
//             <label>
//               <input
//                 type="radio"
//                 value={option}
//                 checked={selectedOption === option}
//                 onChange={() => handleOptionSelect(option)}
//               />
//               {option}
//             </label>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => onSelect(question.qid, selectedOption)}>Submit</button>
//     </div>
//   );
// };

// const Questionnaire = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [questionData, setQuestionData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/admin/getquestion');
//       const jsonData = await response.json();
//       console.log(jsonData)
//       setQuestionData(jsonData);
      
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleOptionSelect = (questionId, option) => {
//     setResponses(prevResponses => ({
//       ...prevResponses,
//       [questionId]: option
//     }));
//     if (currentQuestionIndex < questionsData.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSubmit = () => {
//     console.log(responses);
//     // You can submit the responses to an API or process them further here
//   };

//   return (
//     <div>
//       <QuestionCard
//         question={questionsData[currentQuestionIndex]}
//         onSelect={handleOptionSelect}
//       />
//       <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
//       {currentQuestionIndex === questionsData.length - 1 && (
//         <button onClick={handleSubmit}>Submit</button>
//       )}
//     </div>
//   );
// };

// export default Questionnaire;


// ................................
// import React, { useState, useEffect } from 'react';

// const Questionnaire = () => {
//   const [questions, setQuestions] = useState([]);
//   // const [answer, setAnswer] = useState([])
//   const responses = []


//   useEffect(() => {
//     // Fetch data from the server
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/admin/getquestion');
//       const data = await response.json();
//       setQuestions(data.questions);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleOptionSelect = (questionId, optionId) => {
//     // Handle user's option selection
//     console.log('Question ID:', questionId);
//     console.log('Selected Option ID:', optionId);
//     responses.push({
//       qId : questionId,
//       answer: optionId
//     })
//     // You can store the user's response in state or send it to the server
//   };

//     const handleSubmit = () => {
//     // Here you can do whatever you want with the responses array
//     console.log('User responses:', responses);
//     // For example, you can send it to the server
//   };

//   return (
//     <div>
//       {questions.map((question) => (
//         <div key={question._id} className="card">
//           <h3>{question.text}</h3>
//           <ul>
//             {question.options.map((option,  index) => (
//               <li key={index}>
//                 <label>
//                   <input
//                     type="radio"
//                     name={`question_${question._id}`}
//                     value={option}
//                     onChange={() => handleOptionSelect(question.qid, option)}
//                   />
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <div>
//       <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Questionnaire;





// ....................try 2

// import React, { useState, useEffect } from 'react';

// const Questionnaire = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   // const [responses, setResponses] = useState([]);
//     const responses = []


//   useEffect(() => {
//     // Fetch data from the server
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/admin/getquestion');
//       const data = await response.json();
//       setQuestions(data.questions);
//       // Initialize responses array with default values
//       // setResponses(new Array(data.questions.length).fill(null));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleOptionSelect = (qId, answer) => {
//     // const updatedResponses = [...responses];
//     // updatedResponses[currentQuestionIndex] = optionId;
//     console.log(qId)
//     responses.push({
//             qId : qId,
//             answer: answer
//           })
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSubmit = () => {
//     // Here you can do whatever you want with the responses array
//     console.log('User responses:', responses);
//     // For example, you can send it to the server
//   };

//   return (
//     <div>
//       {questions.length > 0 && (
//         <div className="card">
//           <h3>{questions[currentQuestionIndex].text}</h3>
//           <ul>
//             {questions[currentQuestionIndex].options.map((option, index) => (
    
//               <li key={index}>
//                 <label>
//                   <input
//                     type="radio"
//                     name={`question_${questions[currentQuestionIndex]._id}`}
//                     value={option}
//                     // checked={responses[currentQuestionIndex] === option._id}
//                     onChange={() => handleOptionSelect(questions[currentQuestionIndex].qId, option)}
//                   />
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ul>
//           <div>
//             <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
//               Previous
//             </button>
//             <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
//               Next
//             </button>
//             <button onClick={handleSubmit} disabled={responses.includes(null)}>
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Questionnaire;


// .....................try 3
import React, { useState, useEffect } from 'react';

const Questionnaire = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/admin/getquestion');
      const data = await response.json();
      setQuestions(data.questions);
      setResponses(Array(data.questions.length).fill(null)); // Initialize responses array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleOptionSelect = (questionId, optionId) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = {
      qId: questionId,
      answer: optionId
    };
    setResponses(updatedResponses);
  };

  const handleNextQuestion = () => {
    // Save the response before navigating to the next question
    const currentResponse = responses[currentQuestionIndex];
    if (!currentResponse) {
      alert('Please select an option before proceeding.');
      return;
    }
    setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, questions.length - 1));
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleSubmit = () => {
    console.log('User responses:', responses);
    // Here you can send responses to the server
  };

  return (
    <div>
      {questions.length > 0 && (
        <div key={questions[currentQuestionIndex]._id} className="card">
          <h3>{questions[currentQuestionIndex].text}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question_${questions[currentQuestionIndex]._id}`}
                    value={option}
                    onChange={() => handleOptionSelect(questions[currentQuestionIndex].qid, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <div>
            {currentQuestionIndex > 0 && (
              <button onClick={handlePreviousQuestion}>Previous</button>
            )}
            {currentQuestionIndex < questions.length - 1 && (
              <button onClick={handleNextQuestion}>Next</button>
            )}
          </div>
        </div>
      )}
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Questionnaire;
