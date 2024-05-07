import { Container, Row, Col } from "react-bootstrap";
import { Issue } from "./InputApi";

interface ColumnIssuesProps {
  issues: Issue[];
}

export default function ColumnIssues({ issues }: ColumnIssuesProps) {
  return (
    <Container>
      <Row className="justify-content-around align-items-center">
          <Col
            sm={4}
            style={{
              textAlign: "center",
              width: "300px",
              height: "400px",
              backgroundColor: "#f8d7da",
              padding: "20px",
              borderRadius: "8px",
              overflow: "auto",
            }}
          >
            <h3>Issues</h3>
            <ul>
              {issues.map((issue) => (
                <div
                  className="list_issue"
                  style={{
                    listStyle: "none",
                    margin: "15px",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <li key={issue.number}>{issue.title}</li>
                  <li key={issue.number}>{issue.body}</li>
                </div>
              ))}
            </ul>
          </Col>
        <Col
          sm={4}
          style={{
            textAlign: "center",
            width: "300px",
            height: "400px",
            backgroundColor: "#d4edda",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>In process</h3>
        </Col>
        <Col
          sm={4}
          style={{
            textAlign: "center",
            width: "300px",
            height: "400px",
            backgroundColor: "#cce5ff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>Done</h3>
        </Col>
      </Row>
    </Container>
  );
}
