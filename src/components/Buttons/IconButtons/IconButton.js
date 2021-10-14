const IconButton = (props) => {
    const {
        link = '#',
        src = '',
        alt = '',
    } = props;

    return ( 
        <a className="iconButton" href={link} target="_blank" rel="noreferrer noopener">
            <img src={src} alt={alt}/>
        </a>
     );
}
 
export default IconButton;