
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/navbar';
import FrameLogin from './Components/framelogin';
import logo from './Components/nix.png';



function Navigation() {
    return (
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <Navbar logo={logo} />
            <FrameLogin/>
        </nav>
    );
}
export default Navigation;