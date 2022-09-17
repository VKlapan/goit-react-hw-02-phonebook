import { React } from 'react';

const Filter = ({ value, onSearch }) => {
  const handleSearch = event => {
    console.log(event.currentTarget.value);
    onSearch(event.currentTarget.value);
  };
  return (
    <form>
      <label>
        Find contact by Name <br />
        <input
          type="text"
          name="search"
          value={value}
          onChange={handleSearch}
        ></input>
      </label>
    </form>
  );
};

export default Filter;
