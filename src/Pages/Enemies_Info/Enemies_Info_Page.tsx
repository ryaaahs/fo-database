import Page from "../../Components/Page";
import { useTitle } from "../../utils"
import {useParams} from "react-router-dom";
import Content_Enemy from "./Enemies_Info_Content";

function Enemies_Info_Page() {
  useTitle("FO2-Database - Scarecrab");
  const { id } = useParams() 
  let name:string = id || "Scarecrab";

  return (
    <>
      {/* Remove the underscores from the name to query the JSON file */}
      <Page content={<Content_Enemy name={ name.replace(/\_/g, " ") } />}/>
    </>
  )
}

export default Enemies_Info_Page
