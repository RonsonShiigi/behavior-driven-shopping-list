chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe("Shopping List Item Test", () => {
  it("ShoppingListItem should be a ShoppingListItem should b a function", () => {
    // const ShoppingListItem = new ShoppingListItem();
    expect(ShoppingListItem).to.be.a("function");
  });

  it("Should have a name", function() {
    var kimchee = new ShoppingListItem("kimchee");
    kimchee.name.should.equal("kimchee");
  });

  it("Should have a description", function() {
    var kimchee = new ShoppingListItem("kimchee", "A healthy and tasty treat");
    kimchee.description.should.equal("A healthy and tasty treat");
  });

  it("Should have a property called isDone", function() {
    var kimchee = new ShoppingListItem("kimchee", "healthy and tasty");
    kimchee.isDone.should.equal(false);
  });

  it("Item should recieve 2 parameters and set them to name and description", function() {
    var chicken = new ShoppingListItem("chicken", "good");
    chicken.name.should.equal("chicken");
    chicken.description.should.equal("good");
  });

  it("Check should be a method", function() {
    var chicken = new ShoppingListItem("chicken", "boom");
    expect(chicken.check).to.be.a("function");
  });

  it("Method check should change items isDone to true", function() {
    var milk = new ShoppingListItem("milk", "dairy");
    milk.check();
    milk.isDone.should.equal(true);
  });

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
