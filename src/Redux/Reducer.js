import * as types from "./ActionType";

const initialState = {
    movieListData: [],
    movieDetailsData:[],
    searchmovieData:[]
  
  };

  const Reducers = (state = initialState, action) => {
    switch (action.type) {
      case types.MY_MOVIE_LIST:
        return {
          ...state,
          movieListData: action.payload.results,
          loading: false,
        };
        case types.MY_MOVIE_DETAILS:
            return {
              ...state,
              movieDetailsData: action.payload,
              loading: false,
            };
            case types.MY_MOVIE_SEARCH:
                return {
                  ...state,
                  searchmovieData: action.payload.results,
                  loading: false,
                };
    
      default:
        return state;
    }
  };
  export default Reducers;
  