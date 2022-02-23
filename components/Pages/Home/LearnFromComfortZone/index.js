import Image from 'next/image';
import styles from '../../../../styles/modules/home.module.scss';
import Button from '../../../Button';
const LearnFromComfortZoneSection = () => {
    return(
        <section className={`${styles.comfortZoneSection} py-40 lg:py-76 relative`}>
            
            <div className="container mx-auto px-16 mb-32 relative z-10">
                <div className='-mx-16 flex flex-wrap justify-center lg:justify-between'>
                    <div className='w-full sm:w-8/12 lg:w-6/12  px-16 text-center lg:text-left'>
                        <h2 className='font-bold text-xl mb-16 lg:text-3xl exlg:text-4xl'>Learn a new digital skill today & get ready to work from your comfort zone</h2>
                        <p className='mb-32'>
                            Over 4,000 courses in topics like business analytics, graphic design, Python, and more.
                        </p>
                        <Button variant="gradient" size="lg">
                            <span className="flex items-center">
                                Start Teaching
                                <img src="/static/images/icon-arrow-right.svg" alt="go" className="ml-10"/>
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='lg:w-6/12 ml-auto lg:absolute inset-0 h-full text-right flex items-center'>
                <Image src="/static/images/image-with-lady-using-laptop.png" alt="Learn From Comfort Zone" width={1000} height={360} layout="intrinsic" objectFit="contain" objectPosition="right"/>
            </div>
        </section>
    )
}
export default LearnFromComfortZoneSection;