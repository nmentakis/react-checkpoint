import { useState } from "react";

function EmailSearch(props) {
  const [searchItem, setSearchItem] = useState("");

  const getSearchItems = () => {
    fetch(`http://localhost:3001/search?query=${searchItem}`)
    .then(res => res.json())
    .then((data) => {
      props.setEmails(data);
    })
  }



  return (
    <>
      <input 
        type="text"
        placeholder="Input search term"
        value={searchItem}
        onChange={(event) => {setSearchItem(event.target.value)}}
      />
      <button onClick={getSearchItems}>Submit</button>
    </>
  );
}

export default EmailSearch;