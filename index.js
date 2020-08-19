// Your code here
function mapToNegativize(sourceArray) {
  let negativizedArray = [];
  for (const element of sourceArray) {
    negativizedArray.push(element * -1);
  }
  return negativizedArray;
}

function mapToNoChange(sourceArray) {
  let newArray = [];
  for (const element of sourceArray) {
    newArray.push(element);
  }
  return newArray;
}

function mapToDouble(sourceArray) {
  let doubledArray = [];
  for (const element of sourceArray) {
    doubledArray.push(element * 2);
  }
  return doubledArray;
}

function mapToSquare(sourceArray) {
  let squaredArray = [];
  for (const element of sourceArray) {
    squaredArray.push(Math.pow(element, 2));
  }
  return squaredArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint;
  for (const element of sourceArray) {
    total += element;
  }
  return total;
}

function reduceToAllTrue(sourceArray) {
  let base = true;
  for (const element of sourceArray) {
    if (!element) {
      base = false;
    }
  }
  return base;
}

function reduceToAnyTrue(sourceArray) {
  let base = false;
  for (const element of sourceArray) {
    if (element) {
      base = true;
      break;
    }
  }
  return base;
}
