interface SideBarItemInterface {
    name: string;
}

function Side_Bar_Item({ name }:SideBarItemInterface) {
    return (
        <>
            <div className="min-w-max p-2 hover:bg-[#345ba8] hover:cursor-pointer">
                { name }
            </div>
        </>
    )
}
  
export default Side_Bar_Item
  