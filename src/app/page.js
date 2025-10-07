import Header from "../components/Header";
import Flight from "../components/Flight";
import Trust from "../components/Trust";
import View from "../components/View";
import Testimonial from "../components/Testimonial";
import Catalogue from "../components/Catalogue";

export default function Home() {
  return (
    <div className=" bg-[#efe8e3] ">
    <Header/>
    <Flight/>
    <Trust/>
    <View/>
    <br/>
    <Testimonial/>
    <br/>
    <Catalogue/>
    </div>
  );
}
