import { Link, useNavigate } from 'react-router-dom';
import './Side_Bar_Item.css'

interface SideBarItemInterface {
    name: string;
}

function Side_Bar_Item({ name }:SideBarItemInterface) {
    const navigate  = useNavigate();
    
    // Delay the page change to play onCLick animation
    function delay (event:any, name:string) { 
        event.preventDefault();

        setTimeout(() => navigate(name), 300);
    }

    return (
        <>
        {/*  */}
            <div onClick={createRipple} className="overflow-hidden hover:bg-[#345ba8] relative flex h-10  hover:cursor-pointer">
                <Link onClick={(event) => delay(event, linkName(name))} className="flex grow" to={linkName(name)}>
                    <section className="self-center pl-4">
                        {name}
                    </section>
                </Link>
            </div>
        </>
    )
}

function linkName (value: string) {
    if (value === "Home") {
        return "/";
    }
    return "/" + value;
}

function createRipple(event:any) {
    // https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/ 

    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}
  
export default Side_Bar_Item
  