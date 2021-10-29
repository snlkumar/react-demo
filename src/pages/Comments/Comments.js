import React, {useState , useEffect} from 'react'
import { Button, Image, Form } from "react-bootstrap";
import profilePic from "../../assets/images/profile.jpeg";
import Chat from "../Chat/Chat";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Comments = (props) => {
  // const [commentsState, setCommentsState] = useState(props.comments);
  // debugger
  // useEffect(() => {
  //   setCommentsState(props);
  // }, [props])
  debugger
  return (
    <>
      <div className="comment-box">
        <Image
          className="me-2"
          src={profilePic}
          alt="edit"
          width="40px"
          height="40px"
          roundedCircle
        />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Add a comment…" />
          </Form.Group>
          <Button variant="link" type="submit" className="send-msg">
            <SendOutlinedIcon />
          </Button>
        </Form>
      </div>
      <Chat comments={props.comments}/> 
    </>
  );
};

export default Comments;
