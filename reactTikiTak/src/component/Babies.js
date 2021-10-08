import ProductDisplay from './ProductDisplay';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        babies: state.babies.babies,
    }
}

export default (connect(mapStateToProps)(function Babies(props) {
   

    const { babies } = props
    
        return (
            <ProductDisplay arrCollection={babies}></ProductDisplay>
        );
    }

   
));



