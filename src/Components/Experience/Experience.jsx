import "./Experience.scss";
import {Row,Col,Container} from "react-bootstrap";
const Experience = () => {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="cardIntern">
              <div className="box">
                <h1 className="title">Where?</h1>
                <h5>C1X INC.</h5>
                <span>
                  A full-stack, premium adtech and martech platform for brands,
                  advertising agencies and e-commerce platform
                </span>
              </div>
            </div>
          </Col>
          <Col>
            <div className="cardIntern">
              <div className="box">
                <h1 className="title">Role</h1>
                <h5>Software Engineer Intern</h5>
                <span>
                  Worked on C1X's proprietary demand-side platform, used by
                  digital advertising buyers.
                </span>
              </div>
            </div>
          </Col>
          <Col>
            <div className="cardIntern">
              <div className="box">
                <h1 className="title">Task</h1>
                <h5>GCP</h5>
                <span>
                  Migrated several containers from AWS to GCP and created
                  firewall for the containers
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experience;
