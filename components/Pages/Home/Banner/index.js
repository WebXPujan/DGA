import Link from "next/link";
import Button from "../../../Button";
import styles from '../../../../styles/modules/banner.module.scss';
import Image from "next/image";
const HomeBanner = () => {
    const shortcuts = [
        {
            name: 'Stock Market',
            url:'/',
        },
        {
            name: 'IT Courses',
            url:'/'
        },
        {
            name: 'Languages',
            url:'/'
        },
        {
            name:'Digital Marketing',
            url:'/'
        }
    ]
    return(
        <div className={`p-12 pb-40 lg:p-40 lg:pb-76 exlg:pb-64 ${styles.banner}`}>
            <div className="bg-gray-700  pt-56 lg:px-48 lg:pt-80 pb-26 rounded-sm lg:rounded-md relative z-10 overflow-hidden">
                {/* visible-only-on-mobile */}
                <div className="px-12 py-10 lg:hidden">
                    <div className="bg-gray-600 py-10 px-10 w-full rounded-sm flex items-center cursor-pointer hover:bg-gray-500 mb-10">
                        <div><img src="/static/images/icon-search.svg" alt="search"/></div>
                        <div className="text-white font-worksans ml-10 text-sm">What do you want to learn?</div>
                    </div>
                </div>
                {/* visible-only-on-mobile */}
               <div className="mb-16 lg:mb-0 lg:absolute lg:right-0 lg:bottom-0">
                   {/* <img src="/static/images/banner-image--mobile.png" alt="banner" className="w-full lg:hidden"/> */}
                   <div  className="w-full lg:hidden text-right" >
                        <Image src="/static/images/banner-image--mobile.png" alt="banner" width="325" height="250" objectFit="contain" layout="intrinsic"/>
                   </div>
                   <div  className="w-full hidden lg:block text-right" >
                        <Image src="/static/images/banner-image--desktop.png" alt="banner" width="727" height="555" objectFit="contain" layout="intrinsic"/>
                   </div>
                  
               </div>
               <div className="text-white text-center lg:text-left px-12 lg:pt-144 lg:pb-80 lg:w-6/12 xl:w-5/12 relative z-10">
                   <h2 className="font-bold text-2xl lg:text-3xl exlg:text-4xl xl:text-5xl mb-20 leading-tight">Learn Anywhere, Everywhere</h2>
                   <div className="text-sm mb-20 lg:text-base exlg:text-lg xl:text-xl  lg:mb-20 xl:mb-32">
                        GitBook helps you publish beautiful docs for your users and centralize your teams&apos; knowledge for advanced collaboration.
                   </div>
                   <div className="mb-16 lg:mb-40 lg:flex lg:items-center">
                        <Button size="lg" variant="gradient" >Start Learning</Button>

                        <div className="py-16 lg:ml-32">
                            <Link href="/"><span className="uppercase font-semiBold text-base link-gradient-underline">What to Learn?</span></Link>
                        </div>
                   </div>

                   <div className="text-left">
                       <h3 className="text-sm font-base text-gray-400 uppercase mb-10">Shortcuts</h3>

                       <ul className="inline-flex flex-wrap -mx-4">
                           {shortcuts.map((item,i)=>{
                               return <li className="px-4 mb-8" key={i}><Button size="sm">{item.name}</Button></li>
                           })}
                           
                       </ul>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default HomeBanner;