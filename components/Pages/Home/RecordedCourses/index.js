import Image from "next/image"
import Button from "../../../Button"

const RecordedCourses = () => {
    return(
        <section className="py-40 pb-24 lg:py-76  border-b-1 border-dashed border-gray-200">
            <div className="container mx-auto px-16">
                <div className={` mb-24 lg:mb-48 lg:text-center`}>
                    <h2 className="font-bold text-xl mb-10 lg:text-3xl exlg:text-4xl">Not limited to recorded courses</h2>
                    <p className="text-sm lg:text-normal exlg:text-lg lg:w-4/12 mx-auto">
                        People who have enrolled in our courses have found themselves to be better equipped for professional life. 
                    </p>
                </div>

                <div className="-mx-16 flex flex-wrap">
                    <div className="px-16 w-full lg:w-6/12">
                        <div className="bg-blue-50 p-32 lg:p-10 rounded-sm mb-16 lg:mb-0">
                            <div className="flex flex-wrap lg:flex-nowrap items-center">
                                <div className="w-full lg:w-auto text-center">
                                    <Image src='/static/images/live-course-1.png' width={220} height={195} alt='Live Courses' objectFit="contain" layout="intrinsic"/>
                                </div>
                                {/* /.w-full */}
                                <div className="w-full lg:w-auto lg:px-32 lg:py-16">
                                    <h3 className="font-bold text-xl font-dmsans mb-10">Live Courses</h3>
                                    <p className="text-sm leading-tight lg:leading-normal mb-32">
                                        Over 4,000 courses in topics like business analytics, graphic design, Python, and more.
                                    </p>
                                    <Button variant="gradient" size="md">Browse</Button>
                                </div>
                                {/* /.w-full */}
                            </div>
                            {/* /.flex */}                   
                        </div>
                    </div>
                    <div className="px-16 w-full lg:w-6/12">
                        <div className="bg-blue-50 p-32 lg:p-10 rounded-sm mb-16 lg:mb-0">
                            <div className="flex flex-wrap lg:flex-nowrap items-center">
                                <div className="w-full lg:w-auto text-center">
                                    <Image src='/static/images/live-course-2.png' width={220} height={195} alt='1 on 1 Coaching' objectFit="contain" layout="intrinsic"/>
                                </div>
                                {/* /.w-full */}
                                <div className="w-full  lg:w-auto  lg:px-32 lg:py-16">
                                    <h3 className="font-bold text-xl font-dmsans mb-10">1 on 1 Coaching</h3>
                                    <p className="text-sm leading-tight lg:leading-normal mb-32">
                                        Over 4,000 courses in topics like business analytics, graphic design, Python, and more.
                                    </p>
                                    <Button variant="gradient" size="md">Browse</Button>
                                </div>
                                {/* /.w-full */}
                            </div>
                            {/* /.flex */}                   
                        </div>
                    </div>
                </div>
                {/* /.flex */}
            </div>
        </section>
    )
}

export default RecordedCourses