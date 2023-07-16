import React, { createRef, useRef } from "react";
import Enemies from "../../assets/JSON/enemies.json"
import { convertToPathway, displayDrops, scaleImage} from "../../utils"
import { Link } from "react-router-dom";

interface ContentEnemyInterface {
    name: string;
}

function Enemies_Info_Content({ name }:ContentEnemyInterface) {

    const enemyImage = useRef(null);
    const enemy = Enemies.find(i => i.Name === name);
    const scale_factor:number = 3;

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
            <section className="ml-4 mt-4 flex flex-col overflow-x-hidden w-3/5">
                <h2 className={`${ isBoss ? "text-amber-500 font-bold" : "" } text-3xl`}>{ enemyName }</h2>
                
                <img 
                    className="mx-auto"
                    style={{imageRendering: "pixelated"}}
                    src={`../src/assets/Images/Sprites/Enemy/${ convertToPathway(location) }/${ convertToPathway(enemyName) }.png`}
                    ref={ enemyImage }
                    onLoad={ () => scaleImage(enemyImage, scale_factor) }
                />

                <span className="text-2xl mb-2">
                    <p>Level: { level }</p>
                    <p>Health: { health }</p>
                    <p>Gold: { goldMin } - { goldMax}</p>
                    <div>
                        Location:&nbsp; 
                        <Link to={ convertToPathway(`../Maps/${ convertToPathway(location) }`) }>    
                            <span className="text-sky-500 underline inline-block" ><h3>{ location }</h3></span>
                        </Link> 
                    </div>
                </span>
                
                <hr />

                <span className="text-2xl mt-2">
                    <p>Drops: </p>
                    { displayDrops(drops) }
                </span>
            </section>
        </>
    )
}

export default Enemies_Info_Content