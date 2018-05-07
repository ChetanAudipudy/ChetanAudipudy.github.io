import React from "react";
import Appbar from "../../components/Appbar/Appbar";
import Social from "../../components/Social/Social";
import "./About.css";

const styles = {
  width: "100%"
};
const Contact = () => {
  return (
    <div>
      <Appbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="about-left-container">
              <div className="card img-container">
                <img
                  src="../assets/images/dp.jpg"
                  alt="Ugly Picture of Me"
                  style={styles}
                />
              </div>
              <div className="social-container">
                <Social />
              </div>
            </div>
          </div>
          <div className="col-lg-8 right-col">
            <div className="card about-container">
              <div className="card-body">
                <p>
                  I'm <b> Chetan Audipudy</b>, born on 14th September, 1994 and
                  brought up in the lovely city of Bengaluru, India. I was
                  exposed to tech at a very young age. Growing up in the era of
                  the rise of technology in everyday lives, I couldn't stop (not
                  that I tried to) the urge to explore it. Ever heard of the
                  saying 'Curiosity killed the cat' ? It actually ends with 'but
                  satisfaction brought it back.' Apparently, kid-Chetan lived by
                  these words through and through, without actually knowing it.
                  Don't get me wrong, I'm still the same but wiser (not really),
                  probably a tad bit more careful. <br /> <br />
                  Little did I know, going down the rabbit hole of the tech
                  industry would eventually become my abode. Like most from my
                  generation, the entry point into this field were video games.
                  The glorious days of amazing Single Player, Couch Co-op, no
                  DLCs or Loot Boxes, I spent a good chunk of my childhood
                  indulging in video games. As I gained some insight on how
                  these worked, my curiosity peaked and thus I started tinkering
                  with various kinds of software. Quickly, I learned the
                  limitations of the hardware in my system which was long due
                  for an upgrade. I, then, spent my time researching about how
                  the computer hardware worked. Finally, thanks to the support
                  from my family, I assembled my first computer. This was a
                  major milestone which gave a burst of confidence and made me
                  realize this industry is what I would like to work in, be it
                  software or hardware, I want to be a part of it. Fast-forward
                  a few years, I found myself pursuing my engineering degree in
                  Electronics and Communication.<br />
                  <br />
                  In the mean-time, during my college days my parents bought me,
                  my first Android phone. Following the same life choices as kid
                  Chetan, I dove right in into the new OS. I quickly grew very
                  fond of the customizability Android offered and it's open
                  source project. My new favorite pass-time became messing
                  around with the ROM, the Kernel and the apps of my phone. It
                  became my development phone and my daily driver (I can already
                  hear the screaming from devs). I scoured the internet for
                  tutorials and finally grew very intersted in making apps.
                  Later, I took a course in Java and Android development. This
                  field is very dynamic by nature and there are new avenues
                  popping up unceasingly. Thus, after my engineering, I moved to
                  the United States of America to pursue programming. Currently,
                  I've finished a Full Stack Bootcamp at Northwestern
                  University, Evanston IL and working on various projects.{" "}
                  <br />
                  <br />
                  Tech is not my only life, infact, sports has always been the
                  driving factor, motivation and what makes my day complete. I
                  play Cricket, Chess and Basketball. Sprinkle that with timed
                  practice sessions of solving the Rubicks Cube in the downtime
                  and you've got a complete week of my life. At the moment, I'm
                  averaging 20 seconds on my solves and working hard to improve.{" "}
                  <br />
                  <br />
                  My main focus is on developing software and computer hardware
                  as a hobby.
                  <br />
                  <br />
                  <b>
                    tldr: I love teaching computers how to be computers in their
                    own languages.
                  </b>
                  <br />
                  <br />
                  P.S. Writing the 'About me' section is actually harder than
                  being a developer. It reminds me I dont know who I am and you
                  cant google for an answer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
