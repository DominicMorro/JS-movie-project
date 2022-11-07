import Movie from "../models/Movie";
import "./Results.css";
interface Props {
  oneMovie: Movie;
}

const Results = ({ oneMovie }: Props) => {
  return <div className="Results">Results works</div>;
};

export default Results;
