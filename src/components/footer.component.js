import React from "react";

export class FooterComponent extends React.Component{
    render() {
        return (
            <footer className={`border-t-2 mt-[10rem] flex justify-between text-sm px-[5rem] pt-10 pb-12`}>
                <nav className={`[&>*]:font-semibold`}>
                    <a href="#">About</a>
                    <a href="#" className={`ml-8`}>Projects</a>
                    <a href="#" className={`ml-8`}>Tools</a>
                </nav>

                <p className={`text-slate-400`}>
                    &copy; inor8tiv. All rights reserved
                </p>
            </footer>
        )
    }
}
