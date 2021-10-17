const Header1 = (props) => {
    const {
        text
    } = props;

    return ( 
        <div className="header header1">
            <h1 className="headerText">
                {text}
            </h1>
            <div className="line" />
        </div>
    );
}
 
export default Header1;