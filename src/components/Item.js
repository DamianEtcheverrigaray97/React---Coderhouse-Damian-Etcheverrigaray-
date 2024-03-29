//Por cad avuelta del map mostramos este
import React from "react";
import BFXTTW01 from './../img/BFXTTW01.jpg';
import BFXK55RGB from './../img/BFXK55RGB.jpg';
import BFXNT3616G from './../img/BFXNT3616G.jpg';
import './../components/Item.css';
import ItemsCount from "./ItemCount";
import { Link } from 'react-router-dom';

const Item = props => {
    return(
        
            <div class="card">
                <img class="card-img-top" src={props.img} alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">{props.nameProduct}</h5>
                    <p class="card-text">PRECIO USD: {props.precio}</p>
                    <p class="card-text">STOCK: {props.stock}</p>
                    {/* <p class="card-text"><ItemsCount/></p> */}
                    <p class="btn btn-primary btn-sm">
                        <Link to={`/item/`+props.id}>
                            Detalle del producto
                        </Link>
                    </p>
                    
                </div>
            </div>
    );
}

export default Item;