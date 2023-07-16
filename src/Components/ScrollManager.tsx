const state:any = {};

function saveState (component:string, object:object) {
    state[component] = object;  
}

function getState(component:string) {
    console.log(component, state);
    return state[component];
}

function getElementScrollY(component:string) {
    if(getState(component)) {
        let { scrollY } = getState(component);

        const contentSection = document.getElementById("page-content");
        if( contentSection ) {
            contentSection.scrollTop = scrollY;
        }
    }
}

function setElementScrollY(component:string) {
    const contentSection = document.getElementById("page-content");
    const save = () => {
        if( contentSection ) {
            saveState(component, {  scrollY: contentSection.scrollTop })
            console.log(contentSection.scrollTop);
        }
    }; 
    save()
    if( contentSection ) {
        contentSection.addEventListener('scroll', save)
    }
    return () => contentSection?.removeEventListener('scroll', save)
}

export { getElementScrollY, setElementScrollY, saveState }