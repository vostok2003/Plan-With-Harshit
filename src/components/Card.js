import { useState } from "react";
import "../index.css"
function Card(props){
    

    const [readmore,setreadmore]=useState(false);

    function readmoreHandler(){
        setreadmore(!readmore);
    }
    const description= readmore ?props.info:`${props.info.substring(0,200)}....`;
    return(
        <div className="Card">
            <img src={props.image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                <h4 className="tour-price"> {props.price}</h4>
                <h4 className="tour-name">{props.name}</h4>
                

                </div>
                <div className="tour-description">
                    {description}
                    <span onClick={readmoreHandler} className="readmore">
                    {readmore?`show less`:`read more`}
                    </span>
                </div>
            </div>
            
            <button  className="btn-red" onClick={()=>props.removetour(props.id)}>
                Not interested
                </button>
        </div>)
}

export default Card;