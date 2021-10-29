import React  from 'react';
import Feed from './Feed/Feed';
import { connect } from "react-redux";
import { requestFeeds } from "../store/actions/FeedActions";
export default class Home extends React.Component {

    render() {
        return(
            <Feed />
        )
    }
}