import './button.css'

const Button = (props) => {
    const text = props.text;
    return ( 
        <div className="Button">
            <button>
                { text }
            </button>
        </div>
     );
}
 
export default Button;