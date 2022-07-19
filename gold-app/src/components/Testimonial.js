import React from "react";

const Testimonial = () => {
    return (
        <>
            <a href="#" class="flex flex-col items-center bg-[#F1F3FF] rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-violet-100">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg" alt=""/>
            <div class="flex flex-col justify-between p-6 leading-normal">
                <p class="mb-3 font-bold font-sm text-black text-left">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <p class="text-left font-normal font-sm">John Dee 32, Bromo</p>
            </div>
            </a>     
        </>
    );
};

export default Testimonial;
