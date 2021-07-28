import React from 'react'
import { Pagination } from 'semantic-ui-react'
import '../css/pagination.css'
const Paginations = (props) => {


    return (
        <div className="pagination-textaliment" >
            <Pagination
                onPageChange={(e,d)=>props.onPageChange(d.activePage)}
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={props.totalPages}
                activePage={props.activePage}
            /></div>
    )
}

export default Paginations
