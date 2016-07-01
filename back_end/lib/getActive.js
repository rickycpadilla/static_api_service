module.exports = function getActive(param){
  var arr = [];
  for (var i = 0; i < param.length; i++) {
    if(param[i].user_data.active === 1)
    arr.push(param[i])
  }
  return arr
}
