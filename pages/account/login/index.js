import Image from "next/image"
import Link from "next/link"
import Button from "../../../components/Button"
import Input from "../../../components/Input"


export default function Login(){
    return(
    
        <div className="px-16 py-24 lg:px-32 lg:py-32 exlg:py-112 w-full mx-auto">
            <div className="">
                <Link href="/" className=""><a className="block text-center mb-32 exlg:mb-56"> <Image src={'/static/images/logo-footer.svg'} height="40" width="120" layout="intrinsic" alt="Logo"/> </a></Link>
                <h2 className="text-center font-bold text-lg uppercase">Sign In</h2>
                <div className="w-full exlg:w-6/12 mx-auto">
                    <p className=" text-center text-gray-500 mb-32">Enter your login credentials to continue with your account.</p>

                    <form method="" className="c-form mb-32" onSubmit={()=>alert('Hello')}>
                        <div className="form-group mb-16">
                            <Input 
                                type="text" 
                                name="username" 
                                placeHolder="Enter your Email or Username" 
                                label="Username"
                            />
                        </div>
                        {/* /.form-group */}
                        <div className="form-group mb-16">
                            <Input 
                                type="password" 
                                name="password" 
                                placeHolder="Enter your Password" 
                                label={<div className="flex items-center justify-between"><label>Password</label> <Link href='/'><a className="font-normal text-blue-300 hover:text-blue-500">Forgot Password?</a></Link></div>}
                            />
                        </div>
                        {/* /.form-group */}
                        <div className="form-group">
                            <Button type="submit" size="md" className="py-12 lg:px-32" variant="gradient">Submit</Button>
                        </div>
                    </form>
                        <p className="text-gray-400 text-sm">Don&apos;t have an account? <Link href="/"><a className="text-blue-300">Sign up from here</a></Link></p>
                    
                </div>
            </div>
        </div>
      
    )
}

Login.layout = "Layout2"
