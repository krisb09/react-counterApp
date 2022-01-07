import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Counter() {

    const [counter, setCounter] = useState(0);

    return (
      <div className="container">
        <React.Fragment>
          <section>
            <h2>Counter</h2>
            <h1>{counter}</h1>
            <button className='btn' onClick={()=> setCounter (counter - 1)}>Decrease</button>
            <button className='btn' onClick={()=> setCounter(0)}>Reset</button>
            <button className='btn' onClick={()=> setCounter (counter + 1)}>Increase</button>
          </section>
        </React.Fragment>
      </div>
    );
}

export default Counter
