import { Card } from 'primereact/card';


export function InformationGames({ data }) {

    return (
        <ul>
          {data.map(game => (
            <li key={game.id}>
              {game.name}
              <br />
              <Card>
                <img src={game.picture} alt="Image Text" className='game-image' />  
              </Card>
              <br />
              {game.price}
            </li>
          ))}
        </ul>
      );
    }