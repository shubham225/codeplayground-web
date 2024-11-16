import { Language, ResultStatus, Submission } from ".";

export type SubmitReq = {
  problemId: string;
  code: string;
  language: Language;
};

export type ExecReq = {
  userProblemId: string;
  language: Language;
};

export type SubmitResponse = {
  submissionId: string;
  status: ResultStatus;
  message: string;
  submission: Submission;
};
