import React, {useState} from 'react';
import './orderDropDown.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const OrderDropDown = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className='aaaa'>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    ترتیب
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

export default OrderDropDown;
