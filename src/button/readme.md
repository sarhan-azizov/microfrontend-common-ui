## Button
#### Usage
```js
import { Button } from '@common-ui';
```
```js
<Button onClick={() => {}}>Button</Button>
```

#### Description
Display Button component of application.

#### Properties
Name        | Type               | Required | Default     | Description       
:---------- | :----------------- | :------: | :---------: | :----------------------------
children    | `node`             | -        | null        | Display Button's content
kind        | `string`           | -        | primary     | Setup the Buttons kind
size        | `string`           | -        | small, medium, large       | Setup the Buttons size
type        | `string`           | -        | submit      | Setup the Buttons type
disabled    | `boolean`          | -        | false       | Makes the Button disabled 
active      | `boolean`          | -        | false       | Makes the Button active
rendered    | `boolean`          | -        | true        | Render Button to the DOM
hidden      | `boolean`          | -        | false       | Hide Button in the DOM
className   | `string`           | -        | -           | Allows customize styles of the component
innerRef    | `func`             | -        | undefined   | Get a reference to the DOM element
onClick     | `func`             | Y        | -           | Event occurs after clicked on an element

