import HarryPotter from './images/HarryPotter2.jpg';
import Aladdin from './images/Aladdin.jpg';
import captainMarvel from './images/captainMarvel.jpg';
import fantasticBeasts from './images/fantasticBeasts.jpg';
import joker from './images/joker.jpg';
import titanic from './images/titanic.jpg';

export default function getMovies() {
    return [
      { id:'HarryPotter', name:'Harry Potter', img: HarryPotter },
      { id:'Aladdin', name:'Aladdin', img: Aladdin },
      { id:'CaptainMarvel', name:'Captain Marvel', img: captainMarvel },
      { id:'FantasticBeasts', name:'Fantastic Beasts', img: fantasticBeasts  },
      { id:'Joker', name:'Joker', img:joker },
      { id:'Titanic', name:'Titanic', img:titanic   }
    ];
  }