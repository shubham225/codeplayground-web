export type DifficultyLevel = "EASY" | "MEDIUM" | "HARD" | "";
export type Status = "OPEN" | "PENDING" | "SOLVED" | "";
export type ResultStatus =
  | "IN_PROGRESS"
  | "COMPILED"
  | "COMPILATION_FAILED"
  | "ACCEPTED"
  | "RUNTIME_ERROR"
  | "WRONG_ANSWER"
  | "TIME_LIMIT_EXCEEDED";
export type Language = "JAVA" | "JAVASCRIPT";
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
  title: string;
  urlCode: string;
  status: Status;
  difficulty: DifficultyLevel;
};

export type Code = {
  language: Language;
  code: string;
};

export type Submission = {
  id: string;
  userProblemId: string;
  date: string;
  status: ResultStatus;
  language: Language;
  runtime: number;
  memory: number;
};

export type Problem = {
  id: string;
  userProblemId: string | null;
  urlCode: string;
  title: string;
  descriptionMd: string;
  difficulty: DifficultyLevel;
  status: Status;
  codeSnippets: Code[];
  submissions: Submission[];
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

export type BackendResponse<T> = {
  code: number;
  message: string;
  payload: T;
};

// Interfaces
declare interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<z.infer<typeof loginFormSchema>>;
  name: FieldPath<z.infer<typeof loginFormSchema>>;
  id?: string;
  label: string;
  type?: string;
  placeholder?: string;
}
