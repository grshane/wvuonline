Drupal.behaviors.accordion={attach:function(e,t){"use strict";var a=e.querySelectorAll(".accordion-term"),s=e.querySelectorAll(".accordion-def");!function(){for(var e=0;e<s.length;e++)s[e].classList?s[e].classList.add("active"):s[e].className+=" active",s[0].previousElementSibling.classList.add("is-active")}();for(var i=0;i<a.length;i++)a[i].addEventListener("click",function(e){var t="is-active";if(this.classList)this.classList.toggle(t);else{var a=this.className.split(" "),s=a.indexOf(t);0<=s?a.splice(s,1):a.push(t),this.className=a.join(" ")}e.preventDefault()})}},Drupal.behaviors.tabbed={attach:function(e,t){}},Drupal.behaviors.hobsonsForm={attach:function(e,t){}},Drupal.behaviors.mainMenu={attach:function(e){"use strict";var t=e.getElementById("toggle-expand"),a=e.getElementById("main-nav"),s=a.getElementsByClassName("expand-sub");t.addEventListener("click",function(e){t.classList.toggle("toggle-expand--open"),a.classList.toggle("main-nav--open")});for(var i=0;i<s.length;i++)s[i].addEventListener("click",function(e){var t=e.currentTarget,a=t.nextElementSibling;t.classList.toggle("expand-sub--open"),a.classList.toggle("main-menu--sub-open")})}},Drupal.behaviors.mainMenu={attach:function(e){"use strict";for(var t=document.querySelectorAll(".tabs"),a=document.querySelectorAll(".tabs__link"),s=document.querySelectorAll(".tabs__tab"),i=0,n=function(e,t){e.addEventListener("click",function(e){e.preventDefault(),c(t)})},c=function(e){e!==i&&0<=e&&e<=a.length&&(a[i].classList.remove("is-active"),a[e].classList.add("is-active"),s[i].classList.remove("is-active"),s[e].classList.add("is-active"),i=e)},l=0;l<t.length;l++)t[l].classList.remove("no-js");for(var o=0;o<a.length;o++)n(a[o],o)}};