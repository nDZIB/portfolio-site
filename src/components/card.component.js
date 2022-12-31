import React from "react";

export class CardComponent extends React.Component{
    render() {
        return (
            <>
                <div className={`flex items-center`}>
                    <div className={`bg-white border-[1px] flex justify-center p-2 rounded-full items-center mr-3`}>
                        <img className={`w-7 h-7 rounded-full bg-white`} src="https://avatars.githubusercontent.com/u/48608377?s=400&u=adeb2b0b65b1880f6052ef1a53f6d3cf8d2f24d2&v=4" alt=""/>
                    </div>
                    <div>
                        <h4 className={`font-bold`}>Go-Groups Ltd</h4>
                        <p className={`text-slate-600`}>Full stack engineer</p>
                    </div>
                    <div className={`text-slate-400 self-end ml-auto`}>
                        2021 - Present
                    </div>
                </div>
            </>
        )
    }
}
