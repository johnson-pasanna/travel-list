import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// import { useState } from "react";
// import Logo from "./Logo";
// import Form from "./Form";

// function App() {
//   const [items, setItems] = useState([]);

//   function handleAddItems(item) {
//     setItems((items) => [...items, item]);
//   }

//   function handleDeleteItem(id) {
//     setItems((items) => items.filter((item) => item.id !== id));
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItems={handleAddItems} />
//       <PackingList item={items} onDeleteItem={handleDeleteItem} />
//       <Stats items={items} />
//     </div>
//   );
// }

// //defining the logo component

// function PackingList({ item, onDeleteItem, onToggleItems }) {
//   return (
//     <div className="list">
//       <ul>
//         {item.map((item) => (
//           <Item
//             item={item}
//             key={item.id}
//             onDeleteItem={onDeleteItem}
//             onToggleItem={onToggleItems}
//           />
//         ))}
//       </ul>
//       <div>
//         <select className="selected">
//           <option value="input">Input Data</option>
//           <option value="description" selected>
//             Description
//           </option>
//           <option value="packed">Packed </option>
//         </select>
//       </div>
//     </div>
//   );
// }

// //Defining the Item component

// function Item({ item, onDeleteItem }) {
//   return (
//     <li>
//       <input type="checkbox" checked={item.packed} />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button onclick={() => onDeleteItem(item.id)}>❌</button>
//     </li>
//   );
// }

// //defining the stats component

// function Stats() {
//   return (
//     <footer className="stats">
//       You have X items on your list, and you already packed X (%)
//     </footer>
//   );
// }

// // exporting the App component
// export default App;
