import React, {useState} from 'react';
import './timeDropDown.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import arrow from "../../../../../../images/Arrow_off.png";

const TimeDropDown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    <img className='arrowDown' src={arrow}/>
                    زمان
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

export default TimeDropDown;
