## Button
#### Usage
```js
import { Button } from 'platform-common-ui';
```
```js
<Button onClick={() => {}}>Button</Button>
```

#### Description
Display Button component of application.

#### Properties
Name        | Type               | Required | Default     | Description       
:---------- | :----------------- | :------: | :---------: | :----------------------------
children    | `node`             | -        | -           | Display Button's content
icon        | `string`           | -        | -           | Add the Icon component to the Button component
kind        | `string`           | -        | primary     | Setup the Buttons kind
size        | `string`           | -        | medium      | Setup the Buttons size
type        | `string`           | -        | submit      | Setup the Buttons type
loading     | `boolean`          | -        | false       | Add the Spinner component to the Button component
disabled    | `boolean`          | -        | false       | Makes the Button disabled 
active      | `boolean`          | -        | false       | Makes the Button active
rendered    | `boolean`          | -        | true        | Render Button to the DOM
hidden      | `boolean`          | -        | false       | Hide Button in the DOM
className   | `string`           | -        | -           | Allows customizing styling of the component
innerRef    | `func`             | -        | -           | Get a reference to the DOM element
onClick     | `func`             | Y        | -           | Event occurs after clicked on an element
