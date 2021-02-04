import React from 'react';
import { FC } from 'react';

export const FileUpload: FC<{
  name: string;
  onChange?: (value: FileList) => void;
}> = (props) => {
  return (
    <input
      type="file"
      name={props.name}
      onChange={(e) => props.onChange?.(e.target.files)}
    />
  );
};
