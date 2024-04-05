// after signup it redirects user to fill some question to vibe match and skill match
//  only used once when usser created account for the first time

import React, { useState } from 'react';
const UserData = () => {
    const qCard = () => {
        const [selectedOption, setSelectedOption] = useState('');
        
        const handleOptionChange = (event) => {
          setSelectedOption(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Do something with the selected option
          console.log('Selected Option:', selectedOption);
        };
      
        return (
          <div className="card">
            <h2>Question</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="radio"
                  id="option1"
                  name="option"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="option1">Option 1</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="option2"
                  name="option"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="option2">Option 2</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="option3"
                  name="option"
                  value="option3"
                  checked={selectedOption === 'option3'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="option3">Option 3</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="option4"
                  name="option"
                  value="option4"
                  checked={selectedOption === 'option4'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="option4">Option 4</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      };

    qCard();
    qCard()

}


export default UserData;
