import { Action, ActionType } from '../actionTypes/index';

export interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface State {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_POST_PENDING:
      return {
        loading: true,
        posts: [],
        error: null,
      };
    case ActionType.GET_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: null,
      };
    case ActionType.GET_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
        posts: [],
      };
    default:
      return state;
  }
};

export default postReducer;