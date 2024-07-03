//Promise 1

let promise = new Promise((res, rej) => {
  let i = 0;
  if (i < 1) {
    res("Number is smaller than 1");
  } else {
    rej("Number is Greater than 1");
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });

//Promise with Rejection

function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Data not Reecived");
    }, 2000);
  });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//Promises Chaining

function step1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data from Step 1");
    }, 2000);
  });
}
function step2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data from Step 2");
    }, 2000);
  });
}
function step3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data from Step 3");
    }, 2000);
  });
}

step1().then((res) => {
  console.log(res);
  step2().then((res) => {
    console.log(res);
    step3().then((res) => {
      console.log(res);
      console.log("All Data Complete");
    });
  });
});

//Promise.all

function user() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("User data");
    }, 1000);
  });
}

function posts() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Posts data");
    }, 2000);
  });
}

Promise.all([user(), posts()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Data Not found");
  });

// Promise.any

function user() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("User data");
    }, 2000);
  });
}

function posts() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Posts data");
    }, 1000);
  });
}

Promise.any([user(), posts()])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error("All Promise rejected");
  });

// Promise.allSettled

function user() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("User data");
    }, 1000);
  });
}

function posts() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Posts data");
    }, 2000);
  });
}

Promise.allSettled([user(), posts()])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error("All Promise rejected");
  });

//Promise.race

function user() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("User data");
    }, 1000);
  });
}

function posts() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Posts data");
    }, 1000);
  });
}

Promise.race([user(), posts()])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error, "not found");
  });
