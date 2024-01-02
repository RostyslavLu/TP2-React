import PropTypes from 'prop-types';

const Button = ({ text, onClick, color }) => {
    return (
        <button className={`btn ${color}`} onClick={onClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;