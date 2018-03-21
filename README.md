# React Detectable Overflow

A React component which is able to detect changes in the state that the contents is overflowed.

## Install

```
npm install react-detectable-overflow
```
or
```
yarn add react-detectable-overflow
```

## Props

|prop|required|type|description|default|
|:--|:--|:--|:--|:--|
|value|true|string|||
|tag||string|element type (e.g. `'p'`, `'div'`)|'div'|
|style||object|css style of the element|{<br>width: '100%',<br>textOverflow: 'ellipsis',<br>whiteSpace: 'nowrap',<br>overflow: 'hidden',<br>}|
|onChange||(isOverflowed: boolean) => void|callback function called when its overflowing status is changed|

## Example

```jsx
import * as React from 'react';
import DetectableOverflow from 'react-detectable-overflow';

class SampleComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(isOverflowed) {
    // do something
  }

  render {
    return (
      <DetectableOverflow
        value="This is a sample text."
        onChange={this.handleChange}
        />
    );
  }
}
```

## Caution

Be careful when you change the length of `value` by onChange callback. The following code perhaps causes the infinite loop of changing `isOverflowed` state.

```jsx
// DO NOT WRITE LIKE THIS!
<DetectableOverflow
  value={this.state.value}
  onChange={(isOverflowed) => {
    if (isOverflowed) {
      this.setState({ value: 'short' });
    } else {
      this.setState({ value: 'loooooooooooooooooooooooooooooooooooooong' });
    }
  }}
  />
```

## License

This package is released under the MIT License, see [LICENSE](./LICENSE)