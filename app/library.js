module.exports = function (arr1, arr2) {
		var missingnumber;
		if (arr1.length === 0 && arr2.length ===0){
			return 0;
		}
		for(var i in arr2){
			if (arr1.length === arr2.length) {
				return 0;
			}

			if(arr1.indexOf(arr2[i]) === -1){
				missingnumber = arr2[i];
				
			}
		}
		return missingnumber;
	
}


