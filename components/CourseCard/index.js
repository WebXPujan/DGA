import Image from "next/image";
import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
// import imgLoader from "../../utlis/ImageLoader";

import useWindowDimensions from '../../utlis/windowDimensions';
import Button from "../Button"

  
const CourseCard = ({image,title, author, ratings, oldPrice, newPrice, type, totalReviews, buttonText,isListOnMobile=false}) => {
    const [viewPort, setViewPort] = useState();
    const dimensions = useWindowDimensions()
    const router = useRouter()

    let typeStyle;
    let cardWrapper = 'p-10 lg:p-16 bg-blue-50 rounded-sm';
    if(type.toLowerCase() == 'free'){
        typeStyle="bg-green-400"
    }else if(type.toLowerCase() == 'freemium'){
        typeStyle="bg-blue-300"
    }else if(type.toLowerCase() == 'premium'){
        typeStyle="bg-orange"
    }

    useEffect(()=>{
        setViewPort(dimensions.width)
    },[dimensions])

    if(isListOnMobile && viewPort <= 767){
        return (
            <div className="p-6 rounded-sm bg-blue-50 w-full mb-10">
                <div className="-mx-6 flex flex-wrap items-center">
                    <div className="w-5/12 px-6">
                        <Link href="#">
                            <a className="block rounded-sm overflow-hidden">
                                <Image layout="responsive" src={image} alt={title} width={125} height={80}/>
                            </a>
                        </Link>
                    </div>
                    <div className="w-7/12 px-6">
                        <Link href="/"><a className="text-sm leading-snug block font-semiBold mb-4">{title}</a></Link>
                        <div className="flex items-center text-gray-400 text-xs lg:text-sm mb-4">
                            ({totalReviews}) 
                            <span className="flex items-center ml-4">
                                {[...Array(5)].map((x, i) =>{
                                
                                    return (
                                        (i+1) <= ratings ? <span className="p-6 lg:p-8 relative inline-block" key={i}><img src="/static/images/icon-star.svg" alt="star" className="absolute inset-0 object-contain object-center"/></span> : 
                                        <span className="p-6 lg:p-8 relative inline-block" key={i}> <img src="/static/images/icon-star-gray.svg" alt="star" className="absolute inset-0 object-contain object-center"/></span>)   
                                })}
                                
                            </span>
                        </div>
                        {/* /.flex */}
                        <div className="font-bold font-worksans leading-none">Rs. {newPrice} <span className="block lg:inline-block">{oldPrice && <span className="text-xs text-gray-400 line-through">Rs. {oldPrice}</span>}</span></div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className={`${cardWrapper}`}>
    
                <Link href="/">
                    <a className="block rounded-sm overflow-hidden">
                        {/* <img src={image} alt={title}/> */}
                        <Image layout="responsive" src={image} alt={title} width={125} height={80}/>
                    </a>
                </Link>
                <div className="pt-10">
                    <div className={`${typeStyle} inline-block tracking-wide mb-6 text-white rounded-sm py-2 px-10 uppercase text-xxs font-semiBold`}>{type}</div>
                    <h2 className="text-sm font-semiBold leading-tight mb-10 lg:text-normal exlg:text-lg">{title}</h2>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center" style={{maxWidth:'40%'}}>
                            <div className="inline-block bg-gray-400 p-14 rounded-full relative">
                                {/* <img src={author.image} alt={author.name} className="absolute inset-0 object-cover object-top rounded-full"/> */}
                                <div className="absolute inset-0 rounded-full overflow-hidden">
                                    <Image layout="intrinsic"  src={author.image} alt={author.name} width={70} height={70}/>
                                </div>
                            </div>
                            <div className="pl-10 text-xs lg:text-sm text-gray-400  whitespace-nowrap overflow-hidden text-ellipsis " title={author.name}>{author.name}</div>
                        </div>
                        {/* /.flex */}
                        <div className="flex items-center text-gray-400 text-xs lg:text-sm">
                            ({totalReviews}) 
                            <span className="flex items-center ml-4">
                                {[...Array(5)].map((x, i) =>{
                                
                                    return (
                                        (i+1) <= ratings ? <span className="p-6 lg:p-8 relative inline-block" key={i}><img src="/static/images/icon-star.svg" alt="star" className="absolute inset-0 object-contain object-center"/></span> : 
                                        <span className="p-6 lg:p-8 relative inline-block" key={i}> <img src="/static/images/icon-star-gray.svg" alt="star" className="absolute inset-0 object-contain object-center"/></span>)   
                                })}
                                
                            </span>
                        </div>
                        {/* /.flex */}
                    </div>
                    {/* /.flex */}
                    <div className="flex items-center justify-between">
                        <div className="font-bold font-worksans leading-none">Rs. {newPrice} <span className="block lg:inline-block">{oldPrice && <span className="text-xs text-gray-400 line-through">Rs. {oldPrice}</span>}</span></div>
                        <div>
                            <Button size="sm" variant="gradient" action={()=>router.push(url)}>Enroll Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseCard

// CourseCard.prototype={
//     image:{
    
//     }
// }