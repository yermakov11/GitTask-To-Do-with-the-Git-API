import axios from "axios";

export interface GitTask{
    id: number;
    title: string;
    body: string;
}

export async function getDataGitTask(url_git:string): Promise<GitTask[]>{
    const URL=url_git;
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}