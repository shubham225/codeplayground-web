"use client";

import { FileText, Upload } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Progress } from "../ui/progress";
import { UploadedFiles } from "@/types";

type Props = {
  uploadFiles: UploadedFiles[];
  setUploadFiles: React.Dispatch<React.SetStateAction<UploadedFiles[]>>;
};

export default function Dropzone({ uploadFiles, setUploadFiles }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [uploaded, setUploaded] = useState<boolean>(false);

  const onDrop = useCallback(async (accpetedFiles: File[]) => {
    const file = accpetedFiles[0];
    setFiles([file]);
    if (!file) return;

    console.log("files:", accpetedFiles);
    console.log("file:", file);

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
      if (xhr.status === 200) {
        setProgress(100);
        setUploaded(true);
        console.log("✅ File uploaded successfully!");
      } else {
        setUploaded(false);
        console.log(
          `❌ Upload failed: ${xhr.response?.message || "Unknown error"}`
        );
      }
    };

    xhr.open("POST", "http://localhost:8080/api/v1/files/upload", true);
    xhr.send(formData);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="h-full w-full border-dashed rounded-xl p-3 border flex justify-center items-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className="flex items-center justify-center gap-6">
          {files.length > 0 ? (
            files.map((file) => (
              <div key={file.name} className="flex items-center gap-2 border p-4 rounded-lg border-dotted">
                <FileText className="h-9 w-9" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-light">{file.name}</h1>
                  <div className="flex gap-2 items-center">
                    <Progress value={progress} className="w-full h-4" />
                    <h6 className="text-xs">{progress}%</h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-3">
              <Upload className="h-14 w-14" />
              <p>
                Drag 'n' drop some files here, or click to select files
              </p>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
