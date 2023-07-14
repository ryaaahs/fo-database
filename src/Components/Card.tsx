import { Link, useNavigate} from "react-router-dom";
import { convertToPathway, linkName, delay } from "../utils";

interface CardInterface {
  name: String;
  pathway: String,
}

function Card({ name, pathway }:CardInterface) {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-48 my-4 bg-slate-700 rounded-md hover:cursor-pointer drop-shadow-md">
        <Link onClick={(event) => delay(event, navigate, linkName("Home"))} to={linkName("Home")}>
          <img className="mx-auto" src={`src/assets/Images/Sprites/${ pathway }/${ convertToPathway(name) }.png`}></img>
          <div className="pb-4 text-center">{ name }</div>
        </Link>  
      </div>
    </>
  )
}
  
export default Card
  