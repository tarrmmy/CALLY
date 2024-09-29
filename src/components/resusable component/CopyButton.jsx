import React, { useState } from 'react';
import { Button, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyButton = () => {
  const [textToCopy, setTextToCopy] = useState('This is the text to copy');

  const handleCopy = () => {
    message.success('Text copied to clipboard!');
  };

  return (
    <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
      <Button type="primary">Copy</Button>
    </CopyToClipboard>
  );
};

export default CopyButton;
