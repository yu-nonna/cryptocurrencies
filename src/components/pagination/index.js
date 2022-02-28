import React from "react";
import "./index.css";
const Pagination = ({handlePaginationState, page, totalPage}) => {

    return(
        <div className="Pagination">
            <button className="Pagination-button"
             onClick= {() => handlePaginationState("prev")}
             disabled = {page === 1}
             >&larr;</button>
            <span className="Pagination-info">{page} of {totalPage}</span>
            <button className="Pagination-button" 
            onClick= {() => handlePaginationState("next")}
            disabled = {page === totalPage}>&rarr;</button>
            
        </div>
    )
}



export default Pagination;