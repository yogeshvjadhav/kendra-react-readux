import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../reducers/pravachans.reducer';
import Loadable from 'react-loadable';
import Loading from '../components/reusables/loading';

/**Map reducer states to component props */
const mapStateToProps = (state) => {
    return {
        pravachans: state.pravachans
    };
};

const Pravachans = Loadable({
    loader: () => import('../components/pravachans'),
    loading: Loading
});

export default withRouter(connect(mapStateToProps, actions)(Pravachans));