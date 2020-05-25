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
