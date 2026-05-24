import { Fragment, useMemo, useState } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row } from "reactstrap";
import { skillsSection } from "../portfolio";
import SkillIcon from "../components/SkillIcon";

type FilterValue = "all" | string;

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const allSkillGroups = useMemo(
    () => skillsSection?.data.flatMap((section) => section.softwareSkills) ?? [],
    []
  );

  const totalSkills = useMemo(
    () => allSkillGroups.reduce((count, group) => count + group.skills.length, 0),
    [allSkillGroups]
  );

  const filteredGroups = useMemo(
    () =>
      activeFilter === "all"
        ? allSkillGroups
        : allSkillGroups.filter((group) => group.heading === activeFilter),
    [activeFilter, allSkillGroups]
  );

  return (
    skillsSection && (
      <Fade bottom duration={2000}>
        <Container className="section section-lg">
          <div className="text-center">
            <h1 className="h1">{skillsSection.title}</h1>
            <p className="lead">{skillsSection.subTitle.toUpperCase()}</p>
          </div>

          <div className="skills-filter-bar d-flex flex-wrap justify-content-center gap-2 my-4">
            <button
              type="button"
              className={`skills-filter-pill ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
              aria-pressed={activeFilter === "all"}
            >
              All
              <span className="skills-filter-count">{totalSkills}</span>
            </button>
            {allSkillGroups.map(({ heading, skills }) => (
              <button
                key={heading}
                type="button"
                className={`skills-filter-pill ${activeFilter === heading ? "active" : ""}`}
                onClick={() => setActiveFilter(heading)}
                aria-pressed={activeFilter === heading}
              >
                {heading}
                <span className="skills-filter-count">{skills.length}</span>
              </button>
            ))}
          </div>

          {skillsSection.data.map((section, index) => (
            <Row className="my-5" key={index}>
              <Col lg="12">
                {filteredGroups.map(({ heading, skills }, groupIndex) => (
                  <Fragment key={heading}>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h5 className="text-info mb-0">{heading}</h5>
                      <span className="skills-group-count">
                        {skills.length} skill{skills.length === 1 ? "" : "s"}
                      </span>
                    </div>
                    <div className="d-flex flex-wrap my-3 gap-3">
                      {skills.map(({ skillName, iconifyTag }) => (
                        <div className="skill-chip shadow-sm rounded-pill px-3 py-2" key={skillName}>
                          <SkillIcon icon={iconifyTag} />
                          <span className="text-nowrap">{skillName}</span>
                        </div>
                      ))}
                    </div>
                    {groupIndex < filteredGroups.length - 1 && <hr className="skills-divider" />}
                  </Fragment>
                ))}
              </Col>
            </Row>
          ))}
        </Container>
      </Fade>
    )
  );
};

export default Skills;
