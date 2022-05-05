import React from 'react';

function MinAge(props){

  const ageRange = Array.from({length: 18}, (_, i) => i + 1);

  return(
    <>
      <select name='age' onChange={props.handleChange}>
        <option disabled selected>
          Minimum Age of Players
       </option>
        {ageRange.map((age, index) => {
          return (
          <option key={index} value={age}>
            {age}
          </option>
          )
        })}
    </select>
    </>
  );
}

export default MinAge;
