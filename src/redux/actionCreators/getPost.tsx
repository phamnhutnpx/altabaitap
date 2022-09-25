// import axios from 'axios';
import { onValue, ref } from "firebase/database";
import { Dispatch } from "redux";
import { db } from "../../firebase-config";
import { ActionType, Action } from "../actionTypes";

export const getPosts = (postId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POST_PENDING,
    });

    try {
      const starCountRef = ref(db, "blogs/" + postId);
      let data: any;
      onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
      });
      dispatch({
        type: ActionType.GET_POST_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_POST_FAIL,
        payload: err.message,
      });
    }
  };
};
