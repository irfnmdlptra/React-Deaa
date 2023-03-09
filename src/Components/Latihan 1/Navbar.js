function Navbar(props) {
    return (
        <div>
            <h2>{props.NavHeading}</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">{props.NavText}</a></li>
            </ul>
        </div>
    )
}

export default Navbar