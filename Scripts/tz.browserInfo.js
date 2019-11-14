var browserInfo = {
    browserEnum: {
        Chrome: "Chrome",
        Firefox: "Firefox",
        Safari: "Safari",
        AndroidBrowser: "Android Browser",
        Maxthon: "Maxthon",
        BlackBerry: "BlackBerry",
        InternetExplorer: "Internet Explorer",
        OperaMobi: "Opera Mobi",
        OperaMini: "Opera Mini",
        Opera: "Opera",
        AppleWebApp: "Apple Web App",
        Unknown: "Unknown"
    },
    recommendedAction: function () {
        if(browserInfo.browser() == browserInfo.browserEnum.InternetExplorer && browserInfo.browserVersion() < 9) {
            return "Unfortunately Internet Explorer 9 and below does not support HTML 5 standards like CSS3 : column-count. Please upgrade to one of the supported desktop browsers";
        }
        if(browserInfo.browser() == browserInfo.browserEnum.BlackBerry && browserInfo.browserVersion() < 6) {
            return "Unfortunately your BlackBerry is not supported. Please switch to Android or iOS or upgrade your BlackBerry to BBOS6 or higher";
        }
        if(browserInfo.browser() == browserInfo.browserEnum.Maxthon) {
            return "Unfortunately Maxthon does not correctly render CSS3 styles like column-count. We will re-enable support as soon as rendering is corrected.";
        }
        if(browserInfo.browser() == browserInfo.Unknown) {
            return "Your browser is not known. Please contact support@tranzact.co.za if you wish to use this browser. In the mean time it should work.";
        }
        if(browserInfo.browser() == browserInfo.OperaMini) {
            return "Opera Mini struggles with the high level of client side interaction expected by our framework is not supported.";
        }
        if(browserInfo.supportsBrowser()) {
            return "Your browser is supported.";
        }
        return "Your browser is not supported. Please select from one of the supported browsers.";
    },
    userAgent: function () {
        return navigator.userAgent;
    },
    browserVersion: function () {
        try  {
            if(browserInfo.userAgent().indexOf("MSIE 10.0") >= 0) {
                return 10;
            }
            if(browserInfo.userAgent().indexOf("MSIE 9") >= 0) {
                return 9;
            }
            if(browserInfo.userAgent().indexOf("Chrome/24") >= 0) {
                return 24;
            }
            if(browserInfo.userAgent().indexOf("Chrome/25") >= 0) {
                return 25;
            }
            if(browserInfo.userAgent().indexOf("Chrome/26") >= 0) {
                return 26;
            }
            if(browserInfo.userAgent().indexOf("Chrome/27") >= 0) {
                return 27;
            }
            if(browserInfo.userAgent().indexOf("Chrome/28") >= 0) {
                return 28;
            }
            if(browserInfo.userAgent().indexOf("Firefox/17") >= 0) {
                return 17;
            }
            if(browserInfo.userAgent().indexOf("Firefox/18") >= 0) {
                return 18;
            }
            if(browserInfo.userAgent().indexOf("Firefox/19") >= 0) {
                return 19;
            }
            if(browserInfo.userAgent().indexOf("Firefox/20") >= 0) {
                return 20;
            }
            if(browserInfo.userAgent().indexOf("Firefox/21") >= 0) {
                return 21;
            }
            if(browserInfo.userAgent().indexOf("Firefox/22") >= 0) {
                return 22;
            }
            if(browserInfo.userAgent().indexOf("Maxthon/3") >= 0) {
                return 3;
            }
            if(browserInfo.userAgent().indexOf("Opera Mini/7") >= 0) {
                return 7;
            }
            return parseInt(navigator.appVersion);
        } catch (e) {
            return -1;
        }
    },
    _browser: undefined,
    browser: function () {
        try  {
            if(browserInfo._browser == undefined) {
                if(browserInfo.userAgent().indexOf("Maxthon") >= 0) {
                    browserInfo._browser = browserInfo.browserEnum.Maxthon;
                } else if(browserInfo.userAgent().indexOf("Chrome") >= 0) {
                    browserInfo._browser = browserInfo.browserEnum.Chrome;
                } else if(browserInfo.userAgent().indexOf("BlackBerry") >= 0) {
                    browserInfo._browser = "BlackBerry";
                } else if(browserInfo.userAgent().indexOf("Safari") >= 0 && browserInfo.userAgent().indexOf("Android") >= 0) {
                    browserInfo._browser = browserInfo.browserEnum.AndroidBrowser;
                } else if(browserInfo.userAgent().indexOf("Safari") >= 0) {
                    browserInfo._browser = browserInfo.browserEnum.Safari;
                } else if(browserInfo.userAgent().indexOf("Firefox") >= 0) {
                    browserInfo._browser = browserInfo.browserEnum.Firefox;
                } else if(browserInfo.userAgent().indexOf("MSIE") >= 0) {
                    browserInfo._browser = browserInfo.browserEnum.InternetExplorer;
                } else if(browserInfo.userAgent().indexOf("Opera Mobi") >= 0) {
                    browserInfo._browser = browserInfo.browserEnum.OperaMobi;
                } else if(browserInfo.userAgent().indexOf("Opera Mini") >= 0) {
                    browserInfo._browser = browserInfo.browserEnum.OperaMini;
                } else if(browserInfo.userAgent().indexOf("Opera") >= 0 && browserInfo.userAgent().indexOf("Presto") >= 0) {
                    browserInfo._browser = browserInfo.browserEnum.Opera;
                } else if(browserInfo.userAgent().indexOf("AppleWebKit") >= 0) {
                    browserInfo._browser = browserInfo.ApppleWebKit;
                } else {
                    browserInfo._browser = browserInfo.browserEnum.Unknown;
                }
            }
            return browserInfo._browser;
        } catch (e) {
            return "n/a";
        }
    },
    supportsBrowser: function () {
        if(browserInfo.browserVersion() == -1) {
            return false;
        }
        if(browserInfo.browserVersion() == undefined) {
            return false;
        }
        if(browserInfo.browser() == "n/a") {
            return false;
        }
        if(browserInfo.browser() == browserInfo.browserEnum.Unknown) {
            return false;
        }
        if(browserInfo.browser() == browserInfo.browserEnum.InternetExplorer && browserInfo.browserVersion() < 9) {
            return false;
        }
        if(browserInfo.browser() == browserInfo.browserEnum.Maxthon) {
            return false;
        }
        if(browserInfo.browser() == browserInfo.browserEnum.OperaMini) {
            return false;
        }
        return true;
    },
    supportsCSSPositionFixed: function () {
        if(browserInfo.browser() == browserInfo.browserEnum.AndroidBrowser) {
            return false;
        }
        if(browserInfo.browser() == browserInfo.browserEnum.OperaMobi) {
            return false;
        }
        return true;
    },
    supportsCSSColumnCount: function () {
        return true;
    }
};
if(!browserInfo.supportsBrowser()) {
    var b;
    b = "browsernotsupported.html";
    window.location = b;
}
