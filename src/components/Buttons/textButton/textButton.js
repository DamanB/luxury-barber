const TextButton = (props) => {
    const text = props.text;
    return ( 
        <button className="textButton">
            { text }
        </button>
     );
}
 
export default TextButton;