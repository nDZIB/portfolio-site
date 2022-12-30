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
        <div id="container" className={`w-[62vw] bg-white px-16 pt-8`}>
            <HeaderComponent />
            <HeroMessageComponent />
            <ProjectsGalleryComponent />
            <div className={`flex justify-between`}>
                <MyPostsComponent />
                <MyWorksComponent />
            </div>
            <FooterComponent />
        </div>
    </main>
  );
}

export default App;
