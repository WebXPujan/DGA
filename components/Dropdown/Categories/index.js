const CategoriesDropdown = () => {
    const lists = [
        {
            name:'Art & Design',
            menu:[
                {
                    name:'All Art & Design',
                    menu:[
                        {
                            name:'Designing with Canvas | Crash Course',
                            image:'https://digitalgurkha.com/wp-content/uploads/2022/02/Thumbnail-52x40.jpeg',
                            oldPrice:'',
                            newPrice: 'Free'
                        },
                        {
                            name:'Logo Design Essentials | Explained with real-time project',
                            image:'https://digitalgurkha.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-16-at-5.19.54-PM-52x40.jpeg',
                            oldPrice:'',
                            newPrice: 'Free'
                        },
                        {
                            name:'Graphic Design Masterclass | Learn to Design from Start',
                            image:'https://digitalgurkha.com/wp-content/uploads/2021/11/Suneel-Bohara-graphic-design-52x40.jpg',
                            oldPrice:'',
                            newPrice: '1500'
                        },
                        {
                            name:'Graphic Design Masterclass | Learn to Design from StartGuide to Photoshop: From Beginner to Pro',
                            image:'https://digitalgurkha.com/wp-content/uploads/2021/11/Suneel-Bohara-graphic-design-52x40.jpg',
                            oldPrice:'2400',
                            newPrice: '1499'
                        }
                    ]   
                },
                {
                    name:'Graphic Design'
                }
            ]
        },
        {
            name:'Digital Marketing'
        },
        {
            name:'Finance'
        },
        {
            name:'Free'
        },
        {
            name:'Law'
        },
        {
            name:'Personal Development'
        },
        {
            name:'Photography and Video'
        },
        {
            name:'Project Management'
        },
        {
            name:'All Project Management'
        },
        {
            name:'Risk Management'
        },
        {
            name:'Technology'
        },
        {
            name:'Test Preparation'
        },
    ]
 
    return(
        <div className="fixed z-20 inset-0 overflow-auto bg-gray-600">
   
            <div className="p-20 px-56">
                <ul className="font-medium py-10 px-16 cursor-pointer text-white hover:bg-gray-700 relative">
                {
                    lists.map((list,i)=>{
                        return(
                                <li key={i}>
                                    <div className="flex items-center justify-between w-full">{list.name} {list.menu && list?.menu.length > 0 && <span> &gt; </span> }</div>
                                    {/* ---  Sub Menu ---  */}
                                    <div className="text-white text-sm py-10 mb-10">&lt; Back</div>
                                    <ul className="inset-0 overflow-auto bg-gray-700 p-20 px-56">
                                        {list.menu && list.menu.map((li,j) =>{
                                            return(<li key={j}>
                                                
                                                <div  className="flex items-center justify-between w-full hover:bg-gray-600 py-10 px-16">{li.name} {li.menu && li.menu.length > 0 && <span> &gt; </span> }</div>
                                                <div className="text-white text-sm py-10 mb-10">&lt; Back</div>
                                                <ul>
                                                    {li.menu && li.menu.map((lii,k) =>{
                                                    return(<li key={k}>
                                                        
                                                        <div  className="flex items-center justify-between w-full hover:bg-gray-600 py-10 px-16">{lii.name} </div>
                                                    </li>)
                                                    })}
                                                </ul>
                                            
                                            </li>)
                                            }
                                        )}
                                       
                                    
                                    </ul>
                                    {/* /.fixed */}
                                </li>
                            
                        )
                    })
                }
                </ul>
            </div>
            
        </div>
    )
}

export default CategoriesDropdown