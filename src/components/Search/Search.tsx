import { useRef } from "react";
import "./Search.css";

const Search = (props: { search: (n: string) => void }) => {
  const input = useRef<HTMLInputElement>(null);

  const find = () => {
    if (input.current!.value !== "") {
      props.search(input.current!.value);
    }
  };

  return (
    <div className="container">
      <img src="/icon-search.svg" alt="search" />
      <input
        ref={input}
        onKeyUp={(e) => (e.key == "Enter" ? find() : null)}
        type="text"
        placeholder="Search Github username..."
      />
      <button onClick={find}>Search</button>
    </div>
  );
};

export default Search;
