"use client"
import Header from "../../components/About/Header";
import Adventure from "../../components/About/Adventure";
import LeftForm from "../../components/About/LeftForm";
import Priorities from "../../components/About/Priorities";
import Expectations from "../../components/About/Expectations";
import Catalogue from "../../components/About/Catalogue";
import Landscapes from "../../components/About/Landscapes";
import Experience from "../../components/About/Experience";

export default function About() {
  return (
    <>
    {/* <LeftForm/> */}
    <Header/>
    <Adventure/>
    <Priorities/>
    <br/><br/><br/>
    <Expectations/>
    <Catalogue/>
    <Landscapes/>
    <Experience/>
    </>
    
  );
}
