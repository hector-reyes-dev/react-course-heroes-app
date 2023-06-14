import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publicadora ${publisher} no encontrada`);
  }

  return heroes.filter((heroes) => heroes.publisher === publisher);
};
