import React from 'react';
import './paginationc.css'
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

const Paginationc = () => {
    return (
        <div className="align-content-center center">
            <Pagination size="sm" aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#"/>
                </PaginationItem>
            </Pagination>
        </div>

    );
};

export default Paginationc;
