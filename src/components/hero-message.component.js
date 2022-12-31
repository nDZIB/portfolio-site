import React from "react";
import {Icon} from "@iconify/react";

export class HeroMessageComponent extends React.Component {
    render() {
        return (
            <div className={`w-[60%]`}>
                <h1 className={`mt-16 text-5xl font-bold`}>Serkwi Bruno Ndzi, full-stack web and mobile engineer</h1>

                <div className={`mt-6 text-slate-600 leading-7`}>
                    <p>I'm Bruno, a software designer and entrepreneur based in New York City. I'm the founder of inor8tiv, where we develop technologies that empower regular people to outpace on their own terms</p>

                    <div className="flex text-3xl mt-6 mb-16">
                        <a href="#"><Icon icon="mdi:twitter" /></a>
                        <a href="#" className={`ml-6`}><Icon icon="mdi:github" /></a>
                        <a href="#" className={`ml-6`}><Icon icon="uil:linkedin" /></a>
                    </div>
                </div>
            </div>
        )
    }
}
