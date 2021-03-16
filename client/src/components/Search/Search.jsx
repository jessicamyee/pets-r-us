import "./Search.css";

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <select 
        className="search-input"
        name="Search"
        value={props.value}
        onChange={(e) => props.onChange(e)}>
        <option className="type-input-default" value="">Sort by animal type</option>
        <option className="type-input" value="dog">Doggo</option>
        <option className="type-input" value="cat">Kitty</option>
        <option className="type-input" value="rabbit">Bunny</option>
      </select>
    </form>
  );
};

export default Search;