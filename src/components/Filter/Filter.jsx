import { React } from 'react';

const Filter = ({ onSearch }) => {
  const handleSearch = event => {
    console.log(event.currentTarget.value);
    onSearch(event.currentTarget.value);
  };
  return (
    <form>
      <lable>
        Find contact by Name <br />
        <input type="text" name="search" onChange={handleSearch}></input>
      </lable>
    </form>
  );
};

export default Filter;
