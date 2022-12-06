import "./SearchBox.scss";

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <form className="search-box">
      <label htmlFor="">Search </label>
      <input
        type="text"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;
