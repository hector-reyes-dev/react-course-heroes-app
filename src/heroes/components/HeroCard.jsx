import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getHeroImgById } from "../helpers";

const CharactersByHero = ({ alter_ego, characters }) =>
  alter_ego !== characters && <p>{characters}</p>;

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = getHeroImgById(id);

  return (
    <div className="col mb-2">
      <div className="card animate__animated animate__fadeIn">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title mb-1">{superhero}</h5>
              <p className="card-text mb-2">{alter_ego}</p>
              <CharactersByHero alter_ego={alter_ego} characters={characters} />
              <p className="card-text">
                <small className="text-muted mb-0">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Más Información</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};

CharactersByHero.propTypes = {
  alter_ego: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
