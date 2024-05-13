import { Container, Row, Col, Button } from "react-bootstrap";
import { Issue } from "./InputApi";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { moveItem } from "../features/slices/issuesSlice";


interface ColumnIssuesProps {
  issues: Issue[];
}

export default function ColumnIssues({ issues }: ColumnIssuesProps) {
  const [deleteIssue, setDeleteIssue] = useState<Issue[]>(issues);
  const dispatch=useDispatch();
  // const issuesList = useSelector((state) => state.issues);

  const handleDeleteIssue = () => {
    setDeleteIssue([]);
  };

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
          {issues.length > 0 && (
            <ul>
              {issues.map((issue, index) => (
                <div
                  className="list_issue"
                  key={index}
                  style={{
                    listStyle: "none",
                    margin: "15px",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <li key={`title-${index}`} style={{ color: "darkgoldenrod" }}>
                    {issue.title}
                  </li>
                  <li key={`body-${index}`} style={{ color: "black" }}>
                    {issue.body}
                  </li>
                </div>
              ))}
              <Button onClick={handleDeleteIssue}>Delete issues</Button>
            </ul>
          )}
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
