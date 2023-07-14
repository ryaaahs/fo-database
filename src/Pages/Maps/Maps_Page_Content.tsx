import Content from "../../Components/Content";
import Maps from "../../assets/JSON/maps.json";
import { convertToPathway, linkName } from "../../utils";
import { Link, useNavigate } from "react-router-dom";




function Maps_Page_Content() {
    const navigate  = useNavigate();


    const maps = Maps.map(item => 
        <div className="my-8" key={ item.Id }>
            <img className="mx-auto" src={`src/assets/Images/Sprites/Maps/${ convertToPathway(item.Name) }.png`}></img>
            <Link onClick={ () => navigate(linkName("Home")) } to={ linkName("Home") }>    
                <span className="pb-4 text-center text-sky-500 underline" ><h3>{ item.Name }</h3></span>
            </Link> 
        </div>
    )

    return (
        <>
            <div className="w-full overflow-y-scroll">
                <div className="ml-4 mt-2 flex flex-col overflow-x-hidden w-3/5">
                    <Content 
                        title={"Maps"}
                        description={<p>
                        Since the game is in a Alpha state, there is a minimum amount of maps you can currently play.
                        </p>}
                    />
                    { maps }
                </div>
            </div>
        </>
    )
}

export default Maps_Page_Content