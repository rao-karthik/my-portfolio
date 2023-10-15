import { useEffect, useState } from 'react';

const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState<number | undefined>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const header = document.getElementById('header');
      setHeaderHeight(header?.clientHeight);
    }
  }, []);
  return headerHeight;
};

export default useHeaderHeight;
