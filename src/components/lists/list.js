import React, {PureComponent} from "react";
import {API_URL} from "../../constants";
import Loading from "../loading";
import {renderChangePercent} from "../../helpers";
import Table from "../table";
import Pagination from "../pagination";
import {handleResponse} from "../../helpers/index"
import "./table.css";


class List extends React.Component {


    constructor(props){
         super(props);
         this.state = {
             isLoading : true,
             cryptocurrencies : [],
             sortedColumn: null,
             sortBy: null,
             page: 1,
             perPage: 20,
             totalCount: 1500,
         }
    };

    

    fetchCurrencies = () => {
        this.setState({
            isLoading:true,
        })
        const {page, perPage} = this.state;
        fetch(`${API_URL}/coins/markets?vs_currency=usd&per_page=${perPage}&page=${page}`)
        .then(response => {
            if(response.ok){
                return response.json()
            }
            return Promise.reject(response)
        }).then(cryptocurrencies => {
            this.setState({
                    isLoading: false,
                    cryptocurrencies
                })
            console.log(cryptocurrencies)
        }).catch(error => {
            console.log(error)
        })

    }

    componentDidMount(){
        this.fetchCurrencies()
        
    }


    handlePaginationState = direction => {

        this.setState(prevState => ({
            ...prevState,
            page: direction === "next" ? prevState.page + 1 : prevState.page - 1
        }), this.fetchCurrencies);

    }



    handleColumnClick = event => {
        console.log(event.target.id)
        this.setState(prevState => {
            return{
                ...prevState,
                cryptocurrencies: prevState.cryptocurrencies.sort((a, b) => {
                    if(a.name > b.name){
                        return 1
                    }
                        return -1                    
                }),
                sortedColumn: prevState.sortBy === "dsc" && prevState.sortedColumn === event.target.id ? null : event.target.id,
                sortBy: prevState.sortedColumn === event.target.id ? "dsc" : "asc" 
            }
        })
    }
    

    handleRowClick = (currencyId) => {
        this.props.history.push(`/currencies/${currencyId}`)
    }
  
    render(){
        const {isLoading, cryptocurrencies, sortBy, sortedColumn, page, totalCount, perPage} = this.state;
        const totalPage = Math.ceil(totalCount/perPage);

        if(isLoading){
            return(
                <div className="loading-container">
                    <Loading/>
                </div>
            )
        }
        return(
            <div>
                <Table
                cryptocurrencies={cryptocurrencies}
                sortedColumn={sortedColumn}
                sortBy={sortBy}
                handleColumnClick={this.handleColumnClick}
                handleRowClick={this.handleRowClick}
                />
                <Pagination 
                handlePaginationState={this.handlePaginationState}
                page={page}
                totalPage={totalPage}
                />
            </div>
            
        )       
    }
}
  

export default List;