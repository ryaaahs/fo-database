interface SideBarItemInterface {
    name: string;
}

function Side_Bar_Item({ name }:SideBarItemInterface) {
    return (
        <>
            <div className="my-2">
                { name }
            </div>
        </>
    )
}
  
export default Side_Bar_Item
  