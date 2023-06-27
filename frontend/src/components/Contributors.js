import React, { useEffect, useState } from 'react';

const styles = {
  contributor: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
  }
};

const Contributors = () => {
  const owner = 'yactouat';
  const repo = 'SWS_waste-sorter';
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/readme`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Failed to retrieve README: ${response.status} ${response.statusText}`);
        }
      })
      .then(data => {
        const decodedContent = atob(data.content);
        setReadmeContent(decodedContent);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const formatCodeBlocks = content => {
    const codeBlockRegex = /```(\w+)\n([\s\S]*?)\n```/g;
    return content.replace(codeBlockRegex, (match, language, code) => {
      return `<pre><code class="language-${language}">${code}</code></pre>`;
    }).substring(1795,content.length);
  };

  return (
    <div 
      className="text-white text-center text-xl font-bold pb-4 contributors"
      style={styles.contributor}
      dangerouslySetInnerHTML={{ __html: formatCodeBlocks(readmeContent) }} 
    />
  );
};

export default Contributors;
