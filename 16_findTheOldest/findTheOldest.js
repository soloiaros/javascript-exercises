const findTheOldest = function(peopleArray) {
  // const peopleSorted = peopleArray.sort(
  //   (person1, person2) => {
  //     return (person2.yearOfDeath - person2.yearOfBirth) - (person1.yearOfDeath - person1.yearOfBirth);
  //   }
  // );
  const peopleSorted = peopleArray.sort(
    (person1, person2) => {
      if (person1.yearOfDeath !== undefined) {yearOfDeath1 = person1.yearOfDeath} 
      else {yearOfDeath1 = new Date().getFullYear()};
      if (person2.yearOfDeath !== undefined) {yearOfDeath2 = person2.yearOfDeath} 
      else {yearOfDeath2 = new Date().getFullYear()};

      const age1 = new Date(yearOfDeath1 - person1.yearOfBirth);
      const age2 = new Date(yearOfDeath2 - person2.yearOfBirth);
      
      return age2 - age1;
    }
  );
  return peopleSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
