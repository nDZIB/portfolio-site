import './App.css';
import * as React from 'react';
import {HeaderComponent} from "./components/header.component";
import {HeroMessageComponent} from "./components/hero-message.component";
import {ProjectsGalleryComponent} from "./components/projects-gallery.component";
import {MyWorksComponent} from "./components/my-works.component";
import {FooterComponent} from "./components/footer.component";
import {MyPostsComponent} from "./components/my-posts.component";

function App() {
  return (
    <main className={`app min-h-screen flex justify-center bg-slate-50`}>
        <div id="container" className={`w-[98vw] md:w-[62vw] bg-white px-2 md:px-16 pt-4`}>
            <HeaderComponent />
            <HeroMessageComponent />
            <ProjectsGalleryComponent />
            <div className={`flex flex-col-reverse lg:flex-row lg:justify-between mt-[2rem] md:mt-[5rem] leading-8`}>
                <MyPostsComponent />
                <MyWorksComponent />
            </div>
            <FooterComponent />
        </div>
    </main>
  );
}

export default App;
