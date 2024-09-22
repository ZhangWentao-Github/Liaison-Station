/* eslint-disable @typescript-eslint/no-unused-expressions */
import type React from 'react';

const commitScript = (() => {
  const commit = [
    '',
    '______________  ________________',
    '___  ____/_  / / /__  __/___  _/',
    '__  /_   _  / / /__  /   __  /',
    '_  __/   / /_/ / _  /   __/ /',
    String.raw`/_/      \____/  /_/    /___/`,
    '⚡️ Written by TypeScript, Coding with Love.',
    ' | Website: https://zhang-wen-tao.com',
    ' | Github: https://github.com/ZhangWentao-Github',
    ' | E-Mail: mailbox@zhang-wen-tao.com',
    '',
  ].join('\n');
  console.log(
    '\n %c \u26A1张文涛-联络站  %c https://zhang-wen-tao.com %c BY 张文涛 \n\n',
    'color:#fff;background:#0091e4;padding:5px 0;border-radius:4px 0 0 4px',
    'background:#323842;padding:5px 0',
    'color:#fff;background:#505050;padding:5px 0;border-radius:0 4px 4px 0',
  );
  document.firstChild?.nodeType !== Node.COMMENT_NODE && document.prepend(document.createComment(commit));
})
  .toString()
  .replaceAll('\n', '');

export const CommitPage: React.FC = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(${commitScript})();`,
    }}
  />
);
