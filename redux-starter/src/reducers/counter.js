// Creates a reducer
// Reducer - takes the initial state & action to dispatch

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + action.payload;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

export default counterReducer;
