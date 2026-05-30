import { useEffect } from 'react';

export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Gamuk Boutique`;
  }, [title]);
};
