import React from "react";
import image from '../assets/images/result.png';
import './projects-gallery.component.css';

export class ProjectsGalleryComponent extends React.Component {
    render() {
        return (
            <>
               <div className={`gallery flex justify-between mx-0 lg:mx-[-10rem] [&>*]:h-[180px] [&>*]:w-[224px] [&>*:lg]:h-[480px] [&>*:lg]:w-[512px] [&>*]:rounded-2xl`}>
                    <img alt='project name' src={image} />
                    <img alt='project name' src={image} />
                    <img alt='project name' src={image} />
                    <img alt='project name' src={image} />
                    <img alt='project name' src={image} />
                </div>
            </>
        )
    }
}
