import "./Card.css"
function Card(props){
    return(
        <>
            <label for={props.label}>{props.label}</label>
            <input type={props.type}
            name={props.name} placeholder={props.placeholder} /><br/>
        </>
    );
}

export default Card;