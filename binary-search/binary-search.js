'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	//First sort the given array (can we .sort())
	//Check the midpointIdx of the sorted array compare to target
	const midpointIdx = Math.floor(array.length / 2)
	const lessThanMid = array.slice(0, midpointIdx)
	const greaterThanMid = array.slice(midpointIdx)

	if (target === array[midpointIdx]) {

		return true
	}

	if (target > array[midpointIdx] && midpointIdx) {
		//Keep doing this ignore until the root/midpointIdx is the target
		return binarySearch(greaterThanMid, target)

	}

	if (target < array[midpointIdx] && midpointIdx) {
		return binarySearch(lessThanMid, target)
	}

	return false
};

		/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
