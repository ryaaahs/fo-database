import Side_Bar_Item from "./Side_Bar_Item/Side_Bar_Item"

const section_one_items = [
    "Home",
];

const section_two_items = [
    "Items",
    "Enemies",
]

const itemSectionOneList = section_one_items.map(item => <Side_Bar_Item name={item}/>)
const itemSectionTwoList = section_two_items.map(item => <Side_Bar_Item name={item}/>)

function Side_Bar() {
    return (
        <>
            <div className="flex flex-col w-1/5 h-full bg-[#003194]">
                <section className="my-2">
                    { itemSectionOneList }
                </section>
                <hr className="border-slate-500"/>
                <section className="my-2">
                    { itemSectionTwoList }
                </section>
                
            </div>
        </>
    )
}
  
export default Side_Bar
  