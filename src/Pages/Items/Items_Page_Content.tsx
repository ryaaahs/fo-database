import Content from "../../Components/Content";
import { Link, useNavigate } from "react-router-dom";
import { linkName } from "../../utils";

const item_types = [
    {id: 1, name: "Weapons"},
    {id: 2, name: "Armors"},
    {id: 3, name: "Accessories"},
    {id: 4, name: "Consumables"},
    {id: 5, name: "Cosmetics"},
]

function Items_Page_Content() {
    const navigate  = useNavigate();

    const itemTypesList = item_types.map(item => 
        <div className="w-max my-2" key={ item.id }>
            <Link onClick={ () => navigate(linkName("Home")) } to={ linkName("Home") }>    
                <span className="text-sky-500 underline" ><h3>{ item.name }</h3></span>
            </Link> 
        </div>
        
    )

    return (
        <>
            <div className="ml-4 mt-2 flex flex-col overflow-x-hidden w-3/5">
                <Content 
                    title={"Items"}
                    description={<p className="text-lg">
                    A diverse range of loot to collect from your defeated foes. 
                    Whether it's a fresh equipment piece or a fragment of a quest item, 
                    every new adversary you face will bring abundant rewards.  
                    </p>}
                />
                <div className="mt-6">
                    { itemTypesList }
                </div>
            </div>
        </>
    )
}

export default Items_Page_Content