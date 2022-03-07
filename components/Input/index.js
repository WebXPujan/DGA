import PropTypes from 'prop-types';
const Input = ({type, name, className, label, labelClassName, action, placeHolderText, error, value}) => {
    return(
        <>
            {label &&  <div className={`${labelClassName}`}>{label}</div>}
            <input type={type} name={name} className={`form-control border-1 border-gray-200 py-10 px-16 rounded-sm w-full focus:outline-none ${className}`} value={value} placeholder={placeHolderText} onChange={action} />
            {error && <div className='text-red text-sm py-2'>{error}</div> }
        </>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(['text','number', 'password']).isRequired,
    name: PropTypes.string.isRequired,
    action: PropTypes.func,
    placeHolderText: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.any,
    labelClassName: PropTypes.string
}

Input.defaultProps = {
    type: 'text',
    labelClassName: 'text-sm text-gray-500 font-medium block mb-4'
}

export default Input;