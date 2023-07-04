import React from "react";
import {Icon} from "@iconify/react";
import avatar from '../assets/images/me.jpeg'

export class HeroMessageComponent extends React.Component {
    render() {
        return (
            <div className={`hidden flex items-center flex-col-reverse lg:flex-row lg:justify-between lg:items-start lg:pt-6`}>
                <div className={`w-[98%] md:w-[90%] lg:w-[60%]`}>
                    <h1 className={`mt-5 lg:mt-8 lg:mt-16 text-3xl md:text-6xl font-bold`}>Serkwi Bruno Ndzi, full-stack web and mobile engineer</h1>

                    <div className={`mt-6 text-slate-600 leading-7`}>
                        <p>I'm Bruno, a software designer and entrepreneur based in New York City. I'm the founder of inor8tiv, where we develop technologies that empower regular people to outpace on their own terms</p>

                        <div className="w-fit mx-auto md:w-auto flex text-3xl mt-6 lg:mt-6 mb-2 lg:mb-16">
                            <a href="#"><Icon icon="mdi:twitter" /></a>
                            <a href="#" className={`ml-6`}><Icon icon="mdi:github" /></a>
                            <a href="#" className={`ml-6`}><Icon icon="uil:linkedin" /></a>
                        </div>
                    </div>
                </div>

                <img src={avatar} className={`mt-6 lg:ml-auto rounded-full w-[100px] h-[100px] lg:w-[300px] lg:h-[300px]`} alt=""/>
            </div>
        )
    }
}
