import { useEffect } from "react";
import Content from "../../Components/Content";
import Maps from "../../assets/JSON/maps.json";
import { convertToPathway, linkName } from "../../utils";
import { Link } from "react-router-dom";
import { getElementScrollY, setElementScrollY } from "../../Components/ScrollManager";

function Maps_Page_Content() {
    useEffect(() => {    
        getElementScrollY("Maps");
        setElementScrollY("Maps");
    });
    
    const maps = Maps.map(item => 
        <div className="my-8" key={ item.Id }>
            <img className="mx-auto" src={`src/assets/Images/Sprites/Maps/${ convertToPathway(item.Name) }.png`}></img>
            <Link to={ linkName("Home") }>    
                <span className="pb-4 text-center text-sky-500 underline" ><h3>{ item.Name }</h3></span>
            </Link> 
        </div>
    )

    return (
        <>
            <div className="ml-4 mt-2 flex flex-col overflow-x-hidden w-3/5">
                <Content 
                    title={"Maps"}
                    description={<p className="text-lg">
                    Since the game is in a Alpha state, there is a minimum amount of maps you can currently play.
                    </p>}
                />
                { maps }
            </div>
        </>
    )
}

export default Maps_Page_Content