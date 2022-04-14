import { Component } from "react";
import { Link } from "react-router-dom";

export class ProductCard extends Component {

    render() {
        
        const { name, gallery, prices, id } = this.props.product;
        return (
            <Link to={{pathname: `http://localhost:3000/${id}`}}>
                <img width={300} src={gallery[0]} alt={name}/>
                <p>{name}</p>
                <p><span>{prices[0].currency.symbol}</span>{prices[0].amount}</p>
            </Link>
        )
    }
}