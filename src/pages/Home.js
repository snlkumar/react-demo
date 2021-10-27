import React, { useEffect }  from 'react';
import Feed from './Feed/Feed';
import { useSelector, useDispatch } from "react-redux";
import { requestFeeds } from "../store/actions/FeedActions";
import feedJsonData from "../data/feeds.json"
function Home (){
    const { feedsData, isLoading } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        debugger
        dispatch(requestFeeds(feedJsonData), []);
      });
    return(
        <>
             {isLoading && <div className="loading">Data loading...</div>}
            <div className="App">
                
                <Feed />
            </div>
            
        </>

    )
}
  
export default Home;