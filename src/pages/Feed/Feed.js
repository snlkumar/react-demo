import React from "react";
import "./Feed.css";
import { Button, Image } from "react-bootstrap";
import Post from "../Post/Post";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import profilePic from "../../assets/images/profile.jpeg";
import { connect } from "react-redux";
import { requestFeeds } from "../../store/actions/FeedActions";

class Feed extends React.Component {

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

    return (
      <div className="feed">
        <div className="feed_inputContainer p-3">
          <div className="feed_input">
            <Image className="me-2" src={profilePic} alt="edit" roundedCircle />
            <Button variant="outline-secondary">Secondary</Button>
          </div>

          <div className="feed-toolbar mt-2">
            <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
            <InputOption
              Icon={SubscriptionsIcon}
              title="Video"
              color="#7E7A33E"
              fontSize="12px"
            />
            <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
            <InputOption
              Icon={CalendarViewDayIcon}
              title="Write article"
              color="#7FC15E"
            />
          </div>
        </div>
        <hr />
        {feedsData.map(post =>
          <Post post={post}/>
        )}
      </div>
    );
};
}
const mapStateToProps = state => ({
  feedsData: state.LOCALFEED.feedsData,
  isLoading: state.LOCALFEED.isLoading,
  error: state.LOCALFEED.error,
});
  
const mapDispatchToProps = {
  requestFeeds
};
export default connect(mapStateToProps, mapDispatchToProps)(Feed);