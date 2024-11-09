import { BackendResponse, Code, Problem, ProblemSummery, Submission } from "@/types";
import apiClient from "./apiClient";
import { ExecReq, SubmitReq, SubmitResponse } from "@/types/api";
import { url } from "inspector";

export async function fetchProblemsById(problemId: string): Promise<Problem> {
  try {
    const response = await apiClient.get<BackendResponse<Problem>>(
      `/problems/${problemId}`
    );

    return response.data.payload;
  } catch (error) {
    console.error("Failed to fetch problem data:", error);
    throw error;
  }
}

export async function fetchAllProblems(): Promise<ProblemSummery[]> {
  try {
    const response = await apiClient.get<BackendResponse<ProblemSummery[]>>(
      "/problems"
    );

    return response.data.payload;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}

export async function fetchCodeByUserProblemId(userProblemId: string): Promise<Code[]> {
  try {
    const response = await apiClient.get<BackendResponse<Code[]>>(
      `/userProblems/${userProblemId}/code`
    );

    return response.data.payload;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}

export async function fetchAllSubmissions(
  userProblemId: string
): Promise<Submission[]> {
  try {
    const response = await apiClient.get<BackendResponse<Submission[]>>(
      `/userProblems/${userProblemId}/submissions`
    );

    return response.data.payload;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}

// Test Case Submission
export async function submitAndCompileCode(
  submitRequest: SubmitReq
): Promise<SubmitResponse> {
  try {
    const response = await apiClient.post<BackendResponse<SubmitResponse>>(
      `/actions/submit`,
      submitRequest
    );

    return response.data.payload;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}

export async function submitAndExecuteCode(
  execRequest: ExecReq
): Promise<SubmitResponse> {
  try {
    const response = await apiClient.post<BackendResponse<SubmitResponse>>(
      `/actions/execute`,
      execRequest
    );

    return response.data.payload;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}
