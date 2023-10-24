
function PropsItem(props){
    const name = props.name;
    const age = props.age;
    const branch = props.branch;
    const college = props.college;
    return(
        <div>
            <ul>
                <li>Name : {name}</li>
                <li>Age : {age} Branch : {branch} College : {college}</li>
                {props.children}
            </ul>
        </div>        
    );
}

export default PropsItem;