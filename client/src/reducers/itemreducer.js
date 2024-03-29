//import action types
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ITEMS_CLEAR,
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
};

export default function ItemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload.items, ...state.items],
      };

    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ITEMS_CLEAR:
      return {
        ...state,
        items: [],
        loading: false,
      };
    default:
      return state;
  }
}
