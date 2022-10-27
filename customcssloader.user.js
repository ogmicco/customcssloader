// ==UserScript==
// @name        Custom CSS Loader
// @namespace   ,
// @include https://*/*
// @include http://*/*
// @author      ogmicco
// @version     1.0
// @resource    CUSTOM_CSS  LINK_TO_CSS_HERE
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @match        *://*/*
// @run-at      document-start
// ==/UserScript==

var cssTxt  = GM_getResourceText ("CUSTOM_CSS");
console.log(cssTxt);
GM_addStyle (cssTxt);
