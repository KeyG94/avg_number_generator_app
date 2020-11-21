const myObj = {
	_ratings: [],

	getAverageRating() {
		let lengthOfList = this._ratings.length;
		let ratingsSum = this._ratings.reduce((currentSum, ratings) => currentSum + ratings);
		let averageSum = ratingsSum / lengthOfList;

		if (this._ratings) {
			return averageSum;
		}
	},

	addRating(rating) {
		this._ratings.push(rating);
		this.getAverageRating(this._ratings);
	}
};

//testing the object.method
const checkRatingValue = document.getElementById('ratings');

checkRatingValue.addEventListener('keydown', function(event) {
	if (event.code === 'Enter') {
		if (checkRatingValue.value) {
			const input = checkRatingValue.value;

			addRatingToRating(Number(input));
		}
		checkRatingValue.value = '';
	}
});

function addRatingToRating(input) {
	let result = input;

	myObj.addRating(result);
	console.log(myObj._ratings);

	printResult(result);
}

function printResult(input) {
	console.log(myObj._ratings);
	input = Math.round(myObj.getAverageRating());
    let root = document.querySelector('#root');
    let output = document.querySelector('#output');
    

    root.style.fontSize = '30px';
    
    root.innerHTML = `Avg: ${input}`;
    output.innerHTML = `${JSON.stringify(myObj._ratings)}`;
}
