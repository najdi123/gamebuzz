import React, {useState} from 'react';
import "./navbar.css"
import logo from "../../images/logo.png"
import search from "../../images/Search.png"
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Navbarc = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expSearch, setExpSearch] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const toggleExpSearch = () => {
        setExpSearch(!expSearch);
    };

    const handleSearch = () => {
        //todo handle search here
        // call the below method if need to close search box after search is clicked
        toggleExpSearch();
    };

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    };

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='navbarc'>
            <Navbar className="navbar" dark expand="md">
                {/*based on input value we generate different button*/}
                <div className="searchWrapper">
                    <input onChange={handleSearchInput}
                           className={`searchInput ${expSearch ? "expandedSearchBox" : "collapsedSearchBox"}`}
                           type="text"/>
                    {searchInput ? <button className="searchBtn" onClick={handleSearch}>
                            <img  src={search}/>
                        </button>
                        : <button className="searchBtn" onClick={toggleExpSearch}>
                            {/*<i className={expSearch ? "fa fa-remove" : "fas fa-search"}/>*/}
                            <img src={search}/>
                        </button>}
                </div>

                <div className={expSearch ? "login noshow" : "login"}>
                    <div className="login-item">ورود</div>
                    <div className="verticalLine"/>
                    <div className="login-item">عضویت</div>
                </div>

                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar className="navItems">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/contactUs/">تماس با ما</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/aboutUs">درباره ما</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/support">پشتیبانی و قوانین</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/faq">سوالات متداول</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>


            </Navbar>

            <Link to='/'  style={{color: 'inherit', textDecoration: 'none'}}>
                <img className={expSearch ? "logo noshow" : "logo"} src={logo}/>
            </Link>
        </div>
    );
};

export default Navbarc;
