import React from "react";
import { Image, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import InputOption from "../Feed/InputOption";
import profilePic from "../../assets/images/profile.jpeg";
import article from "../../assets/images/article.jpeg";
import article1 from "../../assets/images/avatar1.jpeg";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post = props => {
  return (
    <>
      <div className="feed-shared-update mb-3">
        <div class="feed-shared-header mb-3">
          <div class="feed-shared-actor d-flex align-items-center justify-content-between ">
            <span>
              <Image
                className="me-2"
                src={profilePic}
                alt="edit"
                width="48px"
                height="48px"
                roundedCircle
              />
            </span>
            <div className="feed-shared-actor__meta">
              <h2>{props.post.owner.name}</h2>
              <p>
                {props.post.owner.info} <br></br>{props.post.owner.tag}
              </p>
            </div>
          </div>

          <div class="feed-shared-control-menu">
            <Dropdown>
              <Dropdown.Toggle as={Link} id="dropdown-basic">
                <MoreHorizIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Copy link to post
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Embed this post</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Report this Ad</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="description-wrapper">
          <p>
            {props.post.description}
          </p>
        </div>
        <article className="feed-shared-article ">
          <Image className="me-2" src={article} alt="article image" />
        </article>
        <div class="social-details-social-counts">
          <Link to="#">
            <ThumbUpIcon />
            {props.post.likes}
          </Link>
        </div>
        <hr />
        <div className="feed-shared-social-actions mb-3">
          <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            title="Like"
            color="#b1b1b1"
          />
          <InputOption
            Icon={MessageOutlinedIcon}
            title="Comment"
            color="#b1b1b1"
            fontSize="12px"
          />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="#b1b1b1" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="#b1b1b1" />
        </div>
        <Comments comments={props.post.comments}/>
      </div>
    </>
  );
};

export default Post;
