import React from "react";

export class ProjectsGalleryComponent extends React.Component {
    render() {
        return (
            <>
                <div className={`flex justify-between mx-[-10rem] [&>*]:h-[312px] [&>*]:w-[280px] [&>*]:rounded-2xl`}>
                    <img alt='project name' src={`https://github.com/ndzib-advent-of-code/big_footer/raw/master/result.png`} />
                    <img alt='project name' src={`https://github.com/ndzib-advent-of-code/big_footer/raw/master/result.png`} />
                    <img alt='project name' src={`https://github.com/ndzib-advent-of-code/big_footer/raw/master/result.png`} />
                    <img alt='project name' src={`https://github.com/ndzib-advent-of-code/big_footer/raw/master/result.png`} />
                    <img alt='project name' src={`https://github.com/ndzib-advent-of-code/big_footer/raw/master/result.png`} />
                </div>
            </>
        )
    }
}
