import React from "react";

import { java } from "@codemirror/lang-java";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { useTheme } from "next-themes";
import { Braces, IterationCw } from "lucide-react";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CodeLangDetails, Language, Problem } from "@/types";
import { Button } from "../ui/button";
import { getCodeforLanguage, setCodeforLanguage } from "@/lib/utils";

type Props = {
  problem: Problem;
  codeInfo: CodeLangDetails;
  setCodeInfo: React.Dispatch<React.SetStateAction<CodeLangDetails>>;
};

const CodeWindow = ({ problem, codeInfo, setCodeInfo, ...props }: Props) => {
  const { theme } = useTheme();

  const initialCode =
    getCodeforLanguage(codeInfo.codes, codeInfo.selLanguage) ||
    getCodeforLanguage(problem.codeSnippets, codeInfo.selLanguage);

  const [code, setCode] = React.useState<string>(initialCode);
  const [selectedLang, setSelectedLang] = React.useState<Language>(
    codeInfo.selLanguage
  );

  const updateCodeInfoObject = React.useCallback(
    (language: Language, code: string) => {
      let codeInfoNew = codeInfo;
      codeInfoNew.selLanguage = language;
      setCodeforLanguage(codeInfoNew.codes, language, code);
      setCodeInfo(codeInfoNew);
    },
    [problem, code, selectedLang]
  );

  const resetEditor = React.useCallback(() => {
    const code = getCodeforLanguage(problem.codeSnippets, selectedLang);
    setCode(code);
    updateCodeInfoObject(selectedLang, code);
  }, [selectedLang]);

  const onCodeChange = React.useCallback(
    (value: string, viewUpdate: ViewUpdate) => {
      setCode(value);
      updateCodeInfoObject(selectedLang, value);
    },
    [selectedLang]
  );

  const onLangChange = React.useCallback((language: Language) => {
    const code =
      getCodeforLanguage(codeInfo.codes, language) ||
      getCodeforLanguage(problem.codeSnippets, language);

    setSelectedLang(language);
    setCode(code);

    updateCodeInfoObject(language, code);
  }, []);

  return (
    <div className="flex flex-col gap-1 h-full">
      <div className="rounded-t-md flex flex-col dark:bg-[#333333] bg-gray-50">
        <div className="flex gap-1 p-1">
          <Braces className="dark:text-teal-400 text-teal-500 p-1" />
          <h1 className="text-l font-semibold">Code</h1>
        </div>
      </div>
      <div className="flex flex-row justify-between p-0 px-2">
        <Select
          defaultValue={selectedLang}
          value={selectedLang}
          onValueChange={onLangChange}
        >
          <SelectTrigger className="w-auto gap-2 h-8 border-none focus:ring-transparent dark:bg-[#1e1e1e]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="javascript">Javascript</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="ghost" size="icon" onClick={resetEditor}>
          <IterationCw />
        </Button>
      </div>
      <Separator />
      <div className="overflow-auto h-full max-h-fit">
        <CodeMirror
          value={code}
          extensions={[java()]}
          onChange={onCodeChange}
          theme={theme === "light" ? vscodeLight : vscodeDark}
        />
      </div>
    </div>
  );
};

export default CodeWindow;
