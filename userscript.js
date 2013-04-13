// ==UserScript==
// @name Green New Tab Links
// @description Adds a green style rule for links that open in a new tab.
// @include     *
// @grant GM_addStyle
// @version 1.0
// ==/UserScript==

/*global GM_addStyle*/

GM_addStyle('a[target="_blank"] {color: green};');