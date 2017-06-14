// describe("pow", function() {

//   describe("возводит x в степень n", function() {

//     function makeTest(x) {
//       var expected = x * x * x;
//       it("при возведении " + x + " в степень 3 результат: " + expected, function() {
//         assert.equal(pow(x, 3), expected);
//       });
//     }

//     for (var x = 1; x <= 5; x++) {
//       makeTest(x);
//     }

//   });

// });
//----------------------------------------------------------------------------
// describe("pow", function() {

// 	describe("Возводит x в степень n", function() {
//  		var x = 5;
// 	  var result;
	 		
// 	  it("при возведении " + x + " в степень 1 результат: " + result, function() {
// 	  	result = x;
// 	 		assert.equal(pow(x, 1), result);
// 	 	});

// 		it("при возведении " + x + " в степень 2 результат: " + result, function() {
// 		result *= x;
// 		assert.equal(pow(x, 2), result);
// 		});

// 		it("при возведении " + x + " в степень 3 результат: " + result, function() {
// 		result *= x;
// 		assert.equal(pow(x, 3), result);
// 		});

// 	});

// });






describe("Возводит x в степень n", function() {
  it("5 в степени 1 равно 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5 в степени 2 равно 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в степени 3 равно 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});