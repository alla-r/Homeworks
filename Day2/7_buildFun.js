function buildFun(n){

	var result = [];

  function createFunc(num){
    return () => num;
  }

	for (var i = 0; i< n; i++){
		result.push(createFunc(i))
	}

  // cheating
  // for (let i = 0; i< n; i++){
  //   result.push(function(){
  //     return i;
  //   })
  // }

	return result;
}

const arr = buildFun(10);

arr.forEach(func => console.log(func()));


