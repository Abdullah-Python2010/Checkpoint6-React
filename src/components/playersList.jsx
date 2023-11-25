import { Data } from './players'
import { Player } from './player';

export function Cards(){
    return(
        <div className="container">
            {
                Data.map((info) => {
                    let {name, country, image, num} = info;
                    return( 
                        <Player 
                            name={name} 
                            player={image} 
                            nation={country}
                            no={num}
                        />
                    )
                    
                })
            }
        </div>
    )
}