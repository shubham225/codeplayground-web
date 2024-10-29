import { Submission } from ".";

export type SubmissionStatus =
  | "COMPILATION_FAILED"
  | "COMPILATION_SUCCESS"
  | "RUNTIME_ERROR"
  | "TESTCASE_FAILED"
  | "SUCCESS";

export type SubmitResponse = {
  submission: Submission | null;
  status: SubmissionStatus;
  message: string;
};
