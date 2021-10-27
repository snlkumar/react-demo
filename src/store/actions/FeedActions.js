import axios from "axios";
import FEED from "../../utils/constants";
import feedJsonData from "../../data/feeds.json"

export const requestFeeds = (data) => async (dispatch) => {
  dispatch({
    type: FEED.LOAD,
  });
  try {
      debugger
    const json = await axios.get("../../data/feeds.json");
    console.log(json);
    dispatch({
      type: FEED.LOAD_SUCCESS,
      feedsData: json.data,
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