import { CloudUpload, FileText, Upload } from "lucide-react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone() {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log("File Droped :", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className=" w-full border-dashed rounded-xl p-3 border flex justify-center items-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3">
          <Upload className="h-14 w-14" />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      )}
    </div>
  );
}
