import {
  Code,
  CodeLangDetails,
  Problem,
  ProblemSummery,
  Submission,
  TestExecution,
  User,
} from "@/types";

export const initProblemDetails: Problem = {
  id: "",
  userProblemId: "",
  urlCode: "",
  status: "OPEN",
  title: "",
  difficulty: "EASY",
  descriptionMd: "",
  codeSnippets: [],
  submissions: [],
};

export const initCodeDetails: Code[] = [
  {
    language: "JAVA",
    code: "",
  },
];

export const initSubmissionDetails: Submission[] = [
  {
    id: "",
    userProblemId: "",
    date: new Date(),
    status: "IN_PROGRESS",
    language: "JAVA",
    runtime: 0,
    memory: 0,
  },
];

export const initUserDetails: User = {
  id: "",
  name: "Guest",
  deafultlang: "JAVA",
};

export const initCodeLangDetails: CodeLangDetails = {
  selLanguage: "JAVA",
  codes: [],
};

export const initTestExecution: TestExecution = {
  status: "NO_ACTION",
  message: "",
};