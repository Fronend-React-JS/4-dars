// case 1
// let a = prompt("hafta kunlaridan birini kiriting raqamda kiriting:");

// a = a*1;

// switch (a) {
//   case 1:
//     console.log("dushanba");
//     break;

//   case 2:
//     console.log("seshanba");
//     break;

//   case 3:
//     console.log("chorshanba");
//     break;

//   case 4:
//     console.log("payshanba");
//     break;

//   case 5:
//     console.log("juma");
//     break;

//   case 6:
//     console.log("shanba");
//     break;

//   case 7:
//     console.log("yakshanba");
//     break;

//   default:
//     console.log("hazillashyapsanmi 7 ta hafat kuni bor xolos-ku");
//     break;
// }

// case 2 
// let a = prompt("olgan bahoyingizni kkiriting:")
// a = a*1;

// switch (a) {
//     case 1:
//         console.log("yomon"); 
//         break;

//     case 2:
//         console.log("qoniqarsiz"); 
//         break;

//     case 3:
//         console.log("qoniqarli"); 
//         break;

//     case 4:
//         console.log("yaxshi"); 
//         break;

//     case 5:
//         console.log("a'lo"); 
//         break;

//     default:
//         console.log("menga 1 dan 5 gacha son kiriting");
//         break;
// }

// case 3

// let a = prompt("1 dan 12 gacha son kiriting:")
// a = a*1;

// switch (a) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Qish"); 
//         break;

//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor"); 
//         break;

//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz"); 
//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz"); 
//         break;

//     default:
//         console.log("1 dan 12 gacha son kiriting");
//         break;
// }

// case 4 

// let a = prompt("1 dan 12 gacha son kiriting:")
// a = a*1

// switch (a) {
//   case 1:
//     console.log("31 kun");
//     break;

//   case 2:
//     console.log("28 4 yilda 29 kun");
//     break;

//   case 3:
//     console.log("30 kun");
//     break;

//   case 4:
//     console.log("30 kun");
//     break;

//   case 5:
//     console.log("31 kun");
//     break;

//   case 6:
//     console.log("30 kun");
//     break;

//   case 7:
//     console.log("31 kun");
//     break;

//   case 8:
//     console.log("31 kun");
//     break;

//   case 9:
//     console.log("30 kun");
//     break;

//   case 10:
//     console.log("31 kun");
//     break;

//   case 11:
//     console.log("30 kun");
//     break;

//   case 12:
//     console.log("31 kun");
//     break;

//   default:
//     console.log("xato qiymat");
//     break;
// }

// case 5 

// let a = prompt("Birinchi son kiriting: ");
// let b = prompt("Ikkinchi sonni kiriting: ");
// let operation = prompt("1-Qo'shish, 2-Ayrish, 3-Ko'paytirish 4-Bo'lish:");
// let Natija;
// a = a*1;
// b = b*1;

// switch (operation) {
//         case 1:
//         Natija = Number(a + b); 
//         document.write(Natija)
//         break;

//         case 2:
//         Natija = a - b; 
//         document.write(Natija)
//         break;

//         case 3:
//         Natija = a * b; 
//         document.write(Natija)
//         break;

//         case 4:
//         Natija = a / b; 
//         document.write(Natija)
//         break;
    
//     default:
//         document.write("xato")
//         break;
// }

// Case 6
 
// let a = +prompt(`uzunlik o'lchovini tanlang: \n 1. Detsimetr \n 2. Kilometr \n 3. Metr \n 4. Millimetr \n 5. Santimetr `);
// let Name;
// let line = +prompt(`Uzunligini kiriting: `);
// let Natija;
// switch (a) {
//     case 1:
//         Name = "detsimetr";
//         Natija = line / 10;
//         document.write(Natija + " " + 'metr');
//         break;
//     case 2:
//         Name = "kilometr";
//         Natija = line * 1000;
//         document.write(Natija + " " + 'metr');
//         break;
//     case 3:
//         Name = "metr";
//         Natija = line;
//         document.write(Natija + " " + 'metr');
//         break;
//     case 4:
//         Name = "millimetr";
//         Natija = line / 1000;
//         document.write(Natija + " " + 'metr');
//         break;
//     case 5:
//         Name = "santimetr";
//         Natija = line / 100;
//         document.write(Natija + " " + 'metr');
//         break;
//     default:
//         document.write("xatolik")
//         break;
// }

// case 7

let a = +prompt("og'irlik o'lchov birligini tanlang: \n 1. Kilogramm \n 2. Milligramm \n 3. Gramm \n 4. Tonna \n 5. Sentner");
let Name;
let weight = +prompt("Og'irlikni kiriting: ");
let Natija;

switch (a) {
    case 1:
        Name = 'Kilogramm';
        Natija = weight;
        break;
    case 2:
        Name = 'Milligram';
        Natija = weight / 1000000;
        break;
    case 3:
        Name = 'Gramm';
        Natija = weight / 1000;
        break;
    case 4:
        Name = 'Tonna';
        Natija = weight * 1000;
        break;
    case 5:
        Name = 'Sentner';
        Natija = weight * 100;
        break;
    default:
        break;
}





































// While1

// let A, B, remainingLength;
// while (true) {
//     A = +prompt('A kesmani uzunligini kiriting: ')
//     B = +prompt('B kesmani uzunligini kiriting: ')
//     if (A <= B) {
//         alert("A kesma B kesmadan katta bo'lishi kerak")
//     } else if (isNaN(parseFloat(A)) || isNaN(parseFloat(B))) {
//         alert("Iltimos, faqat son kiriting")
//     } else {
//         break;
//     }
// };
// remainingLength = A;
// while (remainingLength >= B) {
//     remainingLength -= B;
// }
// document.write(remainingLength);

