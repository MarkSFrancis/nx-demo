import React, { useState } from 'react';
import { FileUpload } from '../FileUpload';

export const Form = () => {
  const [convertTo, setConvertTo] = useState('mp3');

  return (
    <form method="post" action="http://localhost:3333/api/convert" encType="multipart/form-data">
      <FileUpload name="media" />
      <input
        name="convertTo"
        value={convertTo}
        onChange={(e) => setConvertTo(e.target.value)}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
};
