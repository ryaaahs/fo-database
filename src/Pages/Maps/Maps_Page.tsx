import Page from "../../Components/Page";
import Maps_Page_Content from "./Maps_Page_Content"
import { useTitle } from "../../utils"

function Maps_Page() {
  useTitle("FO2-Database - Maps");
  return (
    <>
      <Page content={< Maps_Page_Content />}/>
    </>
  )
}

export default Maps_Page
