import React from 'react';
import { GrGraphQl } from "react-icons/gr";
import { DiAngularSimple, DiJavascript1, DiJava, DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiJqueryLogo, DiMongodb, DiMysql, DiPostgresql, DiFirebase, DiGit, DiJenkins, DiDocker } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiApachekafka, SiSpring } from "react-icons/si";


const Expertise = () => (
    <div className=" expertise" id="skillset">
        <h2 className=" expertise__h2">Skillset</h2>
        <div className="expertise__tech">
        <h3 className="">Frontend</h3>
            <div className="tech_list">
                <div className="dev-icon__container "><DiReact className="react-icons"/><p className=""> React</p></div>
                <div className="dev-icon__container "><DiReact className="react-icons"/><p className=""> Redux</p></div>
                <div className="dev-icon__container "><DiAngularSimple className="react-icons"/><p className="">Angular</p></div>
                <div className="dev-icon__container "><DiJqueryLogo className="react-icons"/><p className=""> JQuery</p></div>


                <div className="dev-icon__container "><DiHtml5 className="react-icons"/><p className=""> HTML5</p></div>
                <div className="dev-icon__container "><DiCss3 className="react-icons"/><p className=""> CSS</p></div>
                <div className="dev-icon__container "><AiOutlineConsoleSql className="react-icons"/><p className=""> SQL</p></div>
            </div>
        <h3 className="">Backend</h3>
            <div className="tech_list">
                <div className="dev-icon__container "><DiJavascript1 className="react-icons"/><p className=""> Javascript</p></div>
                <div className="dev-icon__container "><DiJava className="react-icons"/><p className=""> Java</p></div>
                <div className="dev-icon__container "><DiNodejsSmall className="react-icons"/><p className=""> NodeJS</p></div>
                <div className="dev-icon__container "><SiApachekafka className="react-icons"/><p className=""> Apache Kafka</p></div>
                <div className="dev-icon__container "><SiSpring className="react-icons"/><p className=""> Spring Boot</p></div>
                <div className="dev-icon__container "><p>ExpressJS</p></div>
                <div className="dev-icon__container "><GrGraphQl className="react-icons"/><p className=""> GraphQL</p></div>
            </div>
        <h3 className="">Databases</h3>
            <div className="tech_list">
                <div className="dev-icon__container "><DiMongodb className="react-icons"/><p className=""> MongoDB</p></div>
                <div className="dev-icon__container "><DiMysql className="react-icons"/><p className=""> MySQL</p></div>
                <div className="dev-icon__container "><DiPostgresql className="react-icons"/><p className=""> PostgreSQL</p></div>
                <div className="dev-icon__container "><DiFirebase className="react-icons"/><p className=""> Firebase</p></div>
            </div>
        <h3 className="">DevOps</h3>
            <div className="tech_list">
                <div className="dev-icon__container "><DiGit className="react-icons"/><p className=""> Git</p></div>
                <div className="dev-icon__container "><p>Cloud Foundry</p></div>
                <div className="dev-icon__container "><p>Webpack</p></div>
                <div className="dev-icon__container "><DiJenkins className="react-icons"/><p className=""> Jenkins</p></div>
                <div className="dev-icon__container "><DiDocker className="react-icons"/><p className=""> Docker</p></div>
            </div>
        </div>
    </div>
)

export default Expertise