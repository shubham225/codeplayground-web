"use client";

import {
  FileArchiveIcon,
  FileIcon,
  FileSpreadsheetIcon,
  FileText,
  FileTextIcon,
  HeadphonesIcon,
  ImageIcon,
  Paperclip,
  Upload,
  VideoIcon,
  XIcon,
} from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Progress } from "../ui/progress";
import { UploadedFiles } from "@/types";
import { FcFile, FcOpenedFolder } from "react-icons/fc";
import { Button } from "../ui/button";
import { cn, formatBytes } from "@/lib/utils";
import { toast } from "sonner";

type Props = {
  uploadFiles: UploadedFiles[];
  setUploadFiles: React.Dispatch<React.SetStateAction<UploadedFiles[]>>;
};

const getFileIcon = (file: File) => {
  const fileType = file.type;
  const fileName = file.name;

  if (
    fileType.includes("pdf") ||
    fileName.endsWith(".pdf") ||
    fileType.includes("word") ||
    fileName.endsWith(".doc") ||
    fileName.endsWith(".docx")
  ) {
    return <FileTextIcon className="opacity-60" />;
  } else if (
    fileType.includes("zip") ||
    fileType.includes("archive") ||
    fileName.endsWith(".zip") ||
    fileName.endsWith(".rar")
  ) {
    return <FileArchiveIcon className="opacity-60" />;
  } else if (
    fileType.includes("excel") ||
    fileName.endsWith(".xls") ||
    fileName.endsWith(".xlsx")
  ) {
    return <FileSpreadsheetIcon className="opacity-60" />;
  } else if (fileType.includes("video/")) {
    return <VideoIcon className="opacity-60" />;
  } else if (fileType.includes("audio/")) {
    return <HeadphonesIcon className="opacity-60" />;
  } else if (fileType.startsWith("image/")) {
    return <ImageIcon className="opacity-60" />;
  }
  return <FileIcon className="opacity-60" />;
};

export default function Dropzone({ uploadFiles, setUploadFiles }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const onDrop = useCallback(async (accpetedFiles: File[]) => {
    const file = accpetedFiles[0];
    setFiles([file]);

    if (!file) return;

    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent - 1);
      }
    };

    xhr.onload = () => {
      const xhrResponse = JSON.parse(xhr.responseText);
      if (xhr.status === 200) {
        setProgress(100);
        setUploaded(true);
        setMessage(
          `✅ File uploaded successfully! [id: ${xhrResponse.payload.id}]`
        );
        setUploadFiles((files) => [...files, xhrResponse.payload]);
      } else {
        setProgress(0);
        setUploaded(false);
        setMessage(`⚠️ Server Error: ${xhrResponse.message}`);
      }
    };
    xhr.onerror = function () {
      setProgress(0);
      setUploaded(false);
      setMessage("❌ Network Error");
    };

    xhr.ontimeout = function () {
      setProgress(0);
      setUploaded(false);
      setMessage("⏰ Request Timed Out");
    };

    xhr.open("POST", "http://localhost:8080/api/v1/files/upload", true);
    xhr.send(formData);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="h-full w-full flex flex-col">
      <div
        {...getRootProps()}
        className="min-h-[80%] border-dashed rounded-xl p-3 border flex justify-center items-center"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-sm">Drop the files here ...</p>
        ) : (
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center gap-2">
              <FcOpenedFolder className="h-12 w-12" />
              <div className="flex flex-col gap-1 items-center">
                <p className="text-sm font-semibold">
                  Drag and drop files to upload
                </p>
                <p className="text-xs font-light">
                  or, click to browser (10MB max)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {files.length > 0 && (
        <div className="space-y-2 my-2">
          {files.map((file) => (
            <div
              key={file.name}
              className="flex flex-col rounded-lg border bg-background"
            >
              <div
                key={file.name}
                className=" flex items-center justify-between gap-2 p-2 pe-3"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex size-10 shrink-0 items-center justify-center ">
                    {getFileIcon(file)}
                  </div>
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <p className="truncate text-[13px] font-medium">
                      {file.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {formatBytes(file.size)}
                    </p>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
                  onClick={() => setFiles([])}
                  aria-label="Remove file"
                >
                  <XIcon className="size-4" aria-hidden="true" />
                </Button>
              </div>

              <Progress
                value={progress}
                className={cn("h-1 rounded-lg text-green-500", {
                  "bg-destructive": progress === 0 && !uploaded,
                })}
              />
            </div>
          ))}
          <div
            className={cn(
              "text-xs italic",
              { "text-destructive": !uploaded },
              { "text-green-500": uploaded }
            )}
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
}
