function autosave() {
  $("form").each(v1=>{
    console.log(this); // arrow-fn이므로 상위를 따라가다보면 window객체
    [1,2,3].forEach(v2=>{
      console.log(this); // window가리킴
    });
  });
}