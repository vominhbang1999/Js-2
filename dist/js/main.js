'use strict';

eval(function (p, a, c, k, _e, r) {
    _e = function e(c) {
        return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };if (!''.replace(/^/, String)) {
        while (c--) {
            r[_e(c)] = k[c] || _e(c);
        }k = [function (e) {
            return r[e];
        }];_e = function _e() {
            return '\\w+';
        };c = 1;
    };while (c--) {
        if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
    }return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.head.appendChild(msViewportStyle);
}

$(function () {
    var nua = navigator.userAgent;
    var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%');
    }
});
// var ahihi= [a,b,c,d,e,f]

// console.log(ahihi)

// for (let key in ahihi) {
// 	if (ahihi.hasOwnProperty(key)) {
// 		let element = ahihi[key];
// 		console.log(element, key)

// 	}
// }

// var ahihi = [1,3,45,678,223,5,78,83]
// console.log(ahihi)

// let a = ahihi.join()
// console.log(a)

// var kkk = 'dong;tien;ne;may;dua'
// console.log(kkk)

// let mmm = kkk.split(';')
// console.log(mmm)


var str = "qwertyuiopasdfghjklzxcvbnm";
// var pass = "A1,B1,C2,D5,F3,H4,Y4,J1,C5,N4,M2,D6,N6,A4,B6,C3,D7,F7,H1,Y9,J4,C8,N5,M1,D2,N7"
var pass = "A1,A2,A3,A4,A5,A6,A7,A8,A9,B10,B1,B2,B3,B4,B5,B6,B7,B8,B9,C0,C21,C22,C23,C24,C25,C26";
var chu = "bang dien m m";

var m = str.split('');
var n = pass.split(',');

for (var key in m) {
    if (m.hasOwnProperty(key)) {
        var element = m[key];
        chu = chu.replace(new RegExp(element, 'g'), n[key]);
    }
}
console.log(chu);
for (var _key in m) {
    if (m.hasOwnProperty(_key)) {
        var _element = m[_key];
        chu = chu.replace(new RegExp(n[_key], 'g'), _element);
    }
}
console.log(chu);
//# sourceMappingURL=main.js.map
