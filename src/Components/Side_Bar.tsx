import Side_Bar_Item from "./Side_Bar_Item"

const items = [
    "Items",
    "Enemies",

]

const itemList = items.map(item => <Side_Bar_Item name={item}/>)

function Side_Bar() {
    return (
        <>
            <div className="flex flex-col w-1/5 h-full bg-[#003194] p-4">
                { itemList }
            </div>
        </>
    )
}
  
export default Side_Bar
  