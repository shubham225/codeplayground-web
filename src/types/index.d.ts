export type DifficultyLevel = "easy" | "medium" | "hard";
export type Status = "open" | "pending" | "solved";
export type ResultStatus = "accepted" | "wrong answer" | "time limit exceeded";
export type Language = "java" | "javascript";
export type ExecStatus =
  | "NO_ACTION"
  | "COMPILING"
  | "COMPILATION_FAILED"
  | "RUNNING"
  | "RUNTIME_ERROR"
  | "TESTCASE_FAILED"
  | "SUCCESS";

export type ProblemSummery = {
  id: string;
  urlCode: string;
  title: string;
  difficulty: DifficultyLevel;
  status: Status;
};

export type Code = {
  id: string;
  language: Language;
  code: string;
};

export type Submission = {
  id: string;
  userProblemId: string;
  date: Date;
  status: ResultStatus;
  language: Language;
  runtime: number;
  memory: number;
};

export type Problem = {
  id: string;
  urlCode: string;
  title: string;
  descriptionMd: string;
  difficulty: DifficultyLevel;
  status: Status;
  codeSnippets: Code[];
  languages: Language[];
};

export type Result = {
  id: string;
  time: Date;
  status: ResultStatus;
  language: string;
  runtime: string;
  memory: string;
};

export type User = {
  id: string;
  name: string;
  deafultlang: Language;
};

export type CodeLangDetails = {
  selLanguage: Language;
  codes: Code[];
};

export type TestExecution = {
  status: ExecStatus;
  message: string;
};
