import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarItem from './NavbarItem';


function Navbar(props) {
    return (
        <div>
         <div class="container-md-4">
                <a class="navbar-brand" href="#">
                    <img src={props.logo} width="90px" height="50px" alt="Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <NavbarItem Name="Hello"/>
            </div>
        </div>
    );
}

export default Navbar;