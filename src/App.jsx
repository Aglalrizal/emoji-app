import { useState, useEffect } from "react";
import axios from "axios";
// import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Empty from "./components/Empty";
import Emoji from "./components/Emoji";
import Search from "./components/Search";

function App() {
  const [emojiData, setEmojiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    async function fetchEmoji() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://aglalrizal.github.io/emoji-data/data/emojis.json"
        );
        setEmojiData(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error(error);
      }
    }
    fetchEmoji();
  }, []);
  const handleSearchEmoji = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Search onChange={handleSearchEmoji} value={searchText}></Search>
        {loading && <Empty text="Loading..."></Empty>}
        {error && <Empty text="Ops, tidak dapat mengambil data."></Empty>}
        {emojiData.length > 0 && (
          <Emoji emojiData={emojiData} searchText={searchText}></Emoji>
        )}
      </Container>
    </>
  );
}

export default App;
