"use strict";

var headerSelect = function headerSelect() {
  var element = document.querySelector('.header__select');
  var choices = new Choices(element, {
    searchEnabled: false
  });
};

headerSelect();