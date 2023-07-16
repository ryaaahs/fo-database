import { useRef } from "react";
import Header from "./Header"
import Side_Bar from "./Side_Bar"

interface PageInterface {
  content: any;
}

function Page({ content }:PageInterface) {
  
  return (
    <>
      <div className="flex flex-col h-full">
          <Header title="FO2-Database" placeholder="Search..."/>
          <div className="flex h-full  overflow-y-auto">
            <Side_Bar /> 
            <div id="page-content" className="w-full overflow-y-scroll">
              { content }
            </div>
          </div>
      </div>
    </>
  )
}
export default Page
  