import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { getDataGitTask, GitTask } from "../api/apiGitTask";

interface InputApiProps {
  setDataIssue: React.Dispatch<React.SetStateAction<GitTask[]>>;
}

export default function InputApi({ setDataIssue }: InputApiProps) {
  const [inputApi, setInputApi] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputApi(event.target.value);
    setError("");
  };
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await fetchGitTask();
  };

  const fetchGitTask = async () => {
    try {
      const data = await getDataGitTask(inputApi);
      setDataIssue(data);
      console.log(data);
    } catch (error) {
      setError("Error fetching data. Please check the URL and try again.");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "15vh" }}>
        <Form.Control
          type="email"
          onChange={handleInputChange}
          value={inputApi}
          placeholder="input git api"
          style={{ width: "300px" }}
        />
        <Button type="submit" style={{ margin: "15px" }} onClick={handleSubmit}>
          Load
        </Button>
      </Container>
    </>
  );
}
