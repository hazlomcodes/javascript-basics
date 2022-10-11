const createPerson = (name, age) => {
  person = {
    name: name,
    age: age,
  } ;
  return person;
};

const getName = object => {
return object.name;
}


const getProperty = (property, object) => {
return object[property];
}


const hasProperty = (property, object) => {
if (object.hasOwnProperty(property)) {
return true;
}
return false;
  
};

const isOver65 = person => {
  if (person.age >65) {
    return true;
  }
  return false;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(object => object.name === name);
};

const findHondas = cars => {
  return cars.filter(object => object.manufacturer === 'Honda');
};

const averageAge = people => {
  return people.reduce((prev, user) => prev + user.age, 0) / people.length;

};

const createTalkingPerson = (name, age) => {
  return {
      name: name,
      age: age,
      introduce: function(AI) {
        return `Hi ${AI}, my name is ${name} and I am ${age}!`
    
    } 
  }
  
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
