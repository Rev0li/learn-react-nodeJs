import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Cascade de Morette",
    description:
      "Très belle balade. Après la cascade, il y a un site préhistorique et sur la route du retour un site qui rend hommage à la vierge Marie.",
    imageUrl:
      "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzYzODY4ODQvMWIxOWUyYmRkYzMxYzIzMGIzYjlkNzc1M2EyNTk1MWIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    adress: "La Balme-de-Thuy, Haute-Savoir, France",
    location: {
      lat: 45.9019113,
      lng: 6.2854735,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "La Tournette",
    description:
      "Partez découvrir cet itinéraire aller-retour de 10,5-km près de Les Clefs, Haute-Savoie. Ce parcours est généralement considéré comme difficile.",
    imageUrl:
      "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzg3Nzg2OTEvNWMwNWMzNDJlNWU0ODA4MGZiODQyZjg0ZDYzZDg5NGUuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    adress: "Les Clefs, Haute-Savoir, France",
    location: {
      lat: 45.826387,
      lng: 6.2688793,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
