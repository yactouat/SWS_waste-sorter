import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Styles = {
  [key: string]: React.CSSProperties;
};

const styles: Styles = {
  contributor: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
  },
  contributorsTitle: {
    margin: '10px'
  }
};

const Contributors = () => {
  const {t} = useTranslation();

  const owner: string = 'yactouat';
  const repo: string = 'SWS_waste-sorter';
  const [readmeContent, setReadmeContent] = useState<string>('');

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

  const getOnlyContributorsPart = (content: string) => {
    return content.substr(
      content.indexOf("a big thanks goes to the contributors of this project:") + 54
    );
  };

  return (
    <>
      <h3
        className="text-white"
        style={styles.contributorsTitle}
      >{t("contributors.thanks")}</h3>
      <div
        className="text-white text-center text-xl font-bold pb-4 contributors"
        style={styles.contributor}
        dangerouslySetInnerHTML={{ __html: getOnlyContributorsPart(readmeContent) }}
      />
    </>

  );
};

export default Contributors;
