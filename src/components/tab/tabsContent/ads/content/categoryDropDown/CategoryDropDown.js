import React, {useState} from 'react';
import "./categoryDropDown.css"
import arrow from "../../../../../../images/Arrow_off.png"
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const CategoryDropDown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className="adsCategoryDropDown">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>

                <DropdownToggle caret>
                    <img className='arrowDown' src={arrow}/>
                    دسته
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>

            </Dropdown>
        </div>
    );
};

export default CategoryDropDown;
