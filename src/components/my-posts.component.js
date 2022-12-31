import React from "react";
import {PostSummaryComponent} from "./post-summary.component";

export class MyPostsComponent extends React.Component{
    render() {
        return (
            <>
                <div className={`w-[55%]`}>
                    <PostSummaryComponent />
                    <PostSummaryComponent />
                    <PostSummaryComponent />
                </div>
            </>
        )
    }
}
