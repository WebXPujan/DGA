import Image from "next/image";
import Slider from "react-slick";
const Reviews = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        centerMode:true,
        slidesToShow:1,
        slidesToScroll: 1,
        centerPadding:'10px',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 99999,
                settings: {
                    slidesToShow:4,
                    slidesToScroll: 1,

                    centerPadding:'100px',
                  
                  }
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
                centerPadding:'40px'
              
              }
            },
            {
              breakpoint: 660,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding:'30px'
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },

            
        ]
    };
    const reviews = [
        {
            title:'Detailed Course',
            description: `I loved how the Digital Gurkha team helped me beyond the course. They recommended places where i can get an internship too. `,
            ratings:5,
            reviewer:{
                name: 'Rishab Paudel',
                post: 'Sales Officer, brandogiQ',
                photo: '/static/images/user-rishab.jpg'
            }
        },
        {
            title:'Detailed Course',
            description: `I loved how the Digital Gurkha team helped me beyond the course. They recommended places where i can get an internship too. `,
            ratings:5,
            reviewer:{
                name: 'Rishab Paudel',
                post: 'Sales Officer, brandogiQ',
                photo: '/static/images/user-rishab.jpg'
            }
        },
        {
            title:'Detailed Course',
            description: `I loved how the Digital Gurkha team helped me beyond the course. They recommended places where i can get an internship too. `,
            ratings:5,
            reviewer:{
                name: 'Rishab Paudel',
                post: 'Sales Officer, brandogiQ',
                photo: '/static/images/user-rishab.jpg'
            }
        },
        {
            title:'Detailed Course',
            description: `I loved how the Digital Gurkha team helped me beyond the course. They recommended places where i can get an internship too. `,
            ratings:5,
            reviewer:{
                name: 'Rishab Paudel',
                post: 'Sales Officer, brandogiQ',
                photo: '/static/images/user-rishab.jpg'
            }
        },
        {
            title:'Detailed Course',
            description: `I loved how the Digital Gurkha team helped me beyond the course. They recommended places where i can get an internship too. `,
            ratings:5,
            reviewer:{
                name: 'Rishab Paudel',
                post: 'Sales Officer, brandogiQ',
                photo: '/static/images/user-rishab.jpg'
            }
        },
        {
            title:'Detailed Course',
            description: `I loved how the Digital Gurkha team helped me beyond the course. They recommended places where i can get an internship too. `,
            ratings:5,
            reviewer:{
                name: 'Rishab Paudel',
                post: 'Sales Officer, brandogiQ',
                photo: '/static/images/user-rishab.jpg'
            }
        }
    ]
    return(
        <section className="py-32 sm:py-40 lg:py-56 exlg:py-76 bg-gray-700 text-white">
            <div className="px-16 text-center mb-10 lg:mb-40">
                <h2 className="font-bold text-xl mb-10 lg:text-3xl xl:text-4xl">You will love us too...</h2>
                <p className="text-sm mx-auto lg:w-6/12  xl:w-5/12 mb-24 lg:text-lg">
                    People who have enrolled in our courses have found themselves to be better equipped for professional life. 
                </p>
            </div>
            {/* /.px-16 */}
            <div className="reviews-slider px-8">
                <Slider {...settings} className="lg:flex lg:flex-wrap">
                    {reviews.map((review, i) =>{
                    return(
                        <div className="px-4 lg:px-8 item-wrapper" key={i}>
                            <div className=" item bg-blue-700 rounded-sm p-16 lg:py-32 lg:px-18">
                                <div className="flex items-center mb-8 ">
                                    {[...Array(5)].map((x, i) =>{
                                    
                                        return (
                                            (i+1) <= review.ratings ? <span className="p-6 lg:p-8 relative inline-block" key={i}><img src="/static/images/icon-star.svg" alt="star" className="absolute inset-0 object-contain object-center"/></span> : 
                                            <span className="p-6 lg:p-8 relative inline-block" key={i}> <img src="/static/images/icon-star-gray.svg" alt="star" className="absolute inset-0 object-contain object-center"/></span>)   
                                    })}
                                    
                                </div>
                                <h2 className="text-green-300 font-bold text-lg mb-8">Detailed Course</h2>
                                <div className="text-sm text-white mb-16">
                                   {review.description}
                                </div>

                                <div className="flex items-center">
                                    <div className="p-18 bg-gray-300 rounded-full  overflow-hidden inline-block relative">
                                        <div className="absolute inset-0">
                                            <Image src={review.reviewer.photo} alt={review.reviewer.name} height="40" width="40" layout="intrinsic" objectFit="cover" objectPosition="center" className="absolute rounded-full inset-0 h-full"/>
                                        </div>
                                    </div>
                                    <div className="px-10 leading-tight">
                                        <h4 className="text-xs font-medium">{review.reviewer.name}</h4>
                                        <p className="text-xs">{review.reviewer.post}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    })}
            
                </Slider>
            </div>
        </section>
    )
}
export default Reviews;