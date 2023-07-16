interface HeaderInterface {
    placeholder: string;
    title: string;
}

function Header({ placeholder, title }:HeaderInterface) {
    return (
        <div className="flex min-w-max bg-[#001e5e] p-4">
            <h1 className="basis-3/4">{title}</h1>
            <div className="basis-1/4 flex">
                <input className="w-full rounded pl-2 text-black" placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Header