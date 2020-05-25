# Triangle-Tracker

## Author
Cleophas Makokha

## Description
This is a webpage that allows users to enter three sides of a triangle and checks whether the triangle is equilateral, Isosceles, scalene or not a triangle
It does not allow users to input non-numerical value

### Prerequisites
You need to have git installed
You can install it with the following command in your terminal
`$ sudo apt install git-all`

### Setup
To access this project on your local files, you can clone it using these steps
1. Open your terminal
1. Use this command `$ git clone https://github.com/cleophasmakokha/triangle`
1. This will clone the repositoty into your local folder

### Technologies Used
1. HTML
2. CSS
3. JavaScript
4. Git

### Program Behaviour
| Behaviour                         |  Input Example |  Output  Example                 |
|----------                                          |:-------------: |------:                           |
| User doesn't type anything                   | ..          | Please FILL all the fields  |
| User fills only one field                     | 8..          | Please FILL all the fields  |
| User fills two fields                    | 2,9,.       | Please FILL all the fields |
| User enters three sides not equal             | 2,5,9          | That is a SCALENE triangle       |
| User enters two equal sides                     | 10,10,15          | That is an ISOSCELES triangle  |
| User enters three equal sides                         | 2,2,2          | That is an EQUILATERAL triangle    |
| When the sum of any two sides > third side         | 7,7,5          | That is NOT a triangle |
| When the user doesn't enter a number| "is", 3,5   | That is NOT a number|


### Live Site
View [live](https://cleophasmakokha.github.io/triangle/)

## License
MIT License

Copyright (c) 2020 Cleophas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
