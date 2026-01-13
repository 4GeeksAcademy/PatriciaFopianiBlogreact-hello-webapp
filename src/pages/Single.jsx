import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const Single = () => {
  const { type, id } = useParams(); 
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();
  const idNum = Number(id);

  if (type === "character") {
    const character = store.characters.find(c => c.id === idNum);
    if (!character) return <h2 className="text-center mt-5">Character not found</h2>;

    return (
      <div className="container mt-4">
        <h1 className="text-warning mb-4">{character.name}</h1>
        <img
          src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`}
          alt={character.name}
          className="img-fluid mb-3"
          style={{ maxWidth: "300px" }}
        />
        <p><strong>Age:</strong> {character.age}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Occupation:</strong> {character.occupation}</p>
        <h4 className="mt-4">Famous phrases</h4>
        <ul>
          {character.phrases?.slice(0, 5).map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>← Volver</button>
      </div>
    );
  }

  if (type === "location") {
    const location = store.locations.find(l => l.id === idNum);
    if (!location) return <h2 className="text-center mt-5">Location not found</h2>;

    return (
      <div className="container mt-4">
        <h1 className="text-warning mb-4">{location.name}</h1>
        <img
          src={location.image || "https://via.placeholder.com/400x200?text=No+Image"}
          alt={location.name}
          className="img-fluid mb-3"
          style={{ maxWidth: "400px" }}
        />
        {location.use && <p><strong>Use:</strong> {location.use}</p>}
        {location.type && <p><strong>Type:</strong> {location.type}</p>}
        {location.region && <p><strong>Region:</strong> {location.region}</p>}
        {location.town && <p><strong>Town:</strong> {location.town}</p>}
        <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>← Volver</button>
      </div>
    );
  }

  return <h2 className="text-center mt-5">Item not found</h2>;
};
