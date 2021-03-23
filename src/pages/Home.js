import React from "react";
import Container from "react-bootstrap/Container";
import jannethV from "../Assets/jannethV.jpg";

function Home() {
  return (
    <Container className="home-container">
      <h1>About Me</h1>
      <img src={jannethV} alt="Janneth Verduzco" height={200} width={200} />

      <div className="row">
        <div className="col-md-10">
          <p>
            <b>Hi!</b> My name is Janneth. I was born in Mexico but moved to America
            when I was 9 years of age. I started 4th grade in Texas, San Antonio
            to be specific, and I have been here ever since. In middle school I
            struggled with the language given that I was starting to be part of
            complex conversations with out undestading them completely. I soon
            got over that hurtle becauase I made sure to strictly speak English
            with my group of friends. As the years went by I went from
            elementary school to middle school and then to graduate from high
            school. I attended a comunity college and then university, both
            localy. I graduated from The University of Texas at San Antonio with
            a Biology Degree. I used my degree to focus on clinical trials. Four
            years post-graduation I am a stay home mom to a 11-month-old. Web
            development was never in my radar but after experiencing motherhood
            I wanted a career with much more flexibility as to where I could
            work from and my future seemed much brighter when I picured myself
            choosing web development.
          </p>

          <p>
            I am currently in a web development program learning to design the
            front and back end of a website using HTML, CSS and Javascript,
            hence a full stack course. Although the class is extremly
            challenging and fastpaced, given that it's a bootcamp, it is
            fascinating and as hard as it is really something to look foward to.
          </p>

          <p>
            I plan to devote time, effort and sweat even, to my journey as a web
            developer starting with this program. I look foward to obtaining,
            practicing, practicing and practicing the infomation I am learning
            in this course and hopefully get a great opportunity at a job.
          </p>
        </div>
      </div>
    </Container>
  );
}
export default Home;
