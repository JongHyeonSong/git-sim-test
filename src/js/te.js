Object.keys(extra_list).forEach(function(val){
  if(this[val]){
      extra_list[val] = this[val].value;
  } else{
      extra_list[val] = "";
  }
})