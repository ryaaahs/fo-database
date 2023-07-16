import Content from "../../Components/Content";

function Home_Page_Content() {
    
    return (
        <>
            <div className="ml-4 mt-2 flex flex-col overflow-x-hidden w-3/5">
                <Content 
                    title={"WELCOME!"}
                    description={<p className="text-lg">
                        The aim of FO2-Database is to present all FO2 information in a clear and organized manner for easy comprehension. 
                        If you encounter any issues with the information or come across bugs, please notify the developer to have them addressed promptly!
                    </p>}
                />
            </div>
        </>
    )
}

export default Home_Page_Content