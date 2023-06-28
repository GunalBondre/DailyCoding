/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	citations = citations.sort((a, b) => a - b);
	let noOfCitation = 0;
	let n = citations.length;
	for (let i in citations) {
		noOfCitation++;
	}
	for (let citation of citations) {
		if (citation == noOfCitation) {
			return noOfCitation;
		} else if (citation < noOfCitation) {
			noOfCitation--;
		}
	}
	return noOfCitation;
};

console.log(hIndex([1, 3, 1]));
