"use client";
import { useRef, useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>name: {name}</p>
      </div>

      <div>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>email: {email}</p>
      </div>
      <UserFormItems />
    </form>
  );
}

function UserFormItems() {
  const [isVisible, setIsVisible] = useState(true);
  const [items, setItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  function addItem() {
    if (inputRef.current && inputRef.current.value) {
      setItems([...items, inputRef.current.value]);
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} items
      </button>
      {isVisible && (
        <div>
          <input type="text" ref={inputRef} placeholder="add item" />
          <button type="button" onClick={addItem}>
            Add Item
          </button>
          <ul>
            {items.map((item, index) => (
              <li key={index} onClick={() => setSelectedItem(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
