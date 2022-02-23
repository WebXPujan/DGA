import Image from "next/image";
import Button from "../../../Button";

const BecomeInstructor = () => {
    return(
        <section className="pt-20 pb-0">
            <div className="container mx-auto px-16">
                <div className="-mx-16 flex flex-wrap lg:flex-row-reverse lg:items-center">
                    <div className="w-full lg:w-7/12  px-32 text-center lg:text-left ">
                        <div className="xl:w-8/12">
                            <h2 className="font-bold  text-xl mb-16 lg:text-3xl exlg:text-4xl">Become an Instructor</h2>
                            <p className="text-sm lg:text-lg mb-32">People who have enrolled in our courses have found themselves to be better equipped for professional life. </p>
                            <Button variant="gradient" size="lg">
                                <span className="flex items-center">
                                    Start Teaching
                                    <img src="/static/images/icon-arrow-right.svg" alt="go" className="ml-10"/>
                                </span>
                            </Button>
                        </div>
                    </div>
                    {/* /.w-full */}
                    <div className="w-6/12 lg:w-3/12 mx-auto lg:ml-auto lg:mr-0 px-16 pt-32">
                        <Image src="/static/images/instructor-banner.png" width="375" height="390" layout="responsive" alt="banner" objectFit="contain" objectPosition="bottom"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BecomeInstructor;