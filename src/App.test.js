import { render, screen } from '@testing-library/react';
import App from './App';

var basic = 5000;
var standard = 10000;
var premium = 15000;

function calculation(){
    var select = document.getElementById('place');
    var packageSelect = document.getElementById('package');
    var price = document.getElementById('price');
    var value = select.options[select.selectedIndex].value;    
    var package = packageSelect.options[packageSelect.selectedIndex].value;


    if(package=='b' && (value=="one" || value=="two"|| value == "three"|| value == "four"|| value== "five")){
      
        price.innerHTML = `Your package is Rs.${basic * 2}`;
    }else if(package=='s' && (value=="one" || value=="two"|| value == "three"|| value == "four"|| value== "five")){
        price.innerHTML = `Your package is Rs.${standard * 3}`;
    }else if(package=='p' && (value=="one" || value=="two"|| value == "three"|| value == "four"|| value== "five")){
        price.innerHTML = `Your package is Rs.${premium * 4}`;
    }

}

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
const ln = parseInt(prompt('Enter the lower number: '));
const hn = parseInt(prompt('Enter the higher number: '));
console.log(`The prime numbers in between ${ln} and ${hn} are:`);

for (let i = ln; i <= hn; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
