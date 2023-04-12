import { createAction } from "../../utils/reducer/Reducer";
import { USER_ACTION_TYPES } from "./UserTypes";

export const setCurrentUser = (user: any) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

// CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
//   GOOGLE_SIGN_IN_START: "user/GOOGLE_SIGN_IN_START",
//   EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START",
//   SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
//   SIGN_IN_FAILED: "user/SIGN_IN_FAILED",

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION, null);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, null);

export const emailSignInStart = (email: any, password: any) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user: any) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error: any) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email: any, password: any, displayName: any) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
export const signUpSuccess = (user: any, additionalDetails: any) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });
export const signUpFailed = (error: any) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START, null);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, null);

export const signOutFailed = (error: any) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
