import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import EmojiData from "./Emoji.json";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <div>
      <center>
        <h1>Emoji Search</h1>
        <input
          type="text"
          value={search}
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </center>
      {data.map((emoji) => (
        <div>
          <div class="card">
            <div
              class="card-body"
              onClick={() => {
                navigator.clipboard.writeText(emoji.symbol);
                alert("emoji copied");
              }}
            >
              {emoji.symbol}
              {emoji.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
