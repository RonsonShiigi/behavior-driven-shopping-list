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
