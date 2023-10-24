import Card from "./Card"
function Form(){
    return(
        <form>
            <Card type="text" name="name" label="Name" placeholder="Enter your name please" />
            <Card type="PassWord" name="pswd"  label ="Password" placeholder="Enter your password please" />
        </form>
    );
}

export default Form;