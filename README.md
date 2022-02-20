# Mini-Package

This Project is created for beginners to create multiple things given below with super ease and full control. Made with Love 💖 By Zuaque.

## Articles

- Sort Array
- Prettify Milliseconds
- Insert CSS Code
- Insert Box Shadows
- Add Border Radius
- Is Prime Number
- Is Odd Number
- Square Root
- Cube Root, any number root
- Round Off
- Loading
- Skeleton Loading User Template
- Custom Loader
- UUID

## Getting Started

```http
  npm  i @zuaque/mini-package
```

or Use CDN

```http
  https://unpkg.com/@zuaque/mini-package@1.0.0/<file>.js
```

## Methods of Usage

In Modular Javascript or React Js, Next Js, etc.

```reactjs
  import {package} from "@zuaque/mini-package";
```

In Non-Modular Javascript or Node JS, etc.

```javascript
var { package } = require("@zuaque/mini-package");
```

Without NPM or With CDN

```http
  https://unpkg.com/@zuaque/mini-package@1.0.0/<file>.js
```

## Documentation

### Sort Array

Sorting the Array in Ascending, Descending Order

Example:

```javascript
var { sortArray } = require("@zuaque/mini-package");
const sampleArray = ["Orange", "Mango", "Apple"];
sortArray(sampleArray, "asc");

// Expected Output: ["Apple", "Mango", "Orange"]
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/index.js"></script>
<!-- Use Function sortArray -->
```

Syntax:

```javascript
sortArray(array, type);
```

**Type** - It can be `asc` `desc` `init-asc` `init-desc`

- `asc` means Ascending Order
- `desc` means Descending Order
- `init-desc` means Ascending Order of Integers
- `init-desc` means Descending Order of Integers

### Prettify Milliseconds

Convert Milliseconds into Human Readable String

Example:

```javascript
var { pretty_ms } = require("@zuaque/mini-package");
const milliseconds = 60000;
pretty_ms(milliseconds);

// Expected Output: 1 Minutes
// For example if milliseconds = 600718718718700;
// Output is 19313 years
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/index.js"></script>
<!-- Use Function pretty_ms -->
```

Syntax:

```javascript
pretty_ms(milliseconds);
```

**Expected Output Value can be in**

- years
- months
- days
- hours
- Minutes
- seconds

_The Output will be given in the nearest Output Value_

### Insert CSS Code

Insert CSS code in `Style` Tag inside of `Head` tag.

Example:

```javascript
  var {insertCss} = require("@zuaque/mini-package/css)
  const code = `
    .border{
        border: 5px solid red;
    }
  `
  insertCss(code);

  // Expected Output: true
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/css.js"></script>
<!-- Use Function insertCss -->
```

Syntax:

```javascript
insertCss(code);
```

### Box Shadow

Add Box Shadow with Super ease without any prerequisite.

```javascript
  var {boxShadow} = require("@zuaque/mini-package/css)
  boxShadow("medium", "gray", "box");

  // Expected Output: true
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/css.js"></script>
<!-- Use Function boxShadow -->
```

![Output Image](https://raw.githubusercontent.com/kunduaditya/mini-project/main/box-shadow.png)

Syntax:

```javascript
boxShadow(type, color, className);
```

**Type** - It can be the type of Box Shadow.

- `small`
- `x-small`
- `medium`
- `large`
  **Color** - It can be the color of the Box Shadow.

**className** - Add the class of the element on which you want to add Box Shadow.

### Border Radius

Add Border Radius with Super Ease.

Example:

```javascript
  var {borderRadius} = require("@zuaque/mini-package/css)
  boxShadow("10", "sample");

  // Expected Output: true
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/css.js"></script>
<!-- Use Function borderRadius -->
```

![Expected Output](https://raw.githubusercontent.com/kunduaditya/mini-project/main/border.png)

Syntax:

```javascript
boxShadow(radius, className);
```

**Radius** - Radius of the Border.

**className** - Add the class of the element on which you want to add Border Radius.

### Is Prime Number

Syntax:

```javascript
var { is_prime } = require("@zuaque/mini-package/maths");
is_prime(n);

// Here n is the number and output is true or false
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/maths.js"></script>
<!-- Use Function is_prime -->
```

### Is Even Number

Syntax:

```javascript
var { is_even } = require("@zuaque/mini-package/maths");
is_even(n);

// Here n is the number and output is true or false
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/maths.js"></script>
<!-- Use Function is_even -->
```

### Is Odd Number

Syntax:

```javascript
var { is_odd } = require("@zuaque/mini-package/maths");
is_odd(n);

// Here n is the number and output is true or false
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/maths.js"></script>
<!-- Use Function is_odd -->
```

### Square Root

Syntax:

```javascript
var { sqrt_root } = require("@zuaque/mini-package/maths");
sqrt_root(n);

// Here n is the number and output is the number
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/maths.js"></script>
<!-- Use Function sqrt_root -->
```

### Any Root

Syntax:

```javascript
var { any_root } = require("@zuaque/mini-package/maths");
sqrt_root(n, root);

// Here n is the number, root can be square as 2, cube as 3, ... and output is the number
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/maths.js"></script>
<!-- Use Function anyy_root -->
```

### Round Off

Syntax:

```javascript
var { round_off } = require("@zuaque/mini-package/maths");
round_off(n, decimal_digit);

// Here n is the number
// decimal_digit is the digit till you want to round off.
// Output is Rounded off Number
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/maths.js"></script>
<!-- Use Function round_off -->
```

### Loading

Syntax:

```javascript
var { loading } = require("@zuaque/mini-package/loading");
loading(type);
```

or

```html
<script
  script="https://unpkg.com/@zuaque/mini-package@1.0.0/loading.js"
></script>
<!-- Use Function loading -->
```

**type** - Can be `start` or `end`.

- `start` means start loading
- `stop` means stop loading

### Skeleton Loading User Template

Syntax:

```javascript
var { skeleton_div_user_template } = require("@zuaque/mini-package/loading");
loading(parent_div_id, color, count);
```

or

```html
<script
  script="https://unpkg.com/@zuaque/mini-package@1.0.0/loading.js"
></script>
<!-- Use Function skeleton_div_user_template -->
```

![Expected Output](https://raw.githubusercontent.com/kunduaditya/mini-project/main/showcase.gif)

**parent_div_id** - Means the id in which you want to add it.

**color** - Means the color of the Loader

**count** - Means the number of loaders you want.

### Custom Loader

Syntax:

```javascript
var { customLoader } = require("@zuaque/mini-package/loading");
loading(code, style, count);
```

or

```html
<script
  script="https://unpkg.com/@zuaque/mini-package@1.0.0/loading.js"
></script>
<!-- Use Function customLoader -->
```

**Code** - Your HTML code of the Loader.

**Style** - Your CSS style of the code

**Count** - Number of Loaders you want for the same.

### UUID

It will generate Random Secure Id Tokens.

Syntax:

```javascript
var uuid = require("@zuaque/mini-package/uuid");
uuid();
```

or

```html
<script script="https://unpkg.com/@zuaque/mini-package@1.0.0/uuid.js"></script>
<!-- Use Function uuid -->
```

## Authors

- [@kunduaditya](https://github.com/kunduaditya)
- [Zuaque](https://zuaque.in)
