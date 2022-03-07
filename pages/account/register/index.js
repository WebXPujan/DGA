import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { passwordChecker, passwordHasNumber, passwordHasSymbols, passwordHasUppercaseCheck, passwordLengthCheck } from "../../../utlis/passwordStringChecker"


export default function Register(){
    const [pwd, setPwd] = useState({password:'',passwordHasMinimumLength:false, passwordHasNumber: false, passwordHasSymbol: false, passwordHasUppercaseLetter: false, passwordIsValid:false});
    const handlePasswordChange = (e) => {
        const password = e.target.value 
        const validate = {}
        if(passwordLengthCheck(password, 8)) validate.passwordHasMinimumLength = true; else  validate.passwordHasMinimumLength = false;
        if(passwordHasUppercaseCheck(password)) validate.passwordHasUppercaseLetter = true; else validate.passwordHasUppercaseLetter = false
        if(passwordHasNumber(password)) validate.passwordHasNumber = true; else validate.passwordHasNumber = false;
        if(passwordHasSymbols(password)) validate.passwordHasSymbol = true; else validate.passwordHasSymbol = false;
        if(passwordChecker(password)) validate.passwordIsValid = true; else validate.passwordIsValid = false;
        if(password) validate.password = e.target.value
        setPwd(validate)
    }
    return(
    
        <div className="px-16 py-24 px-32 lg:py-32 exlg:py-112 w-full mx-auto">
            <div className="">
                <Link href="/" className=""><a className="block text-center mb-32 exlg:mb-56"> <Image src={'/static/images/logo-footer.svg'} height="40" width="120" layout="intrinsic" alt="Logo"/> </a></Link>
                <h2 className="text-center font-bold text-lg uppercase">Register</h2>
                <div className="w-full  exlg:w-8/12  xl:w-6/12 mx-auto">
                    <p className=" text-center text-gray-500 mb-32">Create a new Account.</p>

                    <form method="" className="c-form mb-32" onSubmit={()=>alert('Hello')}>
                        <div className="flex flex-wrap -mx-16">
                            <div className="w-full lg:w-6/12 px-16">
                                <div className="form-group mb-16">
                                    <Input 
                                        type="text" 
                                        name="firstname" 
                                        placeHolderText="Enter your First Name" 
                                        label="First Name"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-16">
                                <div className="form-group mb-16">
                                    <Input 
                                        type="text" 
                                        name="lastname" 
                                        placeHolderText="Enter your Last Name" 
                                        label="Last Name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-16">
                            <Input 
                                type="email" 
                                name="email" 
                                placeHolderText="Enter your Email Address" 
                                label="Email Address"
                            />
                        </div>
                        {/* /.form-group */}
                        <div className="form-group mb-16">
                            <Input 
                                type="password" 
                                name="password" 
                                placeHolderText="Enter your Password" 
                                action={handlePasswordChange}
                                label="Password"
                            />
                            <div className="text-xs py-10">
                                <p className={`relative inline-block pr-16 ${pwd.password && pwd.passwordHasMinimumLength?'text-green-400':'text-gray-400'}`}>Password must be greater or equals to 8 characters {pwd.password && pwd.passwordHasMinimumLength && <span className="absolute top-2 right-0"><Image  src={'/static/images/icon-check.svg'} alt='check' height='12' width='14' layout='intrinsic'/></span>}</p><br/>
                                <p className={`relative inline-block pr-16 ${pwd.password && pwd.passwordHasSymbol?'text-green-400':'text-gray-400'}`}>Password must contain symbols {pwd.password && pwd.passwordHasSymbol && <span className="absolute top-2 right-0"><Image  src={'/static/images/icon-check.svg'} alt='check' height='12' width='14' layout='intrinsic'/></span>}</p><br/>
                                <p className={`relative inline-block pr-16 ${pwd.password && pwd.passwordHasUppercaseLetter?'text-green-400':'text-gray-400'}`}>Password must contain Uppercase Letter {pwd.password && pwd.passwordHasUppercaseLetter && <span className="absolute top-2 right-0"><Image  src={'/static/images/icon-check.svg'} alt='check' height='12' width='14' layout='intrinsic'/></span>}</p><br/>
                                <p className={`relative inline-block pr-16 ${pwd.password && pwd.passwordHasNumber?'text-green-400':'text-gray-400'}`}>Password must contain a number {pwd.password && pwd.passwordHasNumber && <span className="absolute top-2 right-0"><Image  src={'/static/images/icon-check.svg'} alt='check' height='12' width='14' layout='intrinsic'/></span>}</p>
                            </div>
                        </div>
                        {/* /.form-group */}
                        <div className="form-group mb-16">
                            <Input 
                                type="password" 
                                name="confirm_password" 
                                placeHolderText="Confirm Password" 
                             
                                label="Confirm Password"
                            />
                        </div>
                        {/* /.form-group */}
                        <div className="form-group">
                            <Button type="submit" size="md" className="py-14 lg:px-32" variant="gradient">Submit</Button>
                        </div>
                    </form>
                        <p className="text-gray-400 text-sm">Already have an account? <Link href="/account/login"><a className="text-blue-300">Sign In</a></Link></p>
                    
                </div>
            </div>
        </div>
      
    )
}

Register.layout = "Layout2"