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
