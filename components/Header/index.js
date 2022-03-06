import Link from "next/link";
import styles from '../../styles/modules/header.module.scss';
import Button from "../Button";
import CategoriesDropdown from "../Dropdown/Categories";
import { useRouter } from 'next/router'
const Header = () => {
    const router = useRouter()
   
    return(
        <>
            <div>
                <header className={`p-12 lg:px-48 z-20  absolute top-12 left-12 right-12 lg:top-76 lg:left-48 lg:right-48 ${styles.header}`}>
                    <div className="flex flex-wrap justify-between lg:hidden">
                        <div className="header__category-toggler">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24">
                                <g id="Group_31" data-name="Group 31" transform="translate(-256 -112)">
                                    <circle id="Ellipse_12" data-name="Ellipse 12" cx="2.5" cy="2.5" r="2.5" transform="translate(256 112)" fill="#fff"/>
                                    <circle id="Ellipse_17" data-name="Ellipse 17" cx="2.5" cy="2.5" r="2.5" transform="translate(256 121)" fill="#fff"/>
                                    <circle id="Ellipse_20" data-name="Ellipse 20" cx="2.5" cy="2.5" r="2.5" transform="translate(256 131)" fill="#fff"/>
                                    <circle id="Ellipse_13" data-name="Ellipse 13" cx="2.5" cy="2.5" r="2.5" transform="translate(265 112)" fill="#fff"/>
                                    <circle id="Ellipse_16" data-name="Ellipse 16" cx="2.5" cy="2.5" r="2.5" transform="translate(265 121)" fill="#fff"/>
                                    <circle id="Ellipse_19" data-name="Ellipse 19" cx="2.5" cy="2.5" r="2.5" transform="translate(265 131)" fill="#fff"/>
                                    <circle id="Ellipse_14" data-name="Ellipse 14" cx="2.5" cy="2.5" r="2.5" transform="translate(274 112)" fill="#fff"/>
                                    <circle id="Ellipse_15" data-name="Ellipse 15" cx="2.5" cy="2.5" r="2.5" transform="translate(274 121)" fill="#fff"/>
                                    <circle id="Ellipse_18" data-name="Ellipse 18" cx="2.5" cy="2.5" r="2.5" transform="translate(274 131)" fill="#fff"/>
                                </g>
                            </svg>
                        </div>
                        {/*  */}
                        <div className={styles.header__logo}>
                            <Link href='/'><a><img src='/static/images/logo.svg' alt="Digital Gurkha"/></a></Link>
                        </div>
                        {/*  */}
                        <div className={styles.header__navToggler}>
                            <button className={`${styles.togglerButton} rounded-full cursor-pointer`}>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                            </button>
                        </div>
                    </div>

                    <div className=" flex-wrap justify-between hidden lg:flex">
                        <div className="flex items-center">
                            <div className={styles.header__logo}>
                                <Link href='/'><a><img src='/static/images/logo.svg' alt="Digital Gurkha"/></a></Link>
                            </div>
                            <div className="header__category-toggler flex items-center group cursor-pointer lg:border-l-1 lg:border-gray-200 lg:pl-12 lg:ml-12">
                                <span className="p-12 lg:p-10 relative">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 23 24" className="absolute inset-0 h-full w-full">
                                        <g id="Group_31" data-name="Group 31" transform="translate(-256 -112)">
                                            <circle id="Ellipse_12" data-name="Ellipse 12" cx="2.5" cy="2.5" r="2.5" transform="translate(256 112)" fill="#fff" className="group-hover:fill-green"/>
                                            <circle id="Ellipse_17" data-name="Ellipse 17" cx="2.5" cy="2.5" r="2.5" transform="translate(256 121)" fill="#fff" className="group-hover:fill-green"/>
                                            <circle id="Ellipse_20" data-name="Ellipse 20" cx="2.5" cy="2.5" r="2.5" transform="translate(256 131)" fill="#fff" className="group-hover:fill-green"/>
                                            <circle id="Ellipse_13" data-name="Ellipse 13" cx="2.5" cy="2.5" r="2.5" transform="translate(265 112)" fill="#fff" className="group-hover:fill-green"/>
                                            <circle id="Ellipse_16" data-name="Ellipse 16" cx="2.5" cy="2.5" r="2.5" transform="translate(265 121)" fill="#fff" className="group-hover:fill-green"/>
                                            <circle id="Ellipse_19" data-name="Ellipse 19" cx="2.5" cy="2.5" r="2.5" transform="translate(265 131)" fill="#fff" className="group-hover:fill-green"/>
                                            <circle id="Ellipse_14" data-name="Ellipse 14" cx="2.5" cy="2.5" r="2.5" transform="translate(274 112)" fill="#fff" className="group-hover:fill-green"/>
                                            <circle id="Ellipse_15" data-name="Ellipse 15" cx="2.5" cy="2.5" r="2.5" transform="translate(274 121)" fill="#fff" className="group-hover:fill-green"/>
                                            <circle id="Ellipse_18" data-name="Ellipse 18" cx="2.5" cy="2.5" r="2.5" transform="translate(274 131)" fill="#fff" className="group-hover:fill-green"/>
                                        </g>
                                    </svg>
                                </span>
                                <span className="text-white text-sm pl-10 group-hover:text-green">
                                    All Categories
                                </span>
                            </div>
                        </div>
                        {/* /.flex */}
                        <div className="flex items-center">
                            <div className={`${styles.header__search} mr-16 `}>
                                <div className="relative">
                                    <img src="/static/images/icon-search.svg" alt="search" className="absolute top-8 left-10"/>
                                    <input type="text" className="py-6 px-20 pl-40 rounded-sm bg-gray-600 text-sm outline-none text-white" placeholder="Search"/>
                                </div>
                            </div>
                            <div className={styles.header__navigation}>
                                <ul>
                                    <li>
                                        <Link href="/"><a>Become An Instructor</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Resources</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Support</a></Link>
                                    </li>
                                </ul>

                                <Button variant="gradient" size="sm" action={()=>router.push('/account/login')}>SIGN IN</Button>
                            </div>
                        </div>
                    </div>

                </header>
                <div className="hidden">
                    <CategoriesDropdown/>
                </div>
            </div>
        </>
    )
}

export default Header;