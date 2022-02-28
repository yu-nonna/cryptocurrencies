import React from "react";
import {numberWithString, renderChangePercent } from "../../helpers";


const Table = ({sortedColumn, sortBy, cryptocurrencies, handleColumnClick, handleRowClick}) => {
    return(
        <div className = "Table-container">
                <table className = "Table">
                    <thead className = "Table-head">
                        <tr>
                            <th id="Cryptocurrency" onClick={handleColumnClick}>Cryptocurrency <span className={sortedColumn==="Cryptocurrency" && sortBy === "asc" ? "percent-raised" : ""}>&uarr;</span><span className={sortedColumn==="Cryptocurrency" && sortBy === "dsc" ? "percent-raised" : ""}>&darr;</span></th>
                            <th id="Price" onClick={handleColumnClick}>Price <span className={sortedColumn==="Price" && sortBy === "asc" ? "percent-raised" : ""}>&uarr;</span><span className={sortedColumn==="Price" && sortBy === "dsc" ? "percent-raised" : ""}>&darr;</span></th>
                            <th id="Market_Cap" onClick={handleColumnClick}>Market Cap <span className={sortedColumn==="Market_Cap" && sortBy === "asc" ? "percent-raised" : ""}>&uarr;</span><span className={sortedColumn==="Market_Cap" && sortBy === "dsc" ? "percent-raised" : ""}>&darr;</span></th>
                            <th id="24h_change" onClick={handleColumnClick}>24H change <span className={sortedColumn==="24h_change" && sortBy === "asc" ? "percent-raised" : ""}>&uarr;</span><span className={sortedColumn==="24h_change" && sortBy === "dsc" ? "percent-raised" : ""}>&darr;</span></th>
                        </tr>
                    </thead>
                    <tbody className = "Table-body">
                        {
                            cryptocurrencies.map(currency => {
                                const {id, name, market_cap, market_cap_rank,current_price, price_change_percentage_24h} = currency;
                                return(
                                    <tr key={id} onClick={() => handleRowClick(id)}>
                                    <td>
                                        <span className="Table-rank">{market_cap_rank}</span>
                                        {name}
                                    </td>
                                    <td>
                                        <span className="Table-dollar">$</span>
                                        {numberWithString(current_price)}
                                    </td>
                                    <td>
                                        <span className="Table-dollar">$</span>
                                        {numberWithString(market_cap)}
                                    </td>
                                    <td>
                                        {renderChangePercent(price_change_percentage_24h)}
                                    </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    )
}


export default Table;