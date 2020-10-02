class Person {
  constructor(initialAge) {
      this.age = this.validateAge(initialAge);
  }
  validateAge(age) {
      let localAge = age;
      if (age < 0) {
          localAge = 0;
          console.log("Age is not valid, setting age to 0.")
      }
      return localAge;
  }
  yearPasses() {
      this.age += 1;
  }
  amIOld() {
      if(this.age < 13) {
          console.log("You are young.");
      } else if(this.age < 18) {
          console.log("You are a teenager.");
      } else {
          console.log("You are old.");
      }
  }

}