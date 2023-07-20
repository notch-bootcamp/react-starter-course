import React, { ReactNode, useState, memo, CSSProperties, useCallback, useMemo, Component, PureComponent } from 'react';

interface Props<T extends ReactNode> {
  title: string;
  color: string;
  totalCount: T;
  onClick: () => void;
}

function Cell<T extends ReactNode>(props: Props<T>) {
  const { title, color, totalCount, onClick } = props;
  const style: CSSProperties = { backgroundColor: color, padding: '5%', height: '10em' };
  
  const [counter, setCounter] = useState<null | { value: number }>(null);
  const handleClick = () => {
    if (!counter) {
      setCounter({ value: 1 });
    } else {
      setCounter({ ...counter, value: counter.value + 1 });
    }
    // const counterWithFallback = counter ?? { value: 0 };
    // setCounter({ ...counterWithFallback, value: counterWithFallback.value + 1 });
    // setCounter((oldValue) => { value: });
    onClick();
  };
  
  console.log('render Cell');
  return (
    <div style={style} onClick={handleClick}>
      <h2>{title}</h2>
      <span>{counter?.value ?? 'Never clicked'} / {totalCount}</span>
    </div>
  );
}

class CellAsClass<T extends ReactNode> extends PureComponent<Props<T>> {

}

type CellAsArrow<T extends ReactNode> = React.FC<Props<T>>;
const CellAsArrow = <T extends ReactNode>(props: Props<T>) => null;

export type MemoCellProps = Props<null>;
export const MemoCell = memo(Cell);

// line below is another file

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
    return { color: 'white', textAlign: 'center' as const };
  }, []);

  console.log('render Content');
  return (
    <div className="content" style={style}>
      <MemoCell title="A" color="#F3A712" totalCount={totalCount} onClick={handleClick} />
      <MemoCell title="B" color="#FF0054" totalCount={'N/A'} onClick={handleClick} />
      <MemoCell title="C" color="#3772FF" totalCount={<span>Some Icon</span>} onClick={handleClick} />
      <MemoCell title="D" color="#BAA898" totalCount={'N/A'} onClick={handleClick} />
    </div>
  );
}

