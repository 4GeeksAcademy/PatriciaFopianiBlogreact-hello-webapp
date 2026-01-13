export function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_characters":
      return { ...store, characters: action.payload };

    case "set_locations":
      return { ...store, locations: action.payload };

    case "toggle_favoriteCharacters":
      const existsChar = store.favoritesCharacters.some(fav => fav.id === action.payload.id);
      return {
        ...store,
        favoritesCharacters: existsChar
          ? store.favoritesCharacters.filter(fav => fav.id !== action.payload.id)
          : [...store.favoritesCharacters, action.payload]
      };

    case "toggle_favoriteLocations":
      const existsLoc = store.favoritesLocations.some(fav => fav.id === action.payload.id);
      return {
        ...store,
        favoritesLocations: existsLoc
          ? store.favoritesLocations.filter(fav => fav.id !== action.payload.id)
          : [...store.favoritesLocations, action.payload]
      };

    default:
      return store;
  }
}
