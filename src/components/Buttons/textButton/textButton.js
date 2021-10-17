const TextButton = (props) => {
    const text = props.text;
    return ( 
        <div className="textButton">
            <button>
                { text }
            </button>
        </div>
     );
}
 
export default TextButton;