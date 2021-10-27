const testData = require('../../data/feeds.json');
const INITIAL_STATE = {
    feeds: testData
}

const FeedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default FeedReducer;