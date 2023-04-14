import * as actionType from "../constants/actionTypes";

const initialState = {
  authData: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH:
      return { authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;

// const authReducer = (state = { authData: null }, action) => {
//   switch (action.type) {
//     case actionType.AUTH:
//       localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

//       return { ...state, authData: action.data, loading: false, errors: null };
//     case actionType.LOGOUT:
//       localStorage.clear();

//       return { ...state, authData: null, loading: false, errors: null };
//     default:
//       return state;
//   }
// };

// export default authReducer;
