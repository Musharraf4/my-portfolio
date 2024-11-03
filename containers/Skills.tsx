import { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import { skillsSection } from "../portfolio";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    skillsSection && (
      <Fade bottom duration={2000}>
        <Container className=" section section-lg">
          <div className="text-center">
            <h1 className="h1">{skillsSection.title}</h1>
            <p className="lead">{skillsSection.subTitle.toUpperCase()}</p>
          </div>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5" key={index}>
                <Col lg="12">
                  {section.softwareSkills.map(({ heading, skills }) => {
                    return (
                      <Fragment key={heading}>
                        <h5 className="text-info">{heading}</h5>
                        <div className="d-flex gap-2 my-3 gap-3">
                          {skills.map(({ skillName, iconifyTag }) => (
                            <div className="shadow-sm rounded-pill p-2" key={skillName}>
                              {/* <Icon icon={iconifyTag} data-inline="false"></Icon> */}
                              <span>{skillName}</span>
                              {/* <UncontrolledTooltip delay={0} placement="bottom" target={skillName}>
                                  {skillName}
                                  </UncontrolledTooltip> */}
                            </div>
                          ))}
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fade>
    )
  );
};

export default Skills;
