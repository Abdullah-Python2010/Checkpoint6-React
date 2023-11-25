//Player Component

export function Player(props){

    return(
        <div className="card">
            <div className="top">
                <h3> {props.no} </h3>
                <img src={props.nation} alt="Country" />
            </div>
            <img src={props.player} alt="Player" />
            <h1> {props.name} </h1>
        </div>
    );
}


Player.defaultProps = {
    no: '01',
    nation: 'https://cdn4.vectorstock.com/i/1000x1000/58/48/blank-photo-icon-vector-3265848.jpg',
    player: 'https://cdn4.vectorstock.com/i/1000x1000/58/48/blank-photo-icon-vector-3265848.jpg',
    name: 'Player'
}