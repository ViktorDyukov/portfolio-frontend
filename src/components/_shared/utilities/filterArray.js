const filterArray = (key) => {
  return function (item) {
    if (key == -1) return true;
    let tags = item.tag;
    let res = false;
    for (var i = 0; i < tags.length; i++) {
      if (tags[i].id === key) {
        res = true;
      }
    }
    return res;
  };
};

export default filterArray;
