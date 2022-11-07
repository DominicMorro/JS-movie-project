import { FormEvent, useState } from "react";
import "./SearchForm.css";
interface Props {
  setTerm: (input: string) => void;
}

const SearchForm = ({ setTerm }: Props) => {
  const [searchTerm, setSerachTerm] = useState("");
  const submitHandler = (e: FormEvent) => {
    e.preventDefault;
    setTerm(searchTerm);
  };
  return (
    <form onSubmit={submitHandler} className="SearchForm">
      <input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={(e) => setSerachTerm(e.target.value)}
      />
      <button>search</button>
    </form>
  );
};

export default SearchForm;
