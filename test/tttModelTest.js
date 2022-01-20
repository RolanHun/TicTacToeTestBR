const tomb = [];
const kiertekel = new Kiertekel(tomb);
const { test } = QUnit;
QUnit.module("Ellenőrzés vízszintes", function () {
  test("Van-e vízszintes?", function (assert) {
    assert.ok(kiertekel.getVizszintes, "Van!");
  });
  test("Függvény-e a vízszintes?", function (assert) {
    assert.ok(typeof kiertekel.getVizszintes == "function", "Függvény!");
  });
  test("Üres tictactoe?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "---|---|---|");
  });
  test("Első sor X?", function (assert) {
    let tomb = [
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "XXX|---|---|");
  });
  test("Második sor X?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "---|XXX|---|");
  });
  test("Harmadik sor X?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "---|---|XXX|");
  });
  test("Első sor O?", function (assert) {
    let tomb = [
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "OOO|---|---|");
  });
  test("Második sor O?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "---|OOO|---|");
  });
  test("Harmadik sor O?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "O" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "---|---|OOO|");
  });
});
QUnit.module("Ellenőrzés függőleges", function () {
  test("Van-e függőleges?", function (assert) {
    assert.ok(kiertekel.getFuggoleges, "Van!");
  });
  test("Függvény-e a függőleges?", function (assert) {
    assert.ok(typeof kiertekel.getFuggoleges == "function", "Függvény!");
  });
  test("Üres tictactoe?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "---|---|---|");
  });
  test("Első oszlop X?", function (assert) {
    let tomb = [
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "XXX|---|---|");
  });
  test("Második oszlop X?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "---|XXX|---|");
  });
  test("Harmadik oszlop X?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "---|---|XXX|");
  });
  test("Első oszlop O?", function (assert) {
    let tomb = [
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "OOO|---|---|");
  });
  test("Második oszlop O?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "---|OOO|---|");
  });
  test("Harmadik oszlop O?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "---|---|OOO|");
  });
});
QUnit.module("Ellenőrzés átló", function () {
  test("Van-e átló?", function (assert) {
    assert.ok(kiertekel.getAtlo, "Van!");
  });
  test("Függvény-e az átló?", function (assert) {
    assert.ok(typeof kiertekel.getAtlo == "function", "Függvény!");
  });
  test("Üres tictactoe?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getAtlo(), "---|---");
  });
  test("Atló X?", function (assert) {
    let tomb = [
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getAtlo(), "XXX|-X-");
  });
  test("Atló X másik irányból?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getAtlo(), "-X-|XXX");
  });
  test("Atló O?", function (assert) {
    let tomb = [
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getAtlo(), "OOO|-O-");
  });
  test("Atló O másik irányból?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getAtlo(), "-O-|OOO");
  });
});
QUnit.module("Ellenőrzés", function () {
  test("Van-e ellenőrzés?", function (assert) {
    assert.ok(kiertekel.ellenorzes, "Van!");
  });
  test("Függvény-e az ellenőrzés?", function (assert) {
    assert.ok(typeof kiertekel.ellenorzes == "function", "Függvény!");
  });
  test("Üres tictactoe-n nincs nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "");
  });
  test("Első sor X nyertes?", function (assert) {
    let tomb = [
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "X");
  });
  test("Második sor X nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "X");
  });
  test("Harmadik sor X nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "X");
  });
  test("Első sor O nyertes?", function (assert) {
    let tomb = [
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "O");
  });
  test("Második sor O nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "O");
  });
  test("Harmadik sor O nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "O" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "O");
  });
  test("Első oszlop X nyertes?", function (assert) {
    let tomb = [
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "X");
  });
  test("Második oszlop X nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "X");
  });
  test("Harmadik oszlop X nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "X");
  });
  test("Első oszlop O nyertes?", function (assert) {
    let tomb = [
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "O");
  });
  test("Második oszlop O nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "O");
  });
  test("Harmadik oszlop O nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "O");
  });
  test("Átlo X nyertes?", function (assert) {
    let tomb = [
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "X");
  });
  test("Átlo másik irányból X nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "X");
  });
  test("Átlo O nyertes?", function (assert) {
    let tomb = [
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "O");
  });
  test("Átlo másik irányból O nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "O" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "O");
  });
  test("Vízszintesen átfolyik a 3. X nincs nyertes?", function (assert) {
    let tomb = [
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "");
  });
  test("Függőlegesen átfolyik a 3. X nincs nyertes?", function (assert) {
    let tomb = [
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "-" },
      { ertek: "X" },
      { ertek: "-" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "");
  });
});
