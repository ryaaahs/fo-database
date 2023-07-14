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

export { convertToPathway, delay, linkName }