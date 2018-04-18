const tree = require("./03_orange_tree");

for (let year = 1; year < 5; year++) {
  test(`not produce oranges at year ${year}`, () => {
    tree.seed();

    for (let i = 0; i < year; i++) {
      tree.ageOneYear();
    }

    expect(tree.oranges).toEqual(0);
  });
}

for (let year = 5; year < 10; year++ ) {
  test(`produce 10 oranges at year ${year}`, () => {
    tree.seed();

    for (let i =0; i < year; i++) {
      tree.ageOneYear();
    }
    expect(tree.oranges).toEqual(10);
  });
}

for (let year = 10; year < 20; year++ ) {
  test(`produce 20 oranges at year ${year}`, () => {
    tree.seed();

    for (let i =0; i < year; i++) {
      tree.ageOneYear();
    }
    expect(tree.oranges).toEqual(20);
  });
}

for (let year = 20; year < 40; year++ ) {
  test(`produce 5 oranges at year ${year}`, () => {
    tree.seed();

    for (let i =0; i < year; i++) {
      tree.ageOneYear();
    }
    expect(tree.oranges).toEqual(5);
  });
}

for (let year = 1 ; year < 10 ; year++ ) {
  test(`have grow at year ${year}`, () => {
    tree.seed();

    for (let i =0; i < year; i++) {
      tree.ageOneYear();
    }
    expect(tree.height).toEqual(year * 25);
  });
}

for (let year = 10 ; year < 20 ; year++ ) {
  test(`have grow at year ${year}`, () => {
    tree.seed();

    for (let i =0; i < year; i++) {
      tree.ageOneYear();
    }
    expect(tree.height).toEqual(9* 25 +(year - 9 ) * 10);
  });
}

for (let year = 20 ; year <= 100 ; year++ ) {
  test(`have grow at year ${year}`, () => {
    tree.seed();

    for (let i =0; i < year; i++) {
      tree.ageOneYear();
    }
    expect(tree.height).toEqual(9* 25 + 10 * 10);
  });
}
