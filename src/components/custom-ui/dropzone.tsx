"use client";

import { FileText, Upload } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
  uploadFiles: File[];
  setUploadFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

export default function Dropzone({ uploadFiles, setUploadFiles }: Props) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      console.log(file);
      reader.readAsArrayBuffer(file);

      setUploadFiles((testcase) => [...testcase, file]);
    });
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
          {uploadFiles.length > 0 ? (
            uploadFiles.map((file) => (
              <div
                key={file.name}
                className="flex flex-col items-center justify-center gap-3"
              >
                <FileText className="h-14 w-14" />
                <p>{file.name}</p>
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
