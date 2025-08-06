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
  id: "344utvyb-4rhbhfj",
  userProblemId: "",
  urlCode: "two-sum",
  status: "OPEN",
  title: "Two Sum",
  difficulty: "MEDIUM",
  descriptionMd: `
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

#### Example 1:
> **Input:** nums = [2,7,11,15], target = 9
>
> **Output:** [0,1]
>
> **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

#### Example 2:
> **Input:** nums = [3,2,4], target = 6
>
> **Output:** [1,2]

#### Constraints:
 + \`2 <= nums.length <= 104\`
 + \`-109 <= nums[i] <= 109\`
 + \`-109 <= target <= 109\`
`,
  codeSnippets: [
    {
      language: "JAVA",
      code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
    }
}`,
    },
    {
      language: "JAVASCRIPT",
      code: `console.log('Hello World!!!')`,
    },
  ],
  submissions: [],
};

export const initCodeDetails: Code[] = [
  {
    language: "JAVA",
    code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        user has typed this
    }
}`,
  },
];

export const initSubmissionDetails: Submission[] = [
  {
    id: "dummySub",
    userProblemId: "dummy",
    date: "2022-03-04",
    status: "ACCEPTED",
    language: "JAVA",
    runtime: 12345,
    memory: 23456,
  },
];

export const initUserDetails: User = {
  id: "tempId",
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

export const dummyProblemSummery: ProblemSummery[] = [
  {
    id: "344utvyb-4rhbhfj",
    urlCode: "two-sum",
    summery: "",
    status: "OPEN",
    title: "Two Sum",
    difficulty: "MEDIUM",
  },
  {
    id: "344utvyb-4rhbhfj",
    summery: "",
    urlCode: "search-insert-position",
    status: "PENDING",
    title: "Search Insert Position",
    difficulty: "EASY",
  },
  {
    id: "344utvyb-4rhbhfj",
    summery: "",
    urlCode: "four-sum",
    status: "SOLVED",
    title: "Four Sum",
    difficulty: "HARD",
  },
];

export const dummyProblemSubmissions: Submission[] = [
  {
    id: "two-sum",
    userProblemId: "dummyID",
    date: "2020-01-09",
    status: "ACCEPTED",
    language: "JAVA",
    runtime: 13000,
    memory: 125000,
  },
  {
    id: "two-sum",
    userProblemId: "dummyID",
    date: "2022-01-09",
    status: "WRONG_ANSWER",
    language: "JAVA",
    runtime: 219000,
    memory: 2232000,
  },
];
