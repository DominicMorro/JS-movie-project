import "./CriteriaForm.css";

const CriteriaForm = () => {
  return (
    <form className="CriteriaForm">
      <label htmlFor="genre">Genre</label>
      <select name="genre" id="genre">
        <option value=""></option>
      </select>
    </form>
  );
};

export default CriteriaForm;
