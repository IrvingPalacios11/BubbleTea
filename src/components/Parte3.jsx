import img1 from '../images/bubble1.png'
import img2 from '../images/bubble2.png'
import img3 from '../images/bubble3.png'
import img4 from '../images/bubble4.png'
import img5 from '../images/bubble7.png'
import img6 from '../images/bubble6.png'

const Parte3 = () => {
    return (
        <>
            <section id="services" class="flex flex-col items-center font-raleway text-xl w-full py-5 px-6 md:px-0">
        <h1 class="text-center font-bold">Do you want to try our flavors?</h1>
        <div class="flex flex-wrap md:flex-row w-full">
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={img1} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={img2} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={img3} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={img4} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={img5} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={img6} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </section>
        </>
    )
}

export default Parte3;