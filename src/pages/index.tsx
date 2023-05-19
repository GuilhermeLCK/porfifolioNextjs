import Header from "@/Components/Header/Index";
import About from "@/Components/SectionAbout/Index";
import IamMe from "@/Components/SectionIamMe/Index";
import Skills from "@/Components/SectionSkills/Index";
import Project from "@/Components/SectionProject/Index";
import Footer from "@/Components/SectionFooter/Index";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Header></Header>
      <div data-aos="fade-donw" data-aos-duration="1000">
        <IamMe></IamMe>

        <About></About>
      </div>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
    </>
  );
}
