//let's manage all out actions here!
//best practise: instead of writing the actions manually every time,
//let's create some functions that returns actions with dynamic payload:
//these are called "action creators functions"

//another best practise: define CONSTANTS for your action types!!!
//so now you can manage all the name of actions without any typo.
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_USERNAME = "SET_USERNAME";

//this is a fuction returning an action
//in redux terminology, this is called an "action creator"

export const addToCartAction = (bookSelected) => {
  //   return {
  //     type: "ADD_TO_CART",
  //     payload: bookSelected,
  //   };
  return {
    type: ADD_TO_CART,
    payload: bookSelected,
  };
};

export const removeFromCartAction = (i) => {
  return {
    type: REMOVE_FROM_CART,
    payload: i,
  };
};

// export const removeFromCartAction = (i) => ({
//     type: REMOVE_FROM_CART,
//     payload: i,
// };

export const setUsernameAction = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  };
};

// so it returns the action itself, the object
