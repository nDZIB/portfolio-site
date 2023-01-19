import React from "react";

export class FooterComponent extends React.Component{
    render() {
        return (
            <footer className={`border-t-2 mt-[10rem] flex flex-wrap justify-between items-end text-sm px-[1rem] md:px-[3rem] lg:px-[5rem] pt-10 pb-12`}>
                <nav className={`flex flex-col gap-2 lg:gap-8 md:flex-row [&>*]:font-semibold`}>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Tools</a>
                </nav>

                <p className={`text-slate-400`}>
                    &copy; inor8tiv. All rights reserved
                </p>
            </footer>
        )
    }
}
