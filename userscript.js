// ==UserScript==
// @name Green New Tab Links
// @description Adds a green style rule for links that open in a new tab.
// @include     *
// @grant none
// @version 1.1
// ==/UserScript==

var s=document.createElement('style');
s.appendChild(document.createTextNode('a[target="_blank"] {color: green}'));
document.getElementsByTagName('head')[0].appendChild(s);
