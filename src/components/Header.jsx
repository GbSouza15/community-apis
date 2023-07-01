import { AiFillApi } from "react-icons/ai";
import Nav from '../components/Nav'

function Header() {
  return (
    <header className="flex items-center justify-center">
        <div className="logo-and-name flex items-center gap-2">
            <AiFillApi size='2.5rem'/>
            <p>COMMUNITY API's</p>
        </div>
        <Nav />
    </header>
  );
}

export default Header; 