import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../features/store";
import { setIssues, updateIssueStatus } from "../features/slices/issuesSlice";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

interface PropsIssue {
  id: number;
  title: string;
  body: string;
  status: string;
}

interface ColumnIssuesProps {
  issues: PropsIssue[];
}

export default function ColumnIssues({issues}: ColumnIssuesProps) {
  const [deleteIssue, setDeleteIssue] = useState<PropsIssue[]>(issues);
  const dispatch = useDispatch<AppDispatch>();
  const storedIssues = useSelector((state: RootState) => state.tasks.issues);

  useEffect(() => {
    setDeleteIssue(issues);
    dispatch(setIssues(issues));
  }, [issues, dispatch]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("text/plain", id.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData("text/plain"));
    dispatch(updateIssueStatus({ id, status }));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const renderIssues = (status: string) => {
    return storedIssues
      .filter(issue => issue.status === status)
      .map(issue => (
        <Card
          key={issue.id}
          draggable
          onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, issue.id)}
          className="m-2"
          style={{ border: "black 1px solid" }}
        >
          <Card.Body>
            <Card.Title>{issue.title}</Card.Title>
            <Card.Text>{issue.body}</Card.Text>
          </Card.Body>
        </Card>
      ));
  };

  return (
    <Container>
      <Row className="justify-content-around align-items-center">
        <Col
          sm={4}
          onDrop={(e: React.DragEvent<HTMLDivElement>)=>handleDrop(e, "todo")}
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
          onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, "in-progress")}
          onDragOver={handleDragOver}
          className="d-flex flex-column align-items-center bg-success bg-opacity-25 p-3 rounded"
          style={{ textAlign: "center", height: "400px", width: "300px" }}
        >
          <h3>In process</h3>
          {renderIssues("in process")}
        </Col>
        <Col
          sm={4}
          onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, "done")}
          onDragOver={handleDragOver}
          className="d-flex flex-column align-items-center bg-primary bg-opacity-25 p-3 rounded"
          style={{ textAlign: "center", height: "400px", width: "300px" }}
        >
          <h3>Done</h3>
          {renderIssues("done")}
        </Col>
      </Row>
    </Container>
  );
}
