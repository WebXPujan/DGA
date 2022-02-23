import styles from '../../../../styles/modules/home.module.scss';
import Button from '../../../Button';

const SkyrocketSection = () => {
    const lists = [
        {
            title:'Earn Certificates',
            description:'Industry recognized certificate'
        },
        {
            title:'Free & Freemium Courses',
            description:'Maximum Value for You'
        },
        {
            title:'Free & Freemium Courses',
            description:'Maximum Value for You'
        },
        {
            title:'Free & Freemium Courses',
            description:'Maximum Value for You'
        }
    ]
    return(
        <div className={`${styles.skyrocketSection} py-40 lg:mb-40`}>
            <div className="container mx-auto px-16 relative z-10">
                <div className='-mx-16 flex flex-wrap'>
                    <div className="w-full lg:w-6/12 px-16">
                        <div className={`${styles.header} mb-24 lg:mb-48`}>
                            <h2 className="font-bold text-xl mb-10 lg:text-3xl exlg:text-4xl">Skyrocket your <span className="text-green-300">Digital Skills</span></h2>
                            <p className="text-sm lg:text-normal exlg:text-lg">
                                GitBook helps you publish beautiful docs for your users and centralize your teams&apos; knowledge for advanced collaboration.
                            </p>
                        </div>
                        <div className='flex flex-wrap -mx-16 mb-16 lg:mb-24'>
                            {lists.map((item,i)=>{
                                return(
                                    <div className="w-full lg:w-6/12 px-16" key={i}>
                                        <div className="flex items-center mb-16 lg:mb-32">
                                            <div className="p-22 bg-gray-300 inline-block rounded-full"></div>
                                            <div className="px-16 leading-tight">
                                                <h4 className='text-normal lg:text-lg font-bold mb-0'>{item.title}</h4>
                                                <p className='text-sm lg:text-md'>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            
                        </div>
                        <div className='text-center lg:text-left mb-32 lg:mb-0'>
                            <Button size="lg" variant="gradient">Start Learning</Button>
                        </div>
                    </div>
                    {/* /.w-full */}
                    <div className='w-full  lg:w-6/12 px-16'>
                        <img src='/static/images/skyrocket-banner.jpg' alt="skyrocket"/>
                    </div>
                    {/* /.w-full */}
                </div>
            </div>
        </div>
    )
}
export default SkyrocketSection