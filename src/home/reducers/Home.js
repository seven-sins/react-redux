/**
 * Created by seven sins on 1/7/2017.
 */
const initialState = {

};
const Home = (state = initialState, action = null) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state
            };
        default:
            return {
                ...state
            }
    }
};
export default Home;
