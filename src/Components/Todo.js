// import React, { useState } from 'react';

// export default function Todo() {

//     const [elenVal, setElenVal] = useState(" ");
//     const [ulElem, setUlElem] = useState([]);


//     const AddElem = (e) => {
//         setElenVal(e.target.value);
//     }

//     const addElem = () => {
//         ulElem.push(elenVal);
//         setUlElem([...ulElem]);
//         setElenVal("");
//     }

//     const del = (index) => {
//         let list = ulElem;
//         list.splice(index, 1);
//         setUlElem([...list]);
//     }

//     return (
//         <div>
//             <input type="text" placeholder="item" value={elenVal} onChange={AddElem} />
//             <button onClick={addElem}>Add</button>
//             <div>
//                 <ul>
//                     {
//                         ulElem.map((x, i) => {
//                             return <li key={i} id={i}>{x} <button onClick={() => del(i)}>X</button></li>
//                         })
//                     }
//                 </ul>
//             </div>
//         </div>
//     )
// }


// that updates the document title right after React makes changes to the DOM:



import React, { useState, useEffect } from 'react';

function Todo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Todo;