import React from "react";


interface ContentInterface {
    title: String;
    description: React.ReactNode;
}

function Content({ title, description }:ContentInterface) {
    return (
        <>
            <section>
                <h2 className="mb-4">{ title }</h2>
                { description }
            </section>
        </>
    )
}
  
export default Content
  