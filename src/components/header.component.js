import * as React from "react";
import {Icon} from "@iconify/react";

export class HeaderComponent extends React.Component {
    render() {
        return (
            <header className={`rounded border-b-2 sticky top-0 bg-inherit border-slate-50 pb-2 flex justify-between items-center`}>
                <a href="#">
                    <img className={`rounded-full h-16 w-16`} src="https://github.com/ndzib-advent-of-code/big_footer/raw/master/result.png" alt=""/>
                </a>
                <nav className={`py-3 px-6 rounded-full text-sm shadow-m flex items-center`}>
                    <a href="#">About</a>
                    <a href="#" className={`ml-8`}>Projects</a>
                    <a href="#" className={`ml-8`}>Tools</a>
                </nav>

                <button className={`shadow-sm hover:shadow-lg p-4 rounded-full`}>
                    <Icon icon="ic:outline-light-mode" />
                </button>
            </header>
        )
    }
}
