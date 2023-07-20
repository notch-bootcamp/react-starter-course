// # Generics


// ---

// SLIDE

// ---


// ## Syntax

function genericFunction<T>(arg: T): T {
  return arg;
};
let _number = genericFunction<number>(1);

class GenericClass<T> {
  arg: T;

  constructor(arg: T) {
    this.arg = arg
  }
};
let _numberObject = new GenericClass<number>(_number);

interface GenericInterface<T> { arg: T };
let _numberObjectAsInterface: GenericInterface<number> = _numberObject;

type GenericType<T> = { arg: T };
let _numberObjectAsType: GenericType<number> = _numberObject;


// ---

// SLIDE

// ---


// ## Generic Constraints

function deepCopyObject<T extends object>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

let _numberObjectCopy = deepCopyObject(_numberObject);
// let _numberObjectCopy: GenericClass<number>

// let _numberCopy = deepCopyObject(_number)
// result: Argument of type 'number' is not assignable to parameter of type 'object'.ts(2345)


// ---

// SLIDE

// ---


// ## How to type a class?

type AnyClass = new (...args: any[]) => any

function createObject<T extends object, CArgs extends unknown[]>(
  _class: new (...args: CArgs) => T,
  _args: CArgs
): T {
  return new _class(..._args);
}

let _numberObject2 = createObject(GenericClass, [1]);
// let _numberObject2: GenericClass<number>


// ---

// SLIDE

// ---


// ## React usage

import * as React from 'react';

interface DropdownProps<T extends string | number> {
  defaultValue?: T;
  options: T[];
  onChange: (value: T) => void;
}

class DropdownCC<T extends string | number = string> extends React.Component<DropdownProps<T>> {
  // implementation
  render() {
    return <></>;
  }
}
function DropdownFC<T extends string | number = string>(props: DropdownProps<T>) {
  // implementation
  return <></>;
}

const Element = ({ opts1: optsStr, opts2: optsNum }: { opts1: string[], opts2: number[] }) => {
  const _onChange1 = React.useCallback((val: string) => console.log(val), []);
  // const _onChange1: (val: string) => void

  const _onChange2 = React.useCallback<DropdownProps<number>['onChange']>(
    (val: number) => console.log(val),
    []
  );
  // const _onChange2: (value: number) => void

  return (
    <>
      <DropdownCC options={optsStr} onChange={_onChange1} />
      <DropdownCC<number> options={optsNum} onChange={_onChange2} />
      <DropdownCC options={optsNum} onChange={_onChange2} defaultValue={1} />
      <DropdownFC options={optsStr} onChange={_onChange1} />
      <DropdownFC<number> options={optsNum} onChange={_onChange2} />
      <DropdownFC options={optsNum} onChange={_onChange2} defaultValue={1} />
    </>
  )
}
