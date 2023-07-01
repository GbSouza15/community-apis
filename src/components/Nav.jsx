import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { MdContacts } from "react-icons/md";

function Nav() {
    return (
        <nav className="bg-red-500 fixed bottom-0 w-full rounded-t-[2rem]">
            <ul className="flex justify-around h-[3.5rem] items-center">
                <li><a href="/sobre"><AiFillInfoCircle size='1.8rem'/></a></li>
                <li><a href="/"><AiFillHome size='1.8rem'/></a></li>
                <li><a href="/contact"><MdContacts size='1.8rem'/></a></li>
            </ul>
        </nav>
    );
}

export default Nav;