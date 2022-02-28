import React, {Component} from "react";
import { API_URL } from "../../constants";
import Loading from "../loading";
import "../../helpers/index";
import {handleResponse, renderChangePercent} from "../../helpers/index";
import "./index.css"


class DetailedReport extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            currency: {}
        };
    }

    componentDidMount(){
        const {currencyId} = this.props.match.params;
        fetch(`${API_URL}/coins/${currencyId}`)
        .then(handleResponse)
        .then(currency => {
            this.setState({
                currency,
                loading: false
            })
        })
        

    }


    render(){

        const {Loading, currency} = this.state;
        console.log(currency)

        if(Loading){
            return(
                <div className="loading-container">
                    <Loading/>
                </div>
            )
        }
        return(
            <div className="Detail" >
                <h1 className="Detail-heading">
                    {currency.name} ({currency.symbol})
                </h1>
            <div className="Detail-container">
          <div className="Detail-item">
            Price <span className="Detail-value">$ {currency.price}</span>
          </div>
          <div className="Detail-item">
            Rank <span className="Detail-value">{currency.rank}</span>
          </div>
          <div className="Detail-item">
            24H Change
            <span className="Detail-value">{renderChangePercent(currency.percentChange24h)}</span>
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Market cap</span>
            <span className="Detail-dollar">$</span>
            {currency.marketCap}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">24H Volume</span>
            <span className="Detail-dollar">$</span>
            {currency.volume24h}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Total supply</span>
            {currency.totalSupply}
          </div>
        </div>
            </div>
        )
        
    }
}

export default DetailedReport;