import React from "react";
import {Icon} from "@iconify/react";

export class PostSummaryComponent extends React.Component {
    render() {
        return (
            <>
                <a href="#" className={`block hover:bg-stone-50 px-8 mb-4 py-6 rounded-xl`}>
                    <p className="text-sm text-slate-400 pl-3 border-l-2 border-slate-400">December 31 2022</p>
                    <h2 className={`mt-2 font-medium`}>Crafting a design system for a multiplanetary future</h2>
                    <p className={`mt-2 text-sm text-slate-700 leading-6`}>
                        Most companies try to stay ahead of the curve when it comes to visual design,
                        but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system
                    </p>
                    <a className={`mt-2 text-sm flex items-center text-cyan-500`} href="#"><span className={`mr-1`}>Read article</span> <Icon icon="material-symbols:chevron-right" /></a>
                </a>
            </>
        )
    }
}
