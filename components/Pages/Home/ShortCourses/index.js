import Slider from "react-slick";
import CourseCard from "../../../CourseCard";
import styles from '../../../../styles/modules/home.module.scss';
import { useEffect, useState } from "react";
import useWindowDimensions from "../../../../utlis/windowDimensions";
import Button from "../../../Button";
const ShortCourses = () => {
    const dimensions = useWindowDimensions();
    const [spacing, setSpacing] = useState()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow:3,
        slidesToScroll:1,
        mobileFirst: true,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1,
                  
                  }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow:2,
                  }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                    centerMode: false,
                    
                  }
            },
            // {
            //     breakpoint: 992,
            //     settings: {
            //         slidesToShow:3,
            //         slidesToScroll: 1,
                  
            //       }
            // },
            {
                breakpoint: 767,
                settings: "unslick"
            }
           
        ]
    };

    const courses = [
        {
            image:'/static/images/course-image-1.jpg',
            title:'Flutter for Beginner | Flutter Mastery Course Level One',
            reviews:584,
            ratings:5,
            oldPrice:'',
            newPrice:0,
            url:'/',
            type: 'Free',
            author:{
                image: '/static/images/user-rabin.png.jpg',
                name:'Rabin Acharya',
            },
            button: 'Enroll Now'
        },
        {
            image:'/static/images/course-image-2.jpg',
            title:'BEST – NEPSE Technical Analysis Training',
            reviews:584,
            ratings:5,
            oldPrice:'',
            newPrice:1999,
            url:'/',
            type: 'Free',
            author:{
                image: '/static/images/user-rabin.png.jpg',
                name:'Ashok Kumar Shah',
            },
            button: 'Buy Now'
        },
        {
            image:'/static/images/course-image-3.jpg',
            title:'Using Vision Board to explore Passion and Goals',
            reviews:584,
            ratings:4,
            oldPrice:2999,
            newPrice:1999,
            url:'/',
            type: 'Freemium',
            author:{
                image: '/static/images/user-rabin.png.jpg',
                name:'Vaibhav Nahata',
            },
            button: 'Buy Now'
        },
        {
            image:'/static/images/course-image-4.jpg',
            title:'Social Media Marketing – Beyond Facebook Boosting',
            reviews:584,
            ratings:4,
            oldPrice:2999,
            newPrice:1499,
            url:'/',
            type: 'Premium',
            author:{
                image: '/static/images/user-rabin.png.jpg',
                name:'Bat Shi',
            },
            button: 'Buy Now'
        },
        {
            image:'/static/images/course-image-1.jpg',
            title:'Flutter for Beginner | Flutter Mastery Course Level One',
            reviews:584,
            ratings:5,
            oldPrice:'',
            newPrice:0,
            url:'/',
            type: 'Free',
            author:{
                image: '/static/images/user-rabin.png.jpg',
                name:'Rabin Acharya',
            },
            button: 'Enroll Now'
        },
    ]

    useEffect(()=>{
        if(dimensions.width >= 768){
            const container = document.querySelector('.container')
            if(container){
                const contWidth = container.clientWidth
                const winWidth = dimensions.width
                const spaced = winWidth - contWidth
                setSpacing(spaced/2)
            }
        }
    },[dimensions])
    return(
        <section className={`${styles.shortCourses} pt-40 pb-40 lg:pb-16 px-16`} style={{paddingLeft:spacing+'px'}}>
            <div className="relative z-10">
                <div className="-mx-16 flex flex-wrap md:items-center">
                    <div className="w-full md:w-6/12 lg:w-5/12 exlg:w-4/12 px-16 mb-24 sm:mb-0 pr-56 sm:pr-74">
                        <h2 className="text-white font-bold text-2xl exlg:text-3xl font-dmsans mb-16">
                            FREE Short Courses you can <span className="text-black">COMPLETE TODAY</span>
                        </h2>
                        <p className="text-white md:mb-32">
                            GitBook helps you publish beautiful docs for your users and centralize your teams&apos; knowledge for advanced collaboration.
                        </p>
                        <div className="hidden md:block">
                            <Button  size="lg">
                                <span className="flex items-center text-white">
                                    View All Courses 
                                    <img src="/static/images/icon-arrow-right.svg" alt="go" className="ml-10"/>
                                </span>
                            </Button>
                        </div>
                    </div>
                    {/* /.w-full */}
                    <div className={`w-full md:w-6/12 lg:w-7/12 exlg:w-8/12 px-16 ${styles.sliderWrapper}`}>
                        <div className="-mx-16">
                            <div className="px-16 overflow-hidden">
                                <Slider {...settings} className={`${styles.coursesSlider} courses-slider -mx-8 lg:-mx-12 lg:flex lg:flex-wrap`}>
                                    {courses.map((course, i) =>{
                                    return(
                                    <div className="px-8 lg:px-12 w-full lg:w-4/12 exlg:w-3/12 lg:mb-24" key={i}>
                                        <CourseCard
                                            image={course.image}
                                            title={course.title}
                                            totalReviews={course.reviews} 
                                            ratings={course.ratings} 
                                            oldPrice={course.oldPrice}
                                            newPrice={course.newPrice}
                                            url={course.url}
                                            type={course.type}
                                            author={course.author}
                                            buttonText={course.button}
                                            isListOnMobile={true}
                                        />
                                    </div>
                                    )
                                    })}
                            
                                </Slider>
                            </div>
                        </div>
                    </div>
                    {/* /.w-full */}
                </div>
                {/* /.-mx-16 */}
            </div>
        </section>
    )
}
export default ShortCourses;