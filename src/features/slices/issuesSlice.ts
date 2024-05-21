import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

interface PropsIssue {
  id: number;
  title: string;
  body: string;
  status: string;
}

interface TasksState {
  issues: PropsIssue[];
}

const initialState: TasksState = {
  issues: [],
};

const issuesSlice = createSlice({
  name: 'gitIssue',
  initialState,
  reducers: {
    setIssues(state, action: PayloadAction<PropsIssue[]>) {
      state.issues = action.payload;
    },
    updateIssueStatus(state, action: PayloadAction<{ id: number; status: string }>) {
      const { id, status } = action.payload;
      const issue = state.issues.find(issue => issue.id === id);
      if (issue) {
        issue.status = status;
      }
    },
  },
});

export const { setIssues, updateIssueStatus } = issuesSlice.actions;
export default issuesSlice.reducer;