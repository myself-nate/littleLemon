import {createContext, useContext, useState} from "react";

const ReviewsContext = createContext(undefined);

export const ReviewsProvider = ({ children }) => {
  const [Reviews] = useState([
    {
      id: 1,
      getImageSrc: () => require("../img/jane-paul.jpg"),
      name: "Jane Paul",
      rating: 5,
      comment: 'nice to get away from the husband for a bit and just be myself'
    },
    {
      id: 2,
      getImageSrc: () => require("../img/mike-ross.jpg"),
      name: "Mike Ross",
      rating: 5,
    },
    {
      id: 3,
      getImageSrc: () => require("../img/phill-dunphy.jpg"),
      name: "Phill Dunphy",
      rating: 4,
      comment: "I took my father in law here and he didn't completly hate it"
    },
    {
      id: 4,
      getImageSrc: () => require("../img/james-bond.jpg"),
      name: "James Bond",
      rating: 5,
      comment: 'my martini was made exactly how I like it'
    },
    {
      id: 5,
      getImageSrc: () => require("../img/agent-47jpg.jpg"),
      name: "Agent 47",
      rating: 4,
      comment: 'It seemed a little to organised for me, so not a 5'
    }
])

  return (
    <ReviewsContext.Provider value={Reviews}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviewsContext = () => useContext(ReviewsContext);