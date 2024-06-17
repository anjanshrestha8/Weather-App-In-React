import search from "../assets/icons/search.svg";
import "../assets/css/components/nav.css";
import { useEffect, useState } from "react";
import Select from "react-select";
function Nav(props) {
  const [searchText, setSearchText] = useState("");
  const [options, setOptions] = useState([]);

  // setStat({name:roshan, age:})

  useEffect(() => {
    if (!searchText) return;

    fetch(
      `https://www.meteosource.com/api/v1/free/find_places?text=${searchText}&key=b09f59chilzh0v05a7kiql6rjpt5lzvgmjfwcwl8`
    )
      .then((res) => res.json())
      .then((data) => {
        const finalData = data?.map((item) => {
          return { label: item.name, value: item.place_id };
        });
        console.log(finalData);
        setOptions(finalData);
      });
  }, [searchText]);

  console.log(options);
  return (
    <>
      <div className="header">
        <h1>Weather Of {props.placeId}</h1>
        <div className="search-part">
          <Select
            className="basic-single"
            classNamePrefix="select"
            isClearable={true}
            isSearchable={true}
            name="color"
            onInputChange={(text) => setSearchText(text)}
            options={options}
            onChange={(option) => {
              props.handleClick(option.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
