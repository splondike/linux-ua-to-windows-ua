"use strict";

const {Cc, Ci} = require("chrome");
const SETTING_NAME = "general.useragent.override";

let prefs = require('sdk/preferences/service');

prefs.reset(SETTING_NAME);

let orig_ua = Cc["@mozilla.org/network/protocol;1?name=http"].getService(Ci.nsIHttpProtocolHandler).userAgent;

let mod_ua = orig_ua.replace("X11; Linux x86_64", "Windows NT 6.1");

prefs.set(SETTING_NAME, mod_ua);
