import React from 'react'

const JsxBasics = () => {
    
    // Some JavaScript variables
    const name = 'Eugene';
    const x = 10;
    const y = 5;
    const cars = ['Tesla', 'VW', 'Jeep', 'RR'];
    const loggedIn = true;
    
    // create an object of styles and pass it in the jsx.
    const styles = {
      color: 'red',
      fontSize: '20px'
    }

    // I can use if-Else above the return() statement, not inside it.
  
    return (
    <>
    {/* Added some tailwind styling using tailwind classes. In Jsx, I specify the classes as className.*/}
    <div className='text-5xl'>JsxBasics</div>

    {/* This is how I pass in the name variable using Jsx */}
    <p>Hello {name}</p>

    {/* I can also do simple operations like this */}
    <p>The sum of {x} and {y} is {x+y}</p>

    {/* I can create a list of the cars using the map() function.
      - Given the cars items in the list don't have an id,
        I will use 'index' because each item being mapped needs to have a unique key(identifier).
      - The map syntax goes like -> var.map((var) => ())
    */}
      <ul>
        {cars.map((car, index) => (
          <li key={{index}}>{car}</li>
        ))}
      </ul>

      {/* I cannot use a if-Else statement in jsx, rather I can use ternary operators.
        - Checks if the loggedIn variable is true or false, in this case its true, so it displays Member.
      */}
      {loggedIn ? <h1>Member</h1> : <h2>Guest</h2>}

      {/* Another way to use the ternary, is to use the '&&' symbol. 
        - Let's say I only want to show Member if the loggedIn variable is true and nothing else.  */}
        {loggedIn && <h1>Logged in Member</h1>}

      {/* To add Style(Inline style in jsx) */}
      <p style={styles}>This is red color</p>
    </>
    
  )
}

export default JsxBasics;