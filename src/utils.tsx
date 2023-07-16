import React from "react";
import { Link } from "react-router-dom";

function scaleImage(ref:any, scale:number) {
  const image = ref.current;
  image.width = image.naturalWidth * scale;
  image.height = image.naturalHeight * scale;
}

function convertToPathway (value:String ){ 
    return value.replace(/\ /g, "_");
}

function delay (event:any, navigate:any , name:string) { 
    event.preventDefault();

    setTimeout(() => navigate(name), 300);
}

function linkName (value: string) {
    if (value === "Home") {
        return "/";
    }
    return "/" + value;
}

function useTitle(title:string) {
  React.useEffect(() => {
    const prevTitle = document.title
    document.title = title;
    return () => {
      document.title = prevTitle
    }
  })
}

function displayDrops (list:Object[]) {

  const renderItems = () => {
    let items = [];

    if (list === undefined || list.length === 0) {
      items.push(<div key="0" className="inline-block">N/A</div>)
    } else {
      for (const [index, item] of list.entries()) {
        items.push( 
          <div key={ index } className="pt-2">
            <Link to={ convertToPathway(`../${item.Item_Type}/${convertToPathway(item.Name)}`) }>    
                <span className="text-sky-500 underline inline-block" ><h3>{ item.Name }</h3></span>
            </Link> 
          </div>
        )
      }
    }

    return items;
  }

  return (
    <div>
      { renderItems() }
    </div>
  )
}

export { convertToPathway, delay, linkName, useTitle, displayDrops }