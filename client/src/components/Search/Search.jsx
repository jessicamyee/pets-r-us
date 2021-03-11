import "./Search.css";

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <select 
        className="search-input"
        name="Search"
        value={props.value}
        onChange={(e) => props.onChange(e)}>
        <option className="type-input-default" value="dropdown">Search</option>
        <option className="type-input" value="doggo">Doggo</option>
        <option className="type-input" value="kitty">Kitty</option>
        <option className="type-input" value="bunny">Bunny</option>
      </select>
    </form>
  );
};

export default Search;