import { Link } from 'react-router-dom';
import { linkName } from '../utils';

interface SideBarItemInterface {
    name: string;
}

function Side_Bar_Item({ name }:SideBarItemInterface) {
    return (
        <>
            <div className="overflow-hidden hover:bg-[#345ba8] relative flex h-10  hover:cursor-pointer">
                <Link className="flex grow" to={linkName(name)}>
                    <section className="self-center pl-4">
                        {name}
                    </section>
                </Link>
            </div>
        </>
    )
}

export default Side_Bar_Item
  