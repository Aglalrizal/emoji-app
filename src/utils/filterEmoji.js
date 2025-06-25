export const filterEmoji = ({ emojiData, searchText = "", maxResult = 20 }) => {
  const filteredEmoji = emojiData.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }

    if (emoji.keywords.includes(searchText.toLowerCase())) {
      return true;
    }

    return false;
  });

  return filteredEmoji.splice(0, maxResult);
};
