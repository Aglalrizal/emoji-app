import PropTypes from "prop-types";
import styles from "./Emoji.module.css";
import EmojiBox from "../EmojiBox";
import { useEffect, useState } from "react";
import { filterEmoji } from "../../utils/filterEmoji";
import Empty from "../Empty";

const Emoji = ({ emojiData, searchText }) => {
  const [filteredEmoji, setFilteredEmoji] = useState([]);

  useEffect(() => {
    setFilteredEmoji(filterEmoji({ emojiData, searchText }));
  }, [emojiData, searchText]);
  if (filteredEmoji.length > 0) {
    return (
      <div className={styles.emojiGrid}>
        {filteredEmoji.map((data, index) => {
          return (
            <EmojiBox
              key={index}
              title={data.title}
              symbol={data.symbol}
            ></EmojiBox>
          );
        })}
      </div>
    );
  } else {
    return (
      <Empty text={"Ops, we find nothing, lets try another keyword!"}></Empty>
    );
  }
};

Emoji.propTypes = {
  emojiData: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default Emoji;
