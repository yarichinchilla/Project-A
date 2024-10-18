// get calculate btn 
let calculateBtn = document.querySelector('#calculate-btn');
	// listen for click

// step 4
calculateBtn.addEventListener('click', function() {
	calculateAverageCostDrink();
	calculateDrinksMonthly();
	calculateMostMoneyMonthly();
	calculateLeastMoneyMonthly();
	calculateAverageMoneyMonthly();
	calculateMostMoneyYearly();
	calculateLeastMoneyYearly();
	calculateAverageMoneyYearly();

});



// Output displayed on screen ----------------------------------


//  fcn - calculate Average Cost per drink - Step # 5
function calculateAverageCostDrink() {

	//get 
	let ecdp = Number(document.querySelector('#ecpd').value);
	let ccdp = Number(document.querySelector('#ccpd').value);


	// calculate 
	let averageCostDrink = (ecdp + ccdp) / 2;

	// show input
	let averageCostDrinkinput = document.querySelector(".averagecostperdrink");

}



//  fcn - Total drinks purchased monthly - Step # 6
function calculateDrinksMonthly() {

	//get 
	let mondayvalue = Number(document.querySelector('.user-input monday').value);
	let tuesdayvalue = Number(document.querySelector('.user-input tuesday').value);
	let wednesdayvalue = Number(document.querySelector('.user-input wednesday').value);
	let thursdayvalue = Number(document.querySelector('.user-input thursday').value);
	let fridayvalue = Number(document.querySelector('.user-input friday').value);
	let saturdayvalue = Number(document.querySelector('.user-input saturday').value);
	let sundayvalue = Number(document.querySelector('.user-input sunday').value);

	// calculate 
	let drinksMonthly = (mondayvalue + tuesdayvalue + wednesdayvalue + thursdayvalue + fridayvalue + saturdayvalue + sundayvalue) * 4;

	// show input
	let drinksMonthlyinput = document.querySelector('.numbersofdrinkspermonth');

}


//  fcn - calculate the most you could spend monthly - Step # 7
function calculateMostMoneyMonthly() {

	//get 
	let ecdp = Number(document.querySelector('#ecpd').value);
	let drinksMonthly = drinksMonthly;

	// calculate 
	let mostMoneyMonthly = ecdp * drinksMonthly;

	// show input
	let mostMoneyMonthlyinput = document.querySelector('.themostyoucouldspendmonthly');

}



//  fcn - calculate the least you could spend monthly - Step # 8
function calculateLeastMoneyMonthly() {

	//get 
	let ccdp = Number(document.querySelector('#ecpd').value);
	let drinksMonthly = drinksMonthly;

	// calculate 
	let leastMoneyMonthly = ccdp * drinksMonthly;

	// show input
	let leastMoneyMonthlyinput = document.querySelector('.theleastyoucouldspendmonthly');

}




//  fcn - calculate the average you could spend monthly - Step # 9
function calculateAverageMoneyMonthly() {

	//get 
	let averageCostDrink = averageCostDrink;
	let drinksMonthly = drinksMonthly;

	// calculate 
	let averageNoneyMonthly = averageCostDrink * drinksMonthly;

	// show input
	let averageNoneyMonthlyinput = document.querySelector('.the average amount you could spend monthly');

}


//  fcn - calculate the most you could spend yearly - Step # 10
function calculateMostMoneyYearly() {

	//get 
	let drinksMonthly = drinksMonthly;
	let ecdp = Number(document.querySelector('#ecpd').value);


	// calculate 
	let mostMoneyYearly = (drinksMonthly * 12) * (ecdp);

	// show input
	let mostMoneyYearlyinput = document.querySelector('.themostyou ouldspendyearly');

}



//  fcn - calculate the least you could spend yearly - Step # 11
function calculateLeastMoneyYearly() {

	//get 
	let drinksMonthly = drinksMonthly;
	let ccdp = Number(document.querySelector('#ecpd').value);


	// calculate 
	let leastMoneyYearly = (drinksMonthly * 12) * (ccdp);

	// show input
	let leastMoneyYearlyinput = document.querySelector('.theleastyoucouldspendyearly');


}


//  fcn - calculate the average you could spend yearly - Step # 12
function calculateAverageMoneyYearly() {

	//get 
	let averageCostDrink = averageCostDrink;
	let drinksMonthly = drinksMonthly;



	// calculate 
	let averageMoneyYearly = (drinksMonthly * 12) * (averageCostDrink);

	// show input
	let averagetMoneyYearlyinput = document.querySelector('.theaverageamountyoucouldspendyearly');

}


//images 

// get green image
let greenImg = document.querySelector('#greenface');

if (drinksMonthly < 22) {

	avgGradeImg.setAttribute('src', 'green-face.png');
}

// get yellow image
let yellowImg = document.querySelector('#yellowface');

if (drinksMonthly > 22) {

	avgGradeImg.setAttribute('src', 'yellow-face.png');
}

// get red image
let redImg = document.querySelector('#redface');

if (drinksMonthly = 80) {

	avgGradeImg.setAttribute('src', 'red-face.png');
}