import { useEffect } from 'react'
import { Link } from "react-router-dom";
import { convertToPathway, linkName } from "../utils";
import { saveState } from "./ScrollManager";

interface CardInterface {
    name: string;
    location: string,
    isBoss: boolean
}

function Enemy_Card({ name, location, isBoss }:CardInterface) {
  let content:any;

  useEffect(() => {    
    content = document.getElementById("page-content");
  });


  return (
    <>
      <div className="w-48 my-4 bg-slate-700 rounded-md hover:cursor-pointer drop-shadow-md">
        <Link onClick={ () => saveState("Enemies", { scrollY: content?.scrollTop }) } to={linkName(`Enemies/${convertToPathway(name)}`)}>
          <img className="mx-auto" src={`src/assets/Images/Sprites/Enemy/${ convertToPathway(location) }/${ convertToPathway(name) }.png`}></img>
          <div className={"pb-4 text-center " + ( isBoss ? 'text-amber-500' : "" ) }>
            <p> { name }</p>
          </div>
        </Link>  
      </div>
    </>
  )
}


  
export default Enemy_Card
  