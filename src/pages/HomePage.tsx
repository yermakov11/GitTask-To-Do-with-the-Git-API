import { useState } from "react";
import InputApi from "../components/InputApi";
import ColumnIssues from "../components/ColumnIssues";
import { GitTask } from "../api/apiGitTask";
export default function HomePage() {
  const [dataApi, setDataApi] = useState<GitTask[]>([]);
  return (
    <div>
      <InputApi setDataIssue={setDataApi}/>
      <ColumnIssues dataIssue={dataApi}/>
    </div>
  );
}
