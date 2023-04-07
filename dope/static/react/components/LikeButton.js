const useState = React.useState;

function LikeButton () {
    const [liked, setLiked] = useState(false);
    return (
        <React.Fragment>
        <button onClick={() => setLiked(!liked)}>{liked ? 'Liked' : 'Like'}</button>
        </React.Fragment>
    )
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(<LikeButton />, domContainer);