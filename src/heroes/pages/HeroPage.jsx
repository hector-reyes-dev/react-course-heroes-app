import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById, getHeroImgById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);
  const heroImageUrl = useMemo(() => getHeroImgById(id), [id]);

  const { superhero, alter_ego, publisher, first_appearance, characters } =
    hero;

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroImageUrl}
          alt=""
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={() => onNavigateBack()}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
