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

export const CREATE_LIST = gql`
  mutation createList($input: CreateListInput) {
    createList(input: $input) {
      id
      title
    }
  }
`;

export const RESET = gql`
  mutation reset($input: ResetInput) {
    reset(input: $input) {
      status
    }
  }
`;

export const CREATE_ITEM = gql`
  mutation createItem($input: CreateItemInput) {
    createItem(input: $input) {
      id
      title
      done
    }
  }
`;

export const UPDATE_ITEM_STATUS = gql`
  mutation toggleItemDone($input: ToggleItemInput) {
    toggleItemDone(input: $input) {
      id
      done
    }
  }
`;
