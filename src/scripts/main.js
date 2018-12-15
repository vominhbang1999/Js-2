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


var str = "qwertyuiopasdfghjklzxcvbnm"
// var pass = "A1,B1,C2,D5,F3,H4,Y4,J1,C5,N4,M2,D6,N6,A4,B6,C3,D7,F7,H1,Y9,J4,C8,N5,M1,D2,N7"
var pass = "A1,A2,A3,A4,A5,A6,A7,A8,A9,B10,B1,B2,B3,B4,B5,B6,B7,B8,B9,C0,C21,C22,C23,C24,C25,C26"
var chu = "bang dien m m"

let m = str.split('')
let n = pass.split(',')

for (let key in m) {
	if (m.hasOwnProperty(key)) {
		let element = m[key];
		chu = chu.replace(new RegExp(element, 'g'), n[key])
	}
}
console.log(chu)
for (let key in m) {
	if (m.hasOwnProperty(key)) {
		let element = m[key];
		chu = chu.replace(new RegExp(n[key], 'g'), element)
	}
}
console.log(chu)
