import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GitTask } from "../api/apiGitTask";
import Issue from "./Issue";

interface ColumnIssuesProps {
  dataIssue: GitTask[];
}

export default function ColumnIssues({ dataIssue }: ColumnIssuesProps) {
  const [deleteDataIssue, setDeleteDataIssue] = useState<GitTask[]>(dataIssue);
  const deleteIssue = () => {
    setDeleteDataIssue([]);
  }; 
  return (
    <Container>
      <Row className="justify-content-around align-items-center">
        <Col sm={4}
          className="d-flex flex-column align-items-center bg-danger bg-opacity-25 p-3 rounded overflow-auto"
          style={{ textAlign:'center',height: "400px",width:'300px'}}
        >
          <h3>Issues</h3>
          <Issue issues={dataIssue} deleteIssue={deleteIssue}/>
        </Col>
        <Col sm={4}
          className="d-flex flex-column align-items-center bg-success bg-opacity-25 p-3 rounded"
          style={{ textAlign:'center',height: "400px",width:'300px'}}
        >
          <h3>In process</h3>
        </Col>
        <Col sm={4}
          className="d-flex flex-column align-items-center bg-primary bg-opacity-25 p-3 rounded"
          style={{ textAlign:'center',height: "400px",width:'300px'}}
        >
          <h3>Done</h3>
        </Col>
      </Row>
    </Container>
  );
}
