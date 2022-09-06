import React from 'react'

const HomeSect2 = () => {
    return (
        <div className='h-auto lg:h-screen overflow-hidden' id='section2'>
            <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center">
                <div className="p-6 lg:p-20 w-full lg:w-1/2">
                    <h2 className='text-4xl lg:text-6xl font-semibold'> MVP Web Development </h2>
                    <p className='text-4 mt-10'> When building a web applica    tion, we recommend the MVP development approach. You’ll achieve a faster release, reduced costs, more time for testing, and tangible feedback. The MVP will help you know whether your business idea will work or not, what your users expect, and what functionalities you’ll need to change.

                        A Minimum Viable Product is especially important for startups and medium-sized businesses that need to establish product-market fit quickly, without investing significant money.
                        We want your business to leverage evidence, instead of assumptions. A well-developed MVP won’t be a buggy mess with limited usage and features. It’s a complete and usable software that allows you to test, gain user insights, prove your ideas, and improve development continuously based on real testing and feedback.
                    </p>
                </div>
                <div className="p-5 w-full lg:w-1/2 flex flex-wrap justify-between">
                    <img src="https://colorwhistle.com/wp-content/uploads/2022/01/B2B-Web-development-Agency-India.webp" alt="" className='w-auto h-full' />
                </div>
            </div>


        </div>
    )
}

export default HomeSect2;