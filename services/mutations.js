import axios from "axios";
export const fetchCharacters = async (page, name) => {
  const queryResult = await axios.post("https://rickandmortyapi.com/graphql", {
    query: `query {
      characters(page:${page}, filter: { name: "${name}" }) {
        info {
          count,next,prev
        }
        results {
          name,
          status,
          id,
         image,
          species,
          type,
          gender,location{name}
        }
      }
     
    }`,
  });
  return queryResult.data.data;
};
