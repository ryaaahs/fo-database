import Card from "../Components/Enemy_Card";
import Content from "../Components/Content";
import Enemies from "../assets/JSON/enemies.json";


const enemyCards = Enemies.map(item => 
    <Card 
        key={ item.Id }
        name={ item.Name } 
        location={ item.Location }
        isBoss={ item.IsBoss }
    />
)

function Enemies_Page_Content() {
  return (
    <>
        <div className="w-full overflow-y-scroll">
            <div className="ml-4 mt-2 flex flex-col overflow-x-hidden w-3/5">
                <Content 
                    title={"Enemies"}
                    description={<p>
                    You'll encounter two distinct enemies types: Normal and <b>Bosses</b>. 
                    Beware, as Bosses possess greater strenght than Normal enemies.
                    </p>}
                    
                />
                <div className="ml-2 grid grid-row-6 grid-cols-4">
                    { enemyCards }
                </div>
            </div>
        </div>
    </>
  )
}

export default Enemies_Page_Content