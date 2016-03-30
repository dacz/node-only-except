
module.exports = function(obj, keys){
  obj = obj || {};
  if ('string' == typeof keys) keys = keys.split(/ +/);
  if (keys[0].match(/^-/)) {
    //copy objektu a pro kazdy key (s odstranenym minusem) smazat z objektu
    var copyobj = Object.assign({}, obj);
    keys.forEach(function(key) {
      delete copyobj[key.replace(/^-/,'')];
    });
    return copyobj;
  } else {
    return keys.reduce(function(ret, key){
      if (null == obj[key]) return ret;
      ret[key] = obj[key];
      return ret;
    }, {});
  }
};
