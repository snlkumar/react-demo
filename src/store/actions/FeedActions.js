import FEED from "../../utils/constants";
import feedJsonData from "../../data/feeds.json"

export const requestFeeds = () => async (dispatch) => {
  dispatch({
    type: FEED.LOAD,
  });
  try {
    dispatch({
      type: FEED.LOAD_SUCCESS,
      feedsData: feedJsonData,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: FEED.LOAD_SUCCESS,
      feedsData: [],
      isError: true,
    });
  }
};