import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
const ElementAdd = (props) => {
    const location = useLocation();
    return (
        <div className='flex justify-center'>
        {location.pathname === "/products" && (
            <Button text={props.showAdd ? <FiMinusCircle/> : <FiPlusCircle/> }  onClick={props.toggleAdd} 
         />)}
        </div>
    )
}
export default ElementAdd;