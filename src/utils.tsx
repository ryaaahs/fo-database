import { useEffect } from "react";

function convertToPathway ( value:String ){ 
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
    useEffect(() => {
      const prevTitle = document.title
      document.title = title;
      return () => {
        document.title = prevTitle
      }
    })
  }

export { convertToPathway, delay, linkName, useTitle }