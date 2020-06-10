// TODO: implement
import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILURE,
  CREATE_MESSAGES,
  CREATE_MESSAGES_SUCCESS,
  CREATE_MESSAGES_FAILURE
} from "../actions";

const INITIAL_STATE = {
  messages: {
    id: 0,
    text: "",
    username: "",
    createdAt: "",
    likes: 0,
  },
  text: "",
  loading: false,
  error: "",
};

export const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case GET_MESSAGES_SUCCESS:
      const { messages } = action.payload;
      return {
        ...INITIAL_STATE,
        messages,
        loading: false,
      };
    case GET_MESSAGES_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case CREATE_MESSAGES:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case CREATE_MESSAGES_SUCCESS:
      const { text } = action.payload;
      return {
        ...INITIAL_STATE,
        text,
        loading: false,
      };
    case CREATE_MESSAGES_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

