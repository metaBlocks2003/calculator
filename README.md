# Calculator App Readme

## Description

This is a simple calculator web application that allows users to perform basic arithmetic operations. The calculator has a user interface with buttons for digits 0 through 9, as well as buttons for addition, subtraction, multiplication, division, and percentage. Users can input values by clicking on the digit buttons or directly typing into the input field. The calculator also features buttons for clearing the input and calculating the result.

## Getting Started

To use the calculator, follow these steps:

1. Open the HTML file in a web browser.
2. Click on the digit buttons to input numbers.
3. Use the operation buttons (+, -, *, /) to perform arithmetic operations.
4. Click on the "=" button to calculate the result.
5. Click on the "C" button to clear the input.
6. The "%" button is available to calculate percentages.

## Code Overview

The JavaScript code defines variables for digit buttons (zero through nine), the equals button, and the input field. Event listeners are set up for each digit button to update the input field when clicked. The calculator also includes functions for basic operations (addition, result calculation, clearing input, and percentage calculation).

## Usage

- Click on the digit buttons to input numbers.
- Use the operation buttons to perform arithmetic operations.
- Click on the "=" button to calculate the result.
- Click on the "C" button to clear the input.
- The "%" button is available to calculate percentages.

## Example

```html
<!-- HTML file -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <input type="text" id="typein">
    <button id="zero" value="0">0</button>
    <!-- ... (buttons for digits 1-9) -->
    <button id="equals" onclick="result()">=</button>
    <!-- ... (other operation buttons) -->

    <script src="calculator.js"></script>
</body>
</html>
```

## License

This calculator application is released under the [MIT License](LICENSE.md).

## Author

metaBlocks2003
