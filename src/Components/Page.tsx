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
            <div className="flex h-full flex-row">
              <Side_Bar /> 
              { content }
            </div>
            
        </div>
      </>
    )
  }
  
export default Page
  