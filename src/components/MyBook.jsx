import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover.png";
import EndImg from "../assets/last-page.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects.jsx";

import ProjectImg1 from "../assets/projects/cric.png";
import ProjectImg2 from "../assets/projects/ecom.png";
import ProjectImg3 from "../assets/projects/python.png";
import ProjectImg4 from "../assets/projects/window11.png";
import Experience from "./pages/Experince/Experince.jsx";
import Certificate from "./pages/Certificates/Certificate.jsx";

const ProjectData = [
  {
    name: "Cricbuzz unofficial",
    description: "Cricbuzz - a sophisticated Cricket Application!",
    image: ProjectImg1,
    previewLink: "https://github.com/yash777u/cricbuzz-frontend",
  },
  {
    name: "Ecommerce website",
    description: "myCart - Ecommerce Web Application ",
    image: ProjectImg2,
    previewLink: "https://github.com/yash777u/myCart",
  },
];
const ProjectData2 = [
  {
    name: "Insta Automation",
    description: "Python Script to Automate your Instagram",
    image: ProjectImg3,
    previewLink: "https://github.com/yash777u/Python-Automation-Upload-Post",
  },
  {
    name: "Window 11 Clone",
    description: "Javascript, CSS and Html Window 11 Ui Clone",
    image: ProjectImg4,
    previewLink: "https://github.com/yash777u/window-11-clone",
  },
];

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skills />
      </Page>
      <Page number={4}>
        <Experience />
      </Page>
      <Page number={5}>
        <Services />
      </Page>
      <Page number={6}>
        <Certificate />
      </Page>
      <Page number={7}>
        <About />
      </Page>
      <Page number={8}>
        <Projects ProjectData={ProjectData} />
      </Page>
      <Page number={9}>
        <Projects ProjectData={ProjectData2} />
      </Page>
      <Page number={10}>
        <Cover coverImg={EndImg} title="" />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
