import styles from '../../styles/modules/button.module.scss'

const Button = ({children, action, className='', size='md', variant}) => {
    let btnStyle, btnVariant, sizeStyle;
    if(size === 'lg'){
        sizeStyle = styles.btn__lg
    }
    switch(size){
        case 'sm':{
            btnStyle = 'text-xxs py-4 px-8 lg:text-xs lg:py-6 lg:px-20 font-semiBold'
            break
        }
        case 'md':{
            btnStyle = 'text-xs py-8 px-18 lg:px-24 lg:text-normal  font-semiBold'
            break
        }
        case 'lg':{
            btnStyle = 'text-base py-10 px-26 lg:text-lg font-semiBold'
            break
        }
        default:{
            btnStyle='text-xs py-12 px-14 lg:py-16 lg:text-lg  font-bold'
        }
    }

    switch(variant){
        case 'gradient':{
            btnVariant = `${styles.gradient} text-white uppercase`
            break
        }
        default:{
            btnVariant = `bg-gray-600 hover:bg-gray-500`
        }
    }
    return(
        <button className={`font-worksans border-none rounded-sm transition-all duration-400 inline-flex justify-center ${btnStyle} ${className} ${btnVariant} c-btn ${sizeStyle}`} onClick={action}>
            {children}
        </button>
    )
}
export default Button;