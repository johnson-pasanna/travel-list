import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// import React from "react";
// import { useState } from "react";

// // Defining the form component
// function Form({ onAddItem }) {
//   const [description, setDescription] = useState("");
//   const [selectNumber, setSelectNumber] = useState("1");

//   function handlesubmit(e) {
//     e.preventDefault();
//     if (!description) return;
//     //{description: 'jkj', selectNumber: 1, packed: false, id: 1697974208478}

//     const newItem = {
//       description,
//       selectNumber,
//       packed: false,
//       id: Date.now(),
//     };
//     console.log(newItem);
//     onAddItem(newItem);

//     setDescription("");
//     setSelectNumber(1);
//   }
//   return (
//     <form className="add-form" onSubmit={handlesubmit}>
//       <h3>What do you need for your trip</h3>
//       <select
//         value={selectNumber}
//         onChange={(e) => setSelectNumber(Number(e.target.value))}
//       >
//         {[...Array(20).keys()].map((number) => (
//           <option key={number + 1} value={number + 1}>
//             {number + 1}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="input text"
//         value={description}
//         onChange={(e) => {
//           console.log(e); // Log the event object
//           setDescription(e.target.value); // Update the state with the new value
//         }}
//       ></input>

//       <button>Adda</button>
//     </form>
//   );
// }

// export default Form;
