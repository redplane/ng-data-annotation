# Online demo
 * [You can try online demo here](https://ng-data-annotation.firebaseapp.com/#!/ng-function-validate)

# Installation

* Step 1: Use command: `npm install ng-data-annotation --save`.
* Step 2: Import `ng-data-annotation.min.js` from node_modules in application.
* Step 3: Start using application.

# Properties list

1. `text-property-compares`
	* Description:
		* Compare 2 text input properties.

    * Parameters:
		- `text-property-compares-operator (char)`: Comparision mode between 2 properties. Operators can be used: `<`, `<=`, `=`, `>=`, `>`, `==` . The comparision base on the result of `indexOf` method in javascript.
		- `text-property-compares (string)`: Specific parameter which needs to be compared with the source element.

	* Validation usage:
		- `<li ng-message="textPropertyCompares">{{The message can be defined here}}</li>` : Catch `textPropertyCompares` to display validation message of this custom validation attribute.

2. `numeric-property-compares`

	* Description:
		* Compare 2 numeric input properties.

	* Parameters:
		* `numeric-property-compares-mathematic-operator (char)`: Specify comparision mathematical operator add/subtract/divide/multiply a range number after that a comparision is done to compare result to target property. Mathematical operators can be used: `+`, `-`, `*`, `/`.
		* `numeric-property-compares-operator (char)`: Comparision mode which 2 properties comparision should be done. Comparision operators can be used: `<`, `<=`, `=`, `>=`, `>`, `==`, `!=`.
		* `numeric-property-compares-mathematic-range (numeric)`: Value which should be added, subtracted, multiplied, divided by the source element value.

	* Validation usage:
		* `<li ng-message="numericPropertyCompares">{{Validation message can be defined here.}}</li>`: Catch `numericPropertyCompares` to display validation message.

3. `text-property-contains`

	* Description:
		* Compare 2 text input properties.

	* Parameters:
		* `text-property-contains (string)`: Specify property which needs to be compared.
		* `text-property-contains-case-insensitive (bool)`: Whether case-sensitive should be noticed or not.
		* `text-property-contains-result (numeric)`: Index of property value in source element.
		* `text-property-contains-operator (string)`: Comparision mode between 2 properties. Operators can be used: `<`, `<=`, `==`, `>=`, `>`, `!=`.

	* Validation usage:
		- `<li ng-message="textPropertyContains">{{Validation message can be defined here}}</li>`: Catch `textPropertyContains` to display validation message of this custom validation attribute.

4. `ng-function-validate`

	* Description:
		* If no validator attributes defined above statisfies your need. This validator can do whatever you want.

	* Parameters:
		* `ng-function-validate`: Specify list of validators. Validators are separated by `;` character. For example: `ng-function-validate="is-adult;is-even;in-out-same"`.
		* `ng-function-validate-monitors`: Specify list of parameters which are monitors their changes. When a parameter in the registered list changed, source element will be re-validated.
		* `ng-function-validate-*`: `*` is in the list defined inside `ng-function-validate-monitors`. Attribute behaviours is operation is the same as `numeric-property-compares`, `text-property-compares`, ... .
			* For example:
				* If `ng-function-validate="is-adult;is-even"`, there should be 2 properties in source element: `ng-function-validate-is-adult`, `ng-function-validate-is-even`.

	* Validation usage:
		* `<li ng-message="ng-function-validate-*">{{Base on the properties defined in ng-function-validate to display validation message}}</li>`

		* For example:
			* `<li ng-message="ng-function-validate-is-adult">Is not adult</li>`
            * `<li ng-message="ng-function-validate-is-even">Age must be an even number</li>`
			* `<li ng-message="ng-function-validate-in-out-same">In out must be the same as each other.</li>`

# History
2017, March 20: Initial commit


# Credits
 * Linh Nguyen