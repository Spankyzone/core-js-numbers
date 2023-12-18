function dateSample(sampleActivity) {
    let k = Math.LN2 / HALF_LIFE_PERIOD;
    if (typeof sampleActivity === 'string' && !sampleActivity.includes('-')) {
        let t;
        if (sampleActivity.includes('.')) {
            let numFloat = Number.parseFloat(sampleActivity);
            if (numFloat <= 0 || numFloat > 15) {
                return false;
            } else {
                t = Math.log(MODERN_ACTIVITY / numFloat) / k;
            }
        } else {
            let numInt = Number.parseInt(sampleActivity)
            if (numInt <= 0 || numInt > 15) {
                return false;
            } else {
                t = Math.log(MODERN_ACTIVITY / numInt) / k;
            }
        }
        return Math.ceil(t);
    } else {
        return false;
    }
  }


  function countCats(matrix) {
    let count = 0;
    for (let index = 0; index < matrix.length; index++) {
      const element = matrix[index];
      for (let j = 0; j < element.length; j++) {
        const el = element[j];
        if (el === '^^') {
          count++;
        }
        }
    }
    return count;
  }