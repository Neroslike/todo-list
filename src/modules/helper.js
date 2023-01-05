const helper = (() => {
  // This method finds the element matching the ID on the given array and deletes it by index
  const deleteItem = (array, id) => {
    let found = array.findIndex((item) => item.id === id);
    found === 0 ? array.shift() : array.splice(found, found);
  };

  return { deleteItem };
})();

export default helper;
