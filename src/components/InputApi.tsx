import { Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import ColumnIssues from "./ColumnIssues";

 export interface Issue {
  number: string | number;
  title: string;
  body: string;
}

export default function InputApi() {
  const [inputApi, setInputApi] = useState<string>("");
  const [responseData, setResponseData] = useState<Issue[]>([]);
  const [error, setError] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputApi(event.target.value);
    setError("");
  };
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await fetchData();
  };
  const fetchData = async () => {
    try {
      const response = await axios.get<Issue[]>(inputApi);
      setResponseData(response.data);
      console.log(response.data);
    } catch (error) {
      setError("Error fetching data. Please check the URL and try again.");
    }
  };
  // useEffect(() => {
  //   console.log(fetchData());
  // }, []);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "15vh" }}
        >
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
      <ColumnIssues issues={[...responseData]}/>
    </>
  );
}
