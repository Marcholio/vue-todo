import gql from "graphql-tag";

export const GET_LISTS = gql`
  query getLists {
    lists: getLists {
      id
      title
      items {
        id
        title
        done
      }
    }
  }
`;
