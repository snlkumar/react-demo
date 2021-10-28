import FEED from "../../utils/constants";

const initalState = {
  feedsData: [],
  isLoading: false,
  isError: false,
};

const FeedLocalReducer = (state = initalState, action) => {
  switch (action.type) {
    case FEED.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FEED.LOAD_SUCCESS:
        debugger
      return {
        ...state,
        feedsData: action.feedsData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default FeedLocalReducer;