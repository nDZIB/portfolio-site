import React from "react";

export class HeroMessageComponent extends React.Component {
    render() {
        return (
            <div className={`w-[65%]`}>
                <h1 className={`mt-16 text-5xl font-bold`}>Serkwi Bruno Ndzi, fullstack web and mobile engineer</h1>

                <p className={`mt-6 text-slate-600 leading-7`}>I'm Bruno, a software designer and entrepreneur based in New Yourk City. I'm the founder of inor8tiv, where we develop technologies that empower regular people to outpace on their own terms</p>
            </div>
        )
    }
}
