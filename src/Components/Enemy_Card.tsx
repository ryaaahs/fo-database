import { Link, useNavigate} from "react-router-dom";
import { convertToPathway, linkName, delay } from "../utils";

interface CardInterface {
    name: String;
    location: String,
    isBoss: Boolean
}

function Card({ name, location, isBoss }:CardInterface) {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-48 my-4 bg-slate-700 rounded-md hover:cursor-pointer drop-shadow-xl">
        <Link onClick={(event) => delay(event, navigate, linkName("Home"))} to={linkName("Home")}>
          <img className="mx-auto" src={`src/assets/Images/Sprites/Enemy/${ convertToPathway(location) }/${ convertToPathway(name) }.png`}></img>
          <div className={`pb-4 text-center ${isBoss ? "text-amber-500 font-bold" : "" }`}>{ name }</div>
        </Link>  
      </div>
    </>
  )
}
  
export default Card
  