import React from "react";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import check from "../../img/check.png";
import check2 from "../../img/check2.png";
import codingTeam from "../../img/codingTeam.mp4";
import teamChat from "../../img/teamChat.jpg";
import "./Home.scss";

import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

const Home = () => {
  return (
    <div className="home">
      {" "}
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src={check} alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you will pay upfront. Your payment is not
              released until you approve the work.
            </p>
            <div className="title">
              <img src={check} alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src={codingTeam} controls />
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              daniSoft <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src={check2} alt="" />
              Connect to our team with proven business experience
            </div>

            <div className="title">
              <img src={check2} alt="" />
              Get matched with the right solution by a customer success manager
            </div>

            <div className="title">
              <img src={check2} alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Danisoft Business</button>
          </div>
          <div className="item">
            <img src={teamChat} alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
