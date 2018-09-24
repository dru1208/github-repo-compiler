const checkSameObject = ((object1, object2) => {
  return (object1.name === object2.name &&
        object1.language === object2.language &&
        object1.latest_tag === object2.latest_tag)
})

const checkIncludes = ((array, valueObject) => {
  for (let eachObject of array) {
    if (checkSameObject(valueObject, eachObject)) {
      return true;
    }
  }
  return false;
})

const removeObject = ((array, valueObject) => {
  const newArray = []
  for (let eachObject of array) {
    if (!checkSameObject(valueObject, eachObject)) {
      newArray.push(eachObject)
    }
  }
  return newArray;
})


export {
  checkIncludes,
  removeObject
}