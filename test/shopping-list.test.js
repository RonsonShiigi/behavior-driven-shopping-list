chai.should();
const expect = chai.expect;
const assert = chai.assert;

//shopping list item tests
describe("Shopping List Item Test", () => {
  it("ShoppingListItem should be a ShoppingListItem should b a function", () => {
    // const ShoppingListItem = new ShoppingListItem();
    expect(ShoppingListItem).to.be.a("function");
  });
});
describe("Item should have a name and a description", () => {
  it("Should have a name", function() {
    var kimchee = new ShoppingListItem("kimchee");
    kimchee.name.should.equal("kimchee");
  });

  it("Should have a description", function() {
    var kimchee = new ShoppingListItem("kimchee", "A healthy and tasty treat");
    kimchee.description.should.equal("A healthy and tasty treat");
  });

  it("Item should recieve 2 parameters and set them to name and description", function() {
    var chicken = new ShoppingListItem("chicken", "good");
    chicken.name.should.equal("chicken");
    chicken.description.should.equal("good");
  });
});
describe("Item should have a property isDone", () => {
  it("Should have a property called isDone", function() {
    var kimchee = new ShoppingListItem("kimchee", "healthy and tasty");
    kimchee.isDone.should.equal(false);
  });
});
describe("Item should have a method called check", () => {
  it("Check should be a method", function() {
    var chicken = new ShoppingListItem("chicken", "boom");
    expect(chicken.check).to.be.a("function");
  });

  it("Method check should change items isDone to true", function() {
    var milk = new ShoppingListItem("milk", "dairy");
    milk.check();
    milk.isDone.should.equal(true);
  });
});
describe("Item should have a method named uncheck", () => {
  it("Should have a method named uncheck", function() {
    var natto = new ShoppingListItem("natto", "yummy");
    expect(natto.uncheck).to.be.a("function");
  });

  it("Method uncheck should set item's isDone to false", function() {
    var carrots = new ShoppingListItem("carrots", "healthy");
    carrots.check();
    carrots.uncheck();
    carrots.isDone.should.equal(false);
  });
});
describe("Item should have a method named render", () => {
  it("Should have a method named render", function() {
    var milk = new ShoppingListItem("milk", "dairy");
    expect(milk.render).to.be.a("function");
  });

  it("Item's Render method should return a string", function() {
    var beans = new ShoppingListItem("beans", "green");
    expect(beans.render()).to.be.a("string");
  });

  it("Items render method should return a html string", function() {
    var beans = new ShoppingListItem("beans", "green");
    expect(beans.render()).to.include("<li", "</li>");
  });
});

//on to the shopping list test

describe("Shopping list should be a function/class", () => {
  it("Shopping List should be a function", () => {
    expect(ShoppingList).to.be.a("function");
  });
});

describe("Shopping List should have a property called items", () => {
  let list = new ShoppingList();
  it("List should have a property called items", () => {
    expect(list).to.have.property("items");
  });

  it("List should have a constructor that sets items to an empty array", () => {
    expect(list.items)
      .to.be.an("array")
      .lengthOf(0);
  });
});

describe("Shopping list should have a method called addItem", () => {
  let list = new ShoppingList();
  it("List should have a addItem method that is a function", () => {
    expect(list.addItem).to.be.a("function");
  });

  it("addItem should put a new Shopping list item into items array", () => {
    let carrots = new ShoppingListItem();
    list.addItem(carrots);
    expect(list.items[0]).to.equal(carrots);
  });

  it("addItem should only add items that are instances of Shopping List Item", () => {
    let chicken = "chicken";
    expect(list.addItem(chicken)).to.equal(false);
  });
});

describe("Shopping list should have a method called removeItem", () => {
  let list = new ShoppingList();
  let chicken = new ShoppingListItem();
  let beef = new ShoppingListItem();
  it("removeItem should be a function", () => {
    expect(list.removeItem).to.be.a("function");
  });

  it("removeItem should remove item from items array", () => {
    list.addItem(chicken);
    list.addItem(beef);
    list.removeItem(beef);
    expect(list.items.length).to.equal(1);
    expect(list.items[0]).to.equal(chicken);
  });

  it("removeItem can only remove things that are already in the items array", () => {
    list.addItem(chicken);
    expect(list.removeItem(beef)).to.equal(false);
  });

  it("if no item is defined when invoking removeItem, method should remove the last item in the array", () => {
    let newList = new ShoppingList();
    let natto = new ShoppingListItem();
    let rice = new ShoppingListItem();
    newList.addItem(natto);
    newList.addItem(rice);
    newList.removeItem();
    expect(newList.items.length).to.equal(1);
    expect(newList.items[0]).to.equal(natto);
  });

  it("If item to be removed is not an instance of ShoppingListItem, expect false", () => {
    let buns = "buns";
    expect(list.removeItem(buns)).to.equal(false);
  });
});
