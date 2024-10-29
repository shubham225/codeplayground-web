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
  urlCode: "two-sum",
  status: "open",
  title: "Two Sum",
  difficulty: "medium",
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
      id: "dummyID",
      language: "java",
      code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
    }
}`,
    },
    {
      id: "dummyID2",
      language: "javascript",
      code: `console.log('Hello World!!!')`,
    },
  ],
  languages: ["java", "javascript"],
};

export const initCodeDetails: Code[] = [
  {
    id: "dummyID",
    language: "java",
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
    date: new Date("2022-03-04"),
    status: "accepted",
    language: "java",
    runtime: 12345,
    memory: 23456,
  },
];

export const initUserDetails: User = {
  id: "tempId",
  name: "Guest",
  deafultlang: "java",
};

export const initCodeLangDetails: CodeLangDetails = {
  selLanguage: "java",
  codes: initCodeDetails,
};

export const initTestExecution: TestExecution = {
  status: "NO_ACTION",
  message: "",
};

export const dummyProblemSummery: ProblemSummery[] = [
  {
    id: "344utvyb-4rhbhfj",
    urlCode: "two-sum",
    status: "open",
    title: "Two Sum",
    difficulty: "medium",
  },
  {
    id: "344utvyb-4rhbhfj",
    urlCode: "search-insert-position",
    status: "pending",
    title: "Search Insert Position",
    difficulty: "easy",
  },
  {
    id: "344utvyb-4rhbhfj",
    urlCode: "four-sum",
    status: "solved",
    title: "Four Sum",
    difficulty: "hard",
  },
];

export const dummyProblemSubmissions: Submission[] = [
  {
    id: "two-sum",
    userProblemId: "dummyID",
    date: new Date("2020-01-09"),
    status: "accepted",
    language: "java",
    runtime: 13000,
    memory: 125000,
  },
  {
    id: "two-sum",
    userProblemId: "dummyID",
    date: new Date("2022-01-09"),
    status: "wrong answer",
    language: "java",
    runtime: 219000,
    memory: 2232000,
  },
];
