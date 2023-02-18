// ==UserScript==
// @name          Acellus AutoSpeed
// @namespace     http://acellus.com/
// @match         http://acellus.com/*
// @grant         none
// ==/UserScript==

var vids = document.getElementsByTagName("video");
 for (var i = 0; i < vids.length; i++) {
     vids[i].playbackRate = 1.5;
 }
