import React, { useEffect }  from 'react';
import Feed from './Feed/Feed';
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { requestFeeds } from "../store/actions/FeedActions";
import feedJsonData from "../data/feeds.json"
class Home extends React.Component {
    componentDidMount() {
        this.props.requestFeeds();
    };

    render() {
        const { feedsData, isLoading, error } = this.props;
    
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }
    return(
        <ul>
            {feedsData.map(post =>
                <li key={post.id}>{post.description}</li>
            )}
      </ul>
        // <>
        //      {isLoading && <div className="loading">Data loading...</div>}
        //     <div className="App">
                
        //         <Feed />
        //     </div>
            
        // </>

    )
    }
}

// const mapStateToProps = state => ({
//     feedsData: state.feedsData,
//     isLoading: state.isLoading,
//     error: state.error,
//     dummy: "fsfdf"
//   });
function mapStateToProps(state) {
    debugger
    return {
        feedsData: state.LOCALFEED.feedsData,
        isLoading: state.LOCALFEED.isLoading,
        error: state.LOCALFEED.error,
    }
  }

const mapDispatchToProps = {
    requestFeeds
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);