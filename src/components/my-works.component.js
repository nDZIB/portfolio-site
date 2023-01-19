import React from "react";
import {Icon} from "@iconify/react";
import {CardComponent} from "./card.component";

export class MyWorksComponent extends React.Component{
    render() {
        return (
            <>
                <div className={`border-[1px] p-7 self-start rounded-2xl w-[100%] lg:w-[38%] text-sm leading-6`}>
                    <h2 className={`flex items-center font-bold text-lg`}><Icon icon="ph:briefcase" /><span className={`ml-2`}>Work Experience</span></h2>
                    <div className={`mt-6 [&>*]:mb-6`}>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </div>
                    <a href="#" className={`mt-8 py-3 text-sm rounded-lg text-slate-600 bg-slate-50 hover:bg-slate-100 p-1 w-[100%] block flex items-center justify-center`}><span className={`mr-1 text-black font-medium`}>Download CV</span> <Icon icon="line-md:downloading-loop" /></a>
                </div>
            </>
        )
    }
}
