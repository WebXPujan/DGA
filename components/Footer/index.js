import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const date = new Date();
    return(
        <footer className="py-32 border-t-1 border-gray-300 border-dashed">
            <div className="container mx-auto px-16">
                <div className="-mx-16 flex flex-wrap justify-between items-center text-center">
                    
                    <div className="w-full exlg:w-4/12 px-16 exlg:flex items-center">
                        <Link href="/">
                            <a className="block mb-16  exlg:mb-0">
                                <Image src="/static/images/logo-footer.svg" alt="logo" width={60} height={45} layout="intrinsic" objectFit="contain"/>
                            </a>
                        </Link>
                        <ul className="text-sm flex flex-wrap justify-center mb-16  exlg:mb-0 exlg:ml-24">
                            <li className="px-10"><Link href="/"><a className="hover:text-orange">Our Story</a></Link></li>
                            <li className="px-10"><Link href="/"><a className="hover:text-orange">Contact Us</a></Link></li>
                            <li className="px-10"><Link href="/"><a className="hover:text-orange">Terms of Use</a></Link></li>
                        </ul>
                    </div>
                    {/* /.w-full */}
                    <div className="w-full exlg:w-4/12 px-16">
                        <ul className=" flex flex-wrap justify-center mb-16 exlg:mb-0">
                            <li  className="px-10"><Link href="/"><a><Image src="/static/images/icon-facebook.svg" alt="facebook" height={35} width={35} layout="intrinsic"/></a></Link></li>
                            <li  className="px-10"><Link href="/"><a><Image src="/static/images/icon-tiktok.svg" alt="tiktok" height={35} width={35} layout="intrinsic"/></a></Link></li>
                            <li  className="px-10"><Link href="/"><a><Image src="/static/images/icon-instagram.svg" alt="instagram" height={35} width={35} layout="intrinsic"/></a></Link></li>
                            <li  className="px-10"><Link href="/"><a><Image src="/static/images/icon-youtube.svg" alt="youtube" height={35} width={35} layout="intrinsic"/></a></Link></li>
                        </ul>
                    </div>
                    {/* /.w-full */}

                    <div className="w-full exlg:w-4/12 px-16">
                        <p className="text-sm exlg:text-right   ">&copy; {date.getFullYear()} Digital Gurkha. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;