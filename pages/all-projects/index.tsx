import Link from "next/link";
import React from "react";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../../components/ProjectsCard";
import { projects } from "../../portfolio";

const AllProjects = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="text-center">
          <h4 className="display-3 text-info">All Products and Projects</h4>
        </div>
        <Row className="row-grid align-items-center">
          {projects.map((data, i) => {
            return <ProjectsCard key={i} {...data} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default AllProjects;
