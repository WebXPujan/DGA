import Slider from "react-slick";
import CourseCard from "../../../CourseCard";
import styles from '../../../../styles/modules/home.module.scss';
import Button from "../../../Button";
const ExploreCourses = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
   
        mobileFirst:true,
        responsive: [
            {
                breakpoint: 999999,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 1,
                  
                  }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow:2,
                slidesToScroll: 1,
              
              }
            },
            {
              breakpoint: 660,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
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
    ]
    return(
         <section className={`${styles.exploreCourses} pb-16`}>
             <div className="container mx-auto px-16 relative">
                 <div className="flex flex-wrap -mx-16">
                    <div className="lg:w-6/12 exlg:w-5/12 w-full px-16 mb-18 lg:mb-40 exlg:mb-56">
                        <h2 className="font-bold text-xl mb-10 lg:text-3xl exlg:text-4xl">Explore Our Courses</h2>
                        <p className="text-sm lg:text-normal exlg:text-lg">
                            GitBook helps you publish beautiful docs for your users and centralize your teams&apos; knowledge for advanced collaboration.
                        </p>
                    </div>
                 </div>
                <div className="-mx-16 mb-40 lg:mb-0">
                    <div className="px-16 overflow-hidden">
                        <Slider {...settings} className="explore-courses-slider -mx-8 lg:-mx-12 lg:flex lg:flex-wrap">
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
                                    isListOnMobile={false}
                                />
                            </div>
                            )
                            })}
                    
                        </Slider>
                    </div>
                </div>
                {/* /.-mx-16 */}
                <div className="text-center lg:absolute lg:top-24 lg:right-16">
                    <Button variant="gradient" size="lg">
                        <span className="flex items-center">
                            View All Courses 
                            <img src="/static/images/icon-arrow-right.svg" alt="go" className="ml-10"/>
                        </span>
                    </Button>
                </div>
             </div>
         </section>
    )
}

export default ExploreCourses