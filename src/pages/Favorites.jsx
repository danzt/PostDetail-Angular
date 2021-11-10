import { Container } from 'react-bootstrap';



const localData = localStorage.getItem('favorites');
const favoritesLocalS = localData ? JSON.parse(localData) : [];
console.log(favoritesLocalS,'Favorites');
const Favorites = () => {
  return (
    <>
      Mis Favorites Agregados
      <Container>
       {favoritesLocalS.favorites.map((favorite, i) => (
         <li key={i}>
           {favorite.name}
           {favorite.id}
         </li>
       ))}
     </Container>

    </>
  );
};

export default Favorites;
