import {combineReducers} from 'redux'
import FeedReducer from './FeedReducer'
import FeedLocalReducer from './FeedLocalReducer'

const RootReducer = combineReducers({
  FEED: FeedReducer,
  LOCALFEED: FeedLocalReducer
})

export default RootReducer
