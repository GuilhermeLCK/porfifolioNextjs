import Header from "@/Components/Header/Index";
import About from "@/Components/SectionAbout/Index";
import IamMe from "@/Components/SectionIamMe/Index";
import Skills from "@/Components/SectionSkills/Index";
import Project from "@/Components/SectionProject/Index";
import Footer from "@/Components/SectionFooter/Index";

export default function Home() {
  return (
    <>
      <Header></Header>
      <IamMe></IamMe>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
    </>
  );
}
