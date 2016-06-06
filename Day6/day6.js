function average(numbers_list) {
	var sum = 0;
	for(var i = 0; i < numbers_list.length; i++) {
		sum += numbers_list[i];
	}
	var average = sum / numbers_list.length;
	return average;
}

function assignGrade(grade) {
	if(grade < 60) {
		return 'F';
	}
	else if(grade >= 60 && grade < 70) {
		return 'D';
	}
	else if(grade >= 70 && grade < 80) {
		return 'C';
	}
	else if(grade >= 80 && grade < 90) {
		return 'B';
	}
	else if(grade >= 90) {
		return 'A';
	}
}

function pluralize(num, noun) {
	if(num > 1) {
		return num + " " + noun + "s";
	}
	else
		return num + " " + noun;
}

function longestWord(sentence) {
	var splitSentence = sentence.split(" ");
	var currLongestWord = "";
	var currLongestLength = 0;
	for (var i = 0; i < splitSentence.length; i++) {
		var tempLength = splitSentence[i].length;
		if(tempLength > currLongestLength) {
			currLongestLength = tempLength;
			currLongestWord = splitSentence[i];
		}
	}
	return currLongestWord;
}