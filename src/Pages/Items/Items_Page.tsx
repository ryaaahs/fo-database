import Page from "../../Components/Page";
import Items_Page_Content from "./Items_Page_Content"
import { useTitle } from "../../utils"

function Items() {
  useTitle("FO2-Database - Items");
  return (
    <>
      <Page content={<Items_Page_Content />}/>
    </>
  )
}

export default Items
