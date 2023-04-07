const useState = React.useState;

function LikeButton () {
    const [liked, setLiked] = useState(false);
    return (
        <React.Fragment>
        <button onClick={() => setLiked(!liked)}>{liked ? 'Liked' : 'Like'}</button>
        <StyledDiv>
            <h1>
                Hello World have a Dope Day
            </h1>
        </StyledDiv>
        </React.Fragment>
    )
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(<LikeButton />, domContainer);