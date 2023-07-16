import Enemies from "../../assets/JSON/enemies.json"
import { convertToPathway, displayDrops} from "../../utils"
import { Link } from "react-router-dom";

interface ContentEnemyInterface {
    name: string;
}

function Content_Enemy({ name }:ContentEnemyInterface) {

    const enemy = Enemies.find(i => i.Name === name);
    let enemyName:string = enemy?.Name || "";
    let level :number = enemy?.Level || 0;
    let isBoss:boolean = enemy?.IsBoss || false;
    let health:number = enemy?.Health || 0;
    let goldMin:number = enemy?.Gold.Min || 0;
    let goldMax:number = enemy?.Gold.Max || 0;
    let location:string = enemy?.Location || "";
    let drops:Object[] = enemy?.Drops || [];

    return (
        <>  
            <div className="w-full overflow-y-scroll">
                <section className="ml-4 mt-2 flex flex-col overflow-x-hidden w-3/5">
                    <p className={`${ isBoss ? "text-amber-500 font-bold" : "" } text-4xl`}>{ enemyName }</p>
                    <img className="mx-auto" src={`../src/assets/Images/Sprites/Enemy/${ convertToPathway(location) }/${ convertToPathway(enemyName)+"_Large" }.png`}></img>
                    <span className="text-2xl mb-2">
                        <p>Level: { level }</p>
                        <p>Health: { health }</p>
                        <p>Gold: { goldMin } - { goldMax}</p>
                        <Link to={ convertToPathway(`../Maps}/${ convertToPathway(location) }`) }>    
                            Location: <span className="text-sky-500 underline inline-block" ><h3>{ location }</h3></span>
                        </Link> 
                    </span>
                    
                    <hr />

                    <span className="text-2xl mt-2">
                        <p>Drops: </p>
                        { displayDrops(drops) }
                    </span>
                </section>
            </div>
        </>
    )
}

export default Content_Enemy