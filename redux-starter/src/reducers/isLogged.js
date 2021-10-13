// Creates a reducer
const loggedReducer = (state = true, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state; // Return the current state
  }
};

export default loggedReducer;
