import { Card, Button } from "react-bootstrap";

interface PropsIssue {
  id: number;
  title: string;
  body: string;
}

interface DataIssue {
  issues: PropsIssue[];
  deleteIssue: () => void;
}

export default function Issue({ issues,deleteIssue }: DataIssue) {
 
  const handleDeleteIssue =() => {
        deleteIssue();
  }

  return (
    <Card style={{ backgroundColor: "transparent" }}>
      {issues.map((item) => (
          <Card.Body key={item.id} style={{ border: "black 1px solid" }}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.body}</Card.Text>
          </Card.Body>
      ))}
        <Button variant="danger" onClick={handleDeleteIssue}>Delete issues</Button>
    </Card>
  );
}
