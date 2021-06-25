"use strict";

function autosave() {
  var _this = this;

  $("form").each(function (v1) {
    console.log(_this); // arrow-fn이므로 상위를 따라가다보면 window객체

    [1, 2, 3].forEach(function (v2) {
      console.log(_this); // window가리킴
    });
  });
}