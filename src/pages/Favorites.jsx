import FavoriteList from './../components/FavoriteList';
import {useState} from 'react';


const Favorites = () => {
  const [allRecords, setAllRecords] = useState([]);
  const [favorites, setFavorites] = useState(()=>{
    const localData = localStorage.getItem('favorites');
    const favoritesLocalS = localData ? JSON.parse(localData).favorites : [];
    setAllRecords(favoritesLocalS);
    return favoritesLocalS;
  });

  const searchFavorite = (e) => {
    if(e.target.value === ""){
      setFavorites(allRecords);
    }
    let result = allRecords.filter(favorite => {
      return favorite.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFavorites(result);
  }

  const handleRemove = (id) => {
    const newFavorites = favorites.filter(favorite => favorite.uid !== id);
    localStorage.setItem('favorites', JSON.stringify({favorites:newFavorites}));
    setFavorites(newFavorites);
  };

  return (
    <>
      <div className="container mb-5">
        <h1 className="mb-5 mt-5 text-center"> My Favorites </h1>
        <FavoriteList favorites={favorites} handleRemove={handleRemove} searchFavorite={searchFavorite}/>
      </div>
    </>
  );
};

export default Favorites;
