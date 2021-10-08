import ProductDisplay from './ProductDisplay';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        childhood: state.childhood.childhood,
    }
}

export default (connect(mapStateToProps)(function Childhood(props) {
    const { childhood } = props

    return (
        <ProductDisplay arrCollection={childhood}></ProductDisplay>
    );
}));



