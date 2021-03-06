//Third Party Imports
import React from 'react';

//First Party Imports
import { fileListToList, validateFileList } from './Files';

export function allowDrop(event: React.DragEvent){
  event.preventDefault();
}

export function dropFiles(event: React.DragEvent,
                          errorCallback: (msg: string) => void,
                          allowedExtenstion?: string[]){
  let droppedFiles: File[] = []
  let badExtensions: string[] = []
  event.preventDefault();
  
  if(allowedExtenstion){
    [droppedFiles, badExtensions] = validateFileList(event.dataTransfer.files, allowedExtenstion)
  }
  else{
    droppedFiles = fileListToList(event.dataTransfer.files)
  }

  if(badExtensions.length > 0){
    errorCallback(badExtensions.length <= 1 ? `The file type ${badExtensions[0]} is not allowed to be dropped` : `The file types ${badExtensions} are not allowed to be dropped`)
  }

  return droppedFiles;
}