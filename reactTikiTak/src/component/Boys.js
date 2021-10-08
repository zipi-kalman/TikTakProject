import ProductDisplay from './ProductDisplay';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        boys: state.boys.boys,
    }
}

export default (connect(mapStateToProps)(function Boys(props) {
    const { boys} = props


    return (
        <ProductDisplay arrCollection={boys}></ProductDisplay>
    );
}));



