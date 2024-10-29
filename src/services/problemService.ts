import { Problem, ProblemSummery, Submission } from "@/types";
import apiClient from "./apiClient";
import { SubmitResponse } from "@/types/api";

export async function fetchProblemsById(problemId: string): Promise<Problem> {
  try {
    const response = await apiClient.get<Problem>(`/problems/${problemId}`);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch problem data:", error);
    throw error;
  }
}

export async function fetchAllProblems(): Promise<ProblemSummery[]> {
  try {
    const response = await apiClient.get<ProblemSummery[]>("/problems");

    return response.data;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}

export async function fetchAllSubmissions(
  problemId: string
): Promise<Submission[]> {
  try {
    const response = await apiClient.get<Submission[]>(
      `/submissions/${problemId}`
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}

// Test Case Submission
export async function submitAndCompileCode(
  problemId: string
): Promise<SubmitResponse> {
  try {
    const response = await apiClient.post<SubmitResponse>(
      `/submissions/compile/${problemId}`
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}

export async function submitAndExecuteCode(
  problemId: string
): Promise<SubmitResponse> {
  try {
    const response = await apiClient.post<SubmitResponse>(
      `/submissions/exec/${problemId}`
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}
