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

  removeItem(listItem) {
    if (listItem === undefined) {
      this.items.pop();
    } else {
      let index = this.items.indexOf(listItem);
      if (listItem instanceof ShoppingListItem) {
        if (index >= 0) {
          this.items.splice(index, 1);
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  render() {}
}
