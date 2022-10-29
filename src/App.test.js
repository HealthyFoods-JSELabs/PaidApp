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

/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

*/

const arr = parseInt(prompt('Enter array: '));
console.log(threeSum(arr));

var threeSum = function(nums) {
	var rtn = [];
	if (nums.length < 3) {
		return rtn;
	}
	nums = nums.sort(function(a, b) {
		return a - b;
	});
	for (var i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) {
			return rtn;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		for (var j = i + 1, k = nums.length - 1; j < k;) {
			if (nums[i] + nums[j] + nums[k] === 0) {
				rtn.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (j < k && nums[j] == nums[j - 1]) {
					j++;
				}
				while (j < k && nums[k] == nums[k + 1]) {
					k--;
				}
			} else if (nums[i] + nums[j] + nums[k] > 0) {
				k--;
			} else {
				j++;
			}
		}
	}
	return rtn;
};
