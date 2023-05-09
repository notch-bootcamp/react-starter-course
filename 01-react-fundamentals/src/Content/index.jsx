import { useState, useCallback, useMemo } from 'react';

import Cell from './Cell';

function Content() {
  const [totalCount, setTotalCount] = useState(0);
  const handleClick = useCallback(() => {
    setTotalCount((oldValue) => oldValue + 1);
  }, []);

  const handleClick2 = useMemo(() => {
    return () => {
      setTotalCount((oldValue) => oldValue + 1);
    };
  }, []);

  const style = useMemo(() => {
    return { color: 'white', textAlign: 'center' };
  }, []);

  console.log('render Content');
  return (
    <div className="content" style={style}>
      <Cell title="A" color="#F3A712" totalCount={'N/A'} onClick={handleClick} />
      <Cell title="B" color="#FF0054" totalCount={'N/A'} onClick={handleClick} />
      <Cell title="C" color="#3772FF" totalCount={'N/A'} onClick={handleClick} />
      <Cell title="D" color="#BAA898" totalCount={'N/A'} onClick={handleClick} />
    </div>
  );
}

export default Content;