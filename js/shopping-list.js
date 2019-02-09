class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(listItem) {
    if (listItem instanceof ShoppingListItem) {
      this.items.push(listItem);
    } else {
      return false;
    }
  }
}
