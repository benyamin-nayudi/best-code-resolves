/* 
** this code will calculate the max and min of an array 
and will return the array [min , max] using reduce method **


function minMax(items) {
  return items.reduce((acc, val) => {
    // acc = [82 , 82]   ;   cal= 6
    acc[0] = acc[0] === undefined || val < acc[0] ? val : acc[0];
    acc[1] = acc[1] === undefined || val > acc[1] ? val : acc[1];
    return acc;
  }, []);
}
console.log(minMax([82, 15, 6, 38, 35]));      // ======> [6 , 82 ]

+++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++

**this code remove the element in the array geese from the array birds by using filter : **


birds = ["Mallard","Hook Bill","African", "Crested","Pilgrim","Toulouse","Blue Swedish"];

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter(bird =>   !geese.includes(bird));
};
console.log(gooseFilter(birds));


-&&&&&&&&&

**this is also remove the given array from the first one with some and filter methods**

gooseFilter = (birds) =>
  birds.filter(
    (bird) =>!["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].some((goose) => goose == bird
      )
  );

+++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++]

*/



