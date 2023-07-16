import Page from "../../Components/Page";
import { useTitle } from "../../utils"
import Home_Page_Content from "./Home_Page_Content"

function Home_Page() {
  useTitle("FO2-Database - Home");
  return (
    <>
      <Page content={< Home_Page_Content />}/>
    </>
  )
}

export default Home_Page
