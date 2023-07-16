import { Link } from "react-router-dom";
import { convertToPathway, linkName } from "../utils";

interface CardInterface {
    name: string;
    location: string,
    isBoss: boolean
}

function Enemy_Card({ name, location, isBoss }:CardInterface) {

  return (
    <>
      <div className="w-48 my-4 bg-slate-700 rounded-md hover:cursor-pointer drop-shadow-md">
        <Link to={linkName(`Enemies/${convertToPathway(name)}`)}>
          <img className="mx-auto" src={`src/assets/Images/Sprites/Enemy/${ convertToPathway(location) }/${ convertToPathway(name) }.png`}></img>
          <div className={"pb-4 text-center " + ( isBoss ? 'text-amber-500' : "" ) }>{ name }</div>
        </Link>  
      </div>
    </>
  )
}
  
export default Enemy_Card
  