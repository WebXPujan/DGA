import styles from '../../../../styles/modules/banner.module.scss';
const AccountBanner = ({children}) => {
    return(
        <div className={`p-12 pb-40 lg:p-40 lg:pb-76 exlg:pb-64 ${styles.banner}`}>
            <div className="bg-gray-700  pt-56 lg:px-48 lg:pt-80 pb-26 rounded-sm lg:rounded-md relative z-10 overflow-hidden">
                {children}
            </div>
        </div>
    )
}
export default AccountBanner;