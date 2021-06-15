import './arcText.css'

const ArcText = (props) => {
    const text = props.text;
    return (
        <div className="ArcText">
            <h1 className="text placeholder">{text}</h1>
            <h1 className="text">
                {text && (
                    text.split('').map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))
                )}
            </h1>
        </div>
    );
}

export default ArcText;