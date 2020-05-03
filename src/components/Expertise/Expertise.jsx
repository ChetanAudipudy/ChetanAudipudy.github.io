import React from 'react';
import DevIcon from "devicon-react-svg";
import { GrGraphQl } from "react-icons/gr";
import { DiAngularSimple, DiJavascript1, DiJava, DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiJqueryLogo, DiMongodb, DiMysql, DiPostgresql, DiFirebase, DiGit, DiJenkins, DiDocker } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";


const Expertise = () => (
    <div className="wow expertise">
        <h2 className="wow expertise__h2">Skillset</h2>
        <div className="expertise__tech">
            <div className="expertise__tech__lang tech_list">
                <h3 className="wow">Languages</h3>
                <div className="dev-icon__container wow"><DiJavascript1 className="react-icons"/><p className="wow"> Javascript</p></div>
                <div className="dev-icon__container wow"><DiJava className="react-icons"/><p className="wow"> Java</p></div>
                <div className="dev-icon__container wow"><DiHtml5 className="react-icons"/><p className="wow"> HTML5</p></div>
                <div className="dev-icon__container wow"><DiCss3 className="react-icons"/><p className="wow"> CSS</p></div>
                <div className="dev-icon__container wow"><AiOutlineConsoleSql className="react-icons"/><p className="wow"> SQL</p></div>
            </div>
            <div className="expertise__tech__fw tech_list">
                <h3 className="wow">Frameworks</h3>
                <div className="dev-icon__container wow"><DiReact className="react-icons"/><p className="wow"> React</p></div>
                <div className="dev-icon__container wow"><DiReact className="react-icons"/><p className="wow"> Redux</p></div>
                <div className="dev-icon__container wow"><DiNodejsSmall className="react-icons"/><p className="wow"> NodeJS</p></div>
                <div className="dev-icon__container wow"><p>ExpressJS</p></div>
                <div className="dev-icon__container wow"><DiAngularSimple className="react-icons"/><p className="wow">Angular</p></div>
                <div className="dev-icon__container wow"><GrGraphQl className="react-icons"/><p className="wow"> GraphQL</p></div>
                <div className="dev-icon__container wow"><DiJqueryLogo className="react-icons"/><p className="wow"> JQuery</p></div>
            </div>
            <div className="expertise__tech__db tech_list">
                <h3 className="wow">Databases</h3>
                <div className="dev-icon__container wow"><DiMongodb className="react-icons"/><p className="wow"> MongoDB</p></div>
                <div className="dev-icon__container wow"><DiMysql className="react-icons"/><p className="wow"> MySQL</p></div>
                <div className="dev-icon__container wow"><DiPostgresql className="react-icons"/><p className="wow"> PostgreSQL</p></div>
                <div className="dev-icon__container wow"><DiFirebase className="react-icons"/><p className="wow"> Firebase</p></div>
            </div>
            <div className="expertise__tech__do tech_list">
                <h3 className="wow">DevOps</h3>
                <div className="dev-icon__container wow"><DiGit className="react-icons"/><p className="wow"> Git</p></div>
                <div className="dev-icon__container wow"><p>Webpack</p></div>
                <div className="dev-icon__container wow"><DiJenkins className="react-icons"/><p className="wow"> Jenkins</p></div>
                <div className="dev-icon__container wow"><DiDocker className="react-icons"/><p className="wow"> Docker</p></div>
            </div>
        </div>
    </div>
)

export default Expertise