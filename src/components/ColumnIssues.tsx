import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

interface PropsIssue {
  id: number;
  title: string;
  body: string;
}

interface ColumnIssuesProps {
  issues: PropsIssue[];
}

export default function ColumnIssues({ issues }: ColumnIssuesProps) {
  const [deleteIssue, setDeleteIssue] = useState<PropsIssue[]>(issues);
  
  useEffect(() => {
    setDeleteIssue(issues);
  }, [issues]);

  return (
    <Container>
      <Row className="justify-content-around align-items-center">
        <Col
          sm={4}
          className="d-flex flex-column align-items-center bg-danger bg-opacity-25 p-3 rounded overflow-auto"
          style={{ textAlign: "center", height: "400px", width: "300px" }}
        >
          <h3>Issues</h3>
          {deleteIssue.length > 0 && (
            <Card style={{ backgroundColor: "transparent" }}>
              {deleteIssue.map((item) => (
                <Card.Body key={item.id} style={{ border: "black 1px solid" }}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
              ))}
              <Button variant="danger" onClick={()=>setDeleteIssue([])}>Delete all issues</Button>
            </Card>
          )}
        </Col>
        <Col
          sm={4}
          className="d-flex flex-column align-items-center bg-success bg-opacity-25 p-3 rounded"
          style={{ textAlign: "center", height: "400px", width: "300px" }}
        >
          <h3>In process</h3>
        </Col>
        <Col
          sm={4}
          className="d-flex flex-column align-items-center bg-primary bg-opacity-25 p-3 rounded"
          style={{ textAlign: "center", height: "400px", width: "300px" }}
        >
          <h3>Done</h3>
        </Col>
      </Row>
    </Container>
  );
}
