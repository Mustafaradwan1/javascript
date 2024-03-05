//   javascript


// typeof   
// console.log(typeof ('osama'))             string
// console.log(typeof ('500'))               string bec('')
// console.log(typeof (500))                 Number
// console.log(typeof [1,2,'os'])            object  لان array تندرج تحت نوع ال object
// let a = {1: 2,2: 2}                       object
// console.log(typeof a)
// ########################################################

// Number
// let a = 500.59522;                           
// console.log(a.toString());                 بتحول الرقو ل string
// console.log(a.toFixed());                  501   بترجع string مقرب لاقرب رقم صحيح 
// console.log(a.toFixed(2));                 500.60   بترجع رقم عشرى مقرب لاقرب رقم وبيكون string
// let a = '500.5 osama';                         
// console.log(parseInt(a));                  بترجع رقم صحيح من ال string (500)
// console.log(parseFloat(a));                بترجع رقم عشرى من ال string (500.5)
// console.log(Number.isInteger(a));           هل هو رقم صحيح وركز على رقم صحيح (false) لان المتغير اساسا string + مش رقم صحيح

// ########################################################

// Math

// let a = 500.4;
// console.log(Math.trunc(a))                  (500) بيشيل الرقم العشرى 
// console.log(Math.round(a))                  بيقرب العدد العشرى  (500)
// let a = 500.5;
// console.log(Math.round(a))                  بيقرب العدد العشرى  (501)
// console.log(Math.ceil(a))                   (501) بيقرب العدد العشرى لاعلى قيمة 
// console.log(Math.floor(a))                  (501) بيقرب العدد العشرى لاقل قيمة 
// let a = 2;
// let b = 3;
// console.log(Math.min(a,b))                 (2)  بيختار اقل قيمة من مجموعه اعداد 
// console.log(Math.max(a,b))                 (3)  بيختار اقل قيمة من مجموعه اعداد 
// console.log(Math.pow(a,b))                 (2 * 2 * 2) = (2 ** 3) زى الاس **  
// let a = [1,2,3,4,5]
// console.log(Math.random(a) * a.length)      رقم عشوائى

// ########################################################

// string
// let n = 'mustafa radwan';
//index []                              يبدا من 0
// length                               يبدا من 1
// console.log(n[0])                    بتجيب اول حرف m
// console.log(n[1])                    بتجيب تانى حرف u    وهكذا
// console.log(n.charAt(1))             زى الi ndex
// console.log(n.length)                عدد الحرف مع حساب الفواصل اذا وجد
// console.log(n.trim())                تحذف المسافات اللى قبل ولعد العنصر    
// console.log(n.toLocaleLowerCase())   تجعل الكلمة كلها حروف صغيرة
// console.log(n.toLocaleUpperCase())   تجعل الكلمة كلها حروف كبيرة


// let n = 'mustafa mohamed radwan';
//  console.log(n.indexOf('mustafa'))    (0)  بتبدا من بديله كلمة واقوله ابحث عنها لو موجودة قولى هى index كام    
//  console.log(n.indexOf('lol'))           (-1)   لو الكلمة مش موجوده بتكون النتيجة
// console.log(n.indexOf('radwan',8))         (16)  هنا بحددلو مكان يبدا منة ويشوف الكلمة بتدا من index كام 
// console.log(n.lastIndexOf('radwan'))         نفس اللى فوق بس بيبدا من الاخر 
// console.log(n.slice(0,5))                   (musta) بيقع الكلمه من بدايه لنهاية اللى تم تحديدها 
// console.log(n.repeat(2))                    تكرار بقوله كرر مرتين 
// console.log(n.split(" "))                     عبارة عن قص وهنا بقولة قص من عند المسافات وهيتم تحويلها الى arry
// console.log(n.split("|"))                    هنا هيقص من عند العلامه دى لو كانت موجودة طبعا
// console.log(n.split(""))                    هنا هيقص من عند كا حرف 
// console.log(n.substring(0,15))              زى ال slice

// ########################################################

// ==                                  تعتمد القيمة فقط
// !=                                  لا يساوى
// ===                                 تعتمد القيمة ونوع البيانات
// !==                                 لا تساوى
// >                                   اكبر من
// >=                                  اكبر من او تساوى
// <                                   اصغر من
// <=                                  اصغر من او تساوى
// !                                   not
// &&                                  and
// ||                                  or
// ########################################################


// ########################################################
// if لو 
// if (شرط){كود}   
// if(1+1 === 2){
//     console.log(`true`)
// }   
// else if                   لو مش دة يبقى دة بمعنى ؟    
// if(1+1 === 3){
//     console.log(`the first true`)              لو مش دى 
// }else if(1+2 ===  3){
//      console.log(`the sec true`)               تبقى دى 
// }
// else                      لو مش دة ولا دة يبقى نفذ اللى عندى وخلاص
// if(1+1 === 3){
//     console.log(`the first true`)              لو مش دى 
// }else if(1+3 ===  3){
//      console.log(`the sec true`)                تبقى دى ولو مش دى هى كمان
// }else{
//     console.log(`all is wrong`)                نفذ المحتوى اللى عندى 
// }
// nested if
// let a = 1;
// let b = '1';
// if(typeof a === typeof Number()){           هنا بقوله لو المتغير a نوعه بيساوى رقم هتنفذ الى جواك
//     if(Number.isInteger(a)){                هنا بقوله لو الرقم اللى فى المتغير هو رقم صحيح نفذ التالى
//         console.log(`true`)
//     }else{
//         console.log(`false`)
//     }
// }
// ########################################################

//array []
// let a = ['mustafa','radwan']
// console.log(a[0])      بقولة عايز انديكس 0 اللى هو مصطفى
// console.log(a[0][0])      بقولة عايز اندكس 0 وهات منه اندكس 0  =======  m

// nested array
// let a = ['mustafa','radwan',[1,2,'asmaa']];
// console.log(a[2])       عايز انديكس 2 اللى هو الarray      
// console.log(a[2][2])     عايز من الاراى انديكس 2 اللى هو اسماء
// console.log(a[2][2][0])  عايز من اسماء انديكس 0 ===== a
// a[2][2] = 'hager'
// console.log(a[2][2])     هنا غيرت قيمة اسماء الى هاجر

// methods array
// let a = ['mustafa','radwan',[1,2,'asmaa']];
// a.unshift('ali')    اضافة عنصر فى بداية ال array
// a.push('ahmed')        اضافة عنصر فى اخر ال array 
// a.shift()                  حذف اول عنصر فى array
// a.pop()                  حذف اخر عنصر فى array
// a.sort()                 ترتيب المصفوفة ابجديا ابتداء من الارقام ثم الاحرف
// a.reverse()                عكس المصفوفة بمعنى ان اللى فى الاول هيبقى فى الاخر والعكس
// a.indexOf(? اجبارى , ?)    الاولى هى اسم الشئ اللى بتبحث عنة ودى اجبارى وال2 هى بداية البحث ودى اختارى لو محدتش هيبدا من انديكس 0 
// a.indexOf('mustafa')   === 0
// console.log(a.indexOf('mustafa',5)) === -1  عشان مش موجود 
// a.lastIndexOf()    بيبحث بس من الاخر
// a.splice(؟و؟و؟)   بداية ثم حذف ثم اضافة  
// a.splice(1,0,'mona')   هبداء من انديكس 1 ومش هحذف حاجة وهضيف منى
// a.splice(1,1,'mona')      هبدا من انديكس 1 وهحذف عنصر اللى هو راضوان وهضيف عنصر اللى هو منى
// a.splice(1,1)              هبدا من انديكس 1 وهحذف عنصر اللى هو راضوان 
// console.log(a)

// ########################################################
// loop         هو عبارة عن لوب يتم على مجموعه من العناصر لتحقيق هدف معين 
// كالتالى ؟
// for(let i=?;i<?i++){
// }

// -1  let i = ?   متغير اسمه ( i ممكن نستخدم اى حرف تانى عادى بس المتعارف عند المبرمجين هو ) i تعنى index  
// i = ?  علامه الاستفهام هى رقم الindex اللى هبدا من عندة
// -2 i<? or i<=?  او ايا كان نوع العلامه على حسب انت عايز ايه 
// ? = اسم الشئ اللى هعمل علية لوب بيكون مصفوفه اذاااا وجد ولو مش موجود ممكن نستخدم رقم عادى 
// -3 i++ تعنى زود 1 كل مرة 
// for(let i=0;i<6;i++){
// console.log(i)    console = 0,1,2,3,4,5    صفر هو بداية اللوب عشان انا اللى حددت دة وخمسه هى النهاية عشان قولته اصغر من 6
// }
// let a = [1,2,3,4,5,6];
// for(let s = 0;s<a.length;s++){
//     console.log(s)       نفص النتيجه اللى فوق
// }
// let a = [1,2,3,4,5,6];
// if(5 < 6){
//     for(let i = 0;i<a.length;i++){              نفس النتيجة بس باستخدام if
//     console.log(i)      
// }
// }
// for(let i = 2018;i<=2023;i++){           هنا بقولة ابدا اللوب من 2018 لحد 2023   
//         if(i===2020){
//             break                        تعنى وقف اللوب عندها=== 2018 2019 
//         }
//         console.log(i)
// }
// for(let i = 2018;i<=2023;i++){             
//         if(i===2020){
//             continue                        تعنى اعمل تخطى وكمل ==== 2018 2019 2021 2022 2023
//         }
//         console.log(i)
// }

// ########################################################

// function    
// انواعها
// function lol(){                 عادية مش بداخد قيمة فى ال() بس بنحتاج نعملها call
//     for(let i = 2018;i<=2023;i++){             
//             if(i === 2020){
//                 break               
//             }
//             console.log(i)
//     }
// }
// lol()
// function lol(a,b){                   تاخذ قيمة داخلها باى اسم ويتم استدعاء الاسم فى ال call
//     for(let i = a;i<=b;i++){             
//             if(i === 2020){
//                 continue               
//             }
//             console.log(i)
//     }
// }
// lol(2018,2023)                يتم استداء القيمة داخلة

// let a = function(){                  من غير اسم عادى انونومس فانكشن
//     for(let i = 2018;i<=2023;i++){             
//             if(i === 2020){
//                 return true               الريتيرن تعنى رجع شئ 
// وهنا بقولة لو الشرط اتحقق وقف اللوب ورجع القيمة === 2018 2019
//             }
//             console.log(i)
//     }
// }()

// ########################################################
// object
// let a = {
//     a:1,
//     b:2
// }
// console.log(a.a)     === 1
// console.log(a.b)     === 2

// ########################################################
// forEach              سهلة جربوها هتعجبكوا
// let lis = Array.from( document.querySelectorAll('.ul li')) 
// lis.forEach((ele) =>{                                 بتعمل لوب 
//     ele.addEventListener('click',function(e){         عند الclick 
//         lis.forEach((el)=>{                           بعمل لوب تانى عشان
//             el.classList.remove('active')             عشان اقوله امسح كل الكلاس اللى جواك الاول active
//         })
//         e.currentTarget.classList.add('active')       هنا بقوله ضيف الكلاس على العنصر اللى ضغط علية active
//     })
// })



// ########################################################

//DOM  DOM DOM DOM DOM DOM DOM
// استدعاء عنصر 
// let a = document.getElementById('lol')     عن طريق الid           
// console.log(a)
// document.getElementsByClassName('lol')      عن طريق اسم الكلاس
// document.querySelector('')                 عن طريق الاسم
// document.querySelector('.')                 عن طريق الكلاس .
// document.querySelector('#')                عن طريق الid #
// document.querySelectorAll('')              nood list  مجموعه صور مثلا 
// document.getElementsByName('hi')

// ########################################################

// let a = document.getElementById('lol')  
// a.innerHTML = `<h2>hello</h2>`         اضافة تاج كامل داخل ال html
// let b = document.querySelector('.lol h1')  
// b.innerText = `hello`            اضافة محتوى داخل التاج
// let b = document.querySelector('.lol h1')  
// b.textContent = `hello`          اضافة محتوى داخل التاج

// let a = document.querySelector('#lol a');
// let b = a.getAttribute('href')
// let c = a.setAttribute('class','att')

// ########################################################

// let a = document.querySelector(`.lol`)       تم استدعاء العنصر
// let b = document.createElement('h1')         عملت متغير وانشات فية h1
// b.className='product';                       انشات كلاس للh1
// b.setAttribute('data-test','testing')        انشات att
// 1- b.textContent = 'can you read '    طريقة 1             اضافه محتوى داخل العنصر
// 2- let text = document.createTextNode('can you read');
// b.appendChild(text)         طريقة 2
// a.append(b)                                  دخلت العنصر داخل الاب اللى هو lol

// ########################################################
// Events       
// بعض الخواص مكتوبة على حسب النتيجة اللى ظاهرة فى ال console
// ممكن يكون فى خواص ليها استخدام افضل او مش دة المكان اللى بيتم استخدامها فية عشان كدة جرب الخاصية بايدك واعمل بحث عليها عشان توصل لافضل نتيجة
// onclick                       عند الضغط على الزر ثم تشيل صباعك من على الماوس
// oncontextmenu                 لما تضغط كليك يمين (لما تعوز تعمل ريفريش وتدوس كليك يمين)
// onmouseenter                  اول ماتقف على الزر من غير ما تضغط 
// onmouseleave                  اول ماتقف على الزار م غير ما تضغط ثم تمشى من عليه  يشتغل معاك
// onmousedown                   اول ما تضغط على الزر على طول مش محتاج تشيل صباعك من على الماوس 
// onmousemove                  من غير ماتضغط بمجرد ماتحرك الماوس على الزر مع كل تحريكة بتشتغل معاك تاااانى مع كل تحريكة
// onmouseout                   عندك حقل اول ماالماوس يجي علية يشتغل 
// onmouseover                  عندك حقل اول ماالماوس يجي علية يشتغل 
// onmouseup                    لو عندك حقل اول ماتضغط على الحقل عشان تدخل البيانات بيشتغل
// onblur                       حقل بدخل فية بيانات واول ماتطلع منه يسمع معاك
// ondblclick                   من اسمها تدوس مرتين على حقل او صورة او زرار
// onfocus                      اول ماتدوس على الحقل تشتغل
// onselect                     من اسمها عندك حقل فى كلام او اى كلام بمجرد ماتعمل select عليه تشتغل
// oninput                      طول مانت بتكتب داخل الحقل
// onkeydown                    طول مانت بتكتب داخل الحقل
// onkeyup                      طول مانت بتكتب داخل الحقل بس فى حاله فضلت دايس علي حرف معين مش هتشتغل لازم حرف بحرف
// ononline                     من اسمها وانت متصل بالنت
// onoffline                    وانت غير متصل بانت
// onscroll                     لما تعمل scroll للصفحة
// let a  = document.querySelector(`.sss`);
// a.oninput = function(){
//     console.log(`good`)
// }
// مينفعش نستخدمها اكتر من مرة على نفص العنصر  الاخيرة بتلغى الاولى

// ######################
// دة مثال زى الnav 
// بقوله اول ماالصفحة توصل عند ارتفاع 800 اعمل حاجه معينة
// document.body.style.height='5000px';
// window.onscroll = function(){
//     if(window.scrollY >= 800){
//         console.log(`good`)
//     }
// }

// addEventListener(`اسم الحدث`, function(){})              
// addEventListener('click', function(){})   
// addEventListener      بنكتب اسم الحدث بس بنشيل منه ال on 
// ممكن نستخدمها اكتر من مرة على نفس العنصر    
// window.addEventListener('scroll',function(){
//     if(window.scrollY >= 600){
//         console.log(`good`)
//     }
// })
// window.addEventListener('scroll',function(){
//     if(window.scrollY >= 800){
//         console.log(`فققق`)
//     }
// })
// ########################################################

// setTimeout(function,ms)   عايز الفنكشن تشتغل بعد وقت قد اية
// setTimeout(function(){
//     console.log('hi')
// },3000)

// setTimeout(sayhi,3000)
// function sayhi(){
//     console.log('hi')
// }

// setTimeout(sayhi,3000,'mustafa')
// function sayhi(user){
//     console.log(`hi ${user}`)
// }

// setTimeout(function(){
//     sayhi('mustafa')
// },3000)
// function sayhi(user){
//     console.log(`hi ${user}`)
// }

// اشكال مختلفة للاستخدام 
// clearTimeout()
// مثال فى بعض الصفحات بعد وقت معين بيظهر موديل او اعلان بعد وقت معين من فتح الصفحة وهنا ممكن نستخدم ال setTimeout
// ممكن نعمل زرار اسمه عدم العرض مرة اخرى كل وظيفتة انو بيوقف الsetTimeout 
// وظيفتها انها بتوقف عمل ال setTimeout
// let btn = document.querySelector(`#btns`)
// let a =  setTimeout(sayhi,3000)
// function sayhi(){
//     console.log('hi')
// }
// btn.addEventListener('click',function(){
//     clearTimeout(a)
// })

// ########################################################

// setInterval(function(),ms)
// setInterval(function(){
//     sayhi('mustafa')
// },3000)
// function sayhi(user){
//     console.log(`hi ${user}`)
// }
// نفس فكرة الل setTimeout باختلاف انها بتشغل الحدث مرارا وتكرارا
// clearInterval()   بيوقف عمل ال setInterval
// let a = setInterval(function(){
//     sayhi('mustafa')
// },1000)
// function sayhi(user){
//     console.log(`hi ${user}`)
// }
// let btn = document.querySelector(`#btns`)
// btn.addEventListener('click',function(){
//     clearInterval(a)
// })

// ########################################################

// let a = "2";
// a++           
// a--
// ++a
// --a
// +a
// console.log(a++)   === 2       بيخزن النتيجة 
// console.log(a)     === 3       بيطبع النتيجة 
// console.log(a--)   === 2       بيخزن النتيجة 
// console.log(a)     === 1       بيطبع النتيجة 
// #####
// console.log(++a)   === 3       بيطبع الاول
// console.log(a)     === 3       وبعدين يخزن
// console.log(--a)   === 1       بيطبع الاول
// console.log(a)     === 1       وبعدين يخزن

// console.log(+a)     === 2      بيستخرج الرقم من داخل ال string 
// مثال 
// console.log(a + a)     === 22       اعتبرهم 2 string
// console.log(+a + +a)      === 4         اعتبرهم 2 number

// ########################################################
// let a = new Date()Thu Mar 09 2023 18:15:07 GMT+0200 (Eastern European Standard Time)

// الكلام دة على حسب الوقت بتاعى دلوقتى
// console.log(a.getDate())             9تاريخ اليوم
// console.log(a.getDay())              4 day of the week هنا الاسبوع بيبدا من يوم الاحد وبيكون بالاندكس يعنى يوم الاحد هو انديكس 0 وانهاردة الخميس يعنى انديكس 4
// console.log(a.getFullYear())         2023 التاريخ
// console.log(a.getHours())            18   اى الساعه 6
// console.log(a.getMinutes())          19 الدقيقة
// console.log(a.getMonth())            2   فى خانة الشهر بيبدا يساوى الشهور بالاندكس يعنى شهر واحد بيكون انديكس 0 واحنا دلوقتى فى شهر 3 يعنى انديكس 2
// console.log(a.getSeconds())          الثوانى
// console.log(a.getTime())                الوقت من بداية السنة حتى الان بس بالMilliseconds

// مثال 1 عن استدعاء اليوم والساعه وهكذا الخاصين بالنهاردة  (واضحة ولا اية )
// let day = document.querySelector('.day');
// let hour = document.querySelector('.hour');
// let min = document.querySelector('.min');
// let sec = document.querySelector('.sec');
// let f = setInterval(()=>{
//     let date = new Date();
//     let d = date.getDate();
//     let h = date.getHours() -12;
//     let m = date.getMinutes();
//     let s = date.getSeconds();
//     day.textContent = d;
//     hour.textContent = h;
//     min.textContent = m;
//     sec.textContent = s;
// },1000)           

// مثال 2 عن حدث منتظر فى المستقبل
// let d = new Date("Mar 27 2023 00:56:54 GMT").getTime()
// let day = document.querySelector('.day');
// let hour = document.querySelector('.hour');
// let min = document.querySelector('.min');
// let sec = document.querySelector('.sec');

// let f = setInterval(()=>{
//     let a = new Date().getTime();
//     let b = d - a ;
//     let dtarget = Math.floor(b / (1000 * 60 * 60 * 24)) 
//     let htarget  = Math.floor(b % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
//     let mtarget  = Math.floor(b % (1000 * 60 * 60) / (1000 * 60))
//     let starget  = Math.floor(b % (1000 * 60) / (1000))
//     day.textContent = dtarget + "" + "D";
//     hour.textContent = htarget + "" + "H";
//     min.textContent = mtarget + "" + "M";
//     sec.textContent = starget + "" + "S";
//     if(b < 0){
//         clearInterval(f)
//     }
// },1000)

// ########################################################
// oop 

// class users(id,name,salary){
//     this.theid=id;
//     this.thename=name;
//     this.thesalary=salary + 1000;
// }

// let obj1 = new users(100,`mustafa`,9000);
// let obj2 = new users(100,`mohamed`,8000);
// let obj3 = new users(100,`radwan`,7000);

// console.log(obj1)
// console.log(obj1.theid)
// console.log(obj1.thename)
// console.log(obj1.thesalary)

// console.log(obj2)
// console.log(obj2.theid)
// console.log(obj2.thename)
// console.log(obj2.thesalary)

// console.log(obj3)
// console.log(obj3.theid)
// console.log(obj3.thename)
// console.log(obj3.thesalary)

// ##################
// class users {
//     constructor(id, name, salary) {
//         this.theid = id;
//         this.thename = name;
//         this.thesalary = salary;
//     }
// }

// let obj1 = new users(100,`mustafa`,9000);

// console.log(obj1)
// console.log(obj1.theid)
// console.log(obj1.thename)
// console.log(obj1.thesalary)

// // its a copy from users (true or false) 
// console.log(obj1 instanceof users)                            
// // هل الconstructor بتاعة ماخوذ من ال users
// console.log(obj1.constructor === users)                            

// ###################

// class users {
//     constructor(id, name, salary) {
//         this.theid = id;
//         this.thename = name;
//         // this.thesalary = salary;
//         this.thesalary = salary < 9000 ? salary + 500 : salary;
//         this.msg = function(){
//             return `hello ${this.thename} your salary is ${this.thesalary}`
//         }
//     }
//     // methods
//     msgcode(){
//         return `hello ${this.thename} your salary is ${this.thesalary}`
//     }
// }

// let obj1 = new users(100,`mustafa`,9000);
// let obj2 = new users(100,`hassen`,8000);
// console.log(obj1.theid)
// console.log(obj1.thename)
// console.log(obj1.thesalary)
// console.log(obj1.msg())
// console.log(obj1.msgcode())


// ##################
// class users {
//     constructor(id, name, salary) {
//         this.theid = id;
//         this.thename = name;
//         this.thesalary = salary;
//     }
//     // methods
//     updatename(newname){
//         this.thename = newname
//     }
// }

// let obj1 = new users(100,`mustafa`,9000);
// let obj2 = new users(100,`hassen`,8000);
// console.log(obj1.thename)
// obj1.updatename('osama')
// console.log(obj1.thename)


// ######################

// class users {
//     // static   بتخلى الكلاس هو اللى يقراه بس 
//     static conut = 0;
//     constructor(id, name, salary) {
//         this.theid = id;
//         this.thename = name;
//         this.thesalary = salary;
//         users.conut++     هنا بقوله مع كل مستخدم جديد زود الconut
//     }
//     // methods
//     updatename(newname){
//         this.thename = newname
//     }
//     static  contmember(){
//         return `cont member is ${this.conut}` 
//     }
// }

// let obj1 = new users(100,`mustafa`,9000);
// let obj2 = new users(100,`hassen`,8000);


// console.log(users.conut)    0    الكلاس قراه
// console.log(obj1.conut)     undefined    النسخة الجديدة مش عارفة تقراه
// console.log(users.contmember())      الكلاس قراه بعدد الconut = 2
// console.log(obj1.contmember())undefined    النسخة الجديدة مش عارفة تقراه

// ######################
// paent class
// class users {
//     constructor(id, name) {
//         this.theid = id;
//         this.thename = name;
//     }
//     // methods
//     sayhello(){
//         return `heloo ${this.thename}`
//     }
// }
// // derived class               
// class admin extends users {              
//     constructor(id, name,email) {
//         super(id,name)         هنا بيورث من اليوزر الid and name
//         this.e = email
//     }
//     newname(news){
//         this.thename = news;      هنا لو عايز اغير اسم الname
//     }
// }
// class customar extends admin {              
//     constructor(id,name,email,abilaty) {
//         super(id,name,email);     هنا بيورث من الادمن id and name and email 
//         this.ab = abilaty         مع العلم ان الادمن اساسا وارث من اليوزر وهكذا
//     }
// }
// let obj1 = new users(1033720618,`mustafa`)
// let obj2 = new admin(1033720618,`mohamed`,`mustafaradwan1098@gmail.com`)
// let obj3 = new customar(1033720618,`radwan`,`mustafaradwanblablabla@gmail.com`,90)

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// console.log(obj1.theid)
// console.log(obj1.thename)
// console.log(obj1.sayhello())      الاسم اللى موجود فى الname  (mustafa)

// console.log(obj2.theid)
// console.log(obj2.thename)          (mohamed)
// console.log(obj2.e)                 
// obj2.newname(`osama`)           (osama) طباعة الاسم الجديد     
// console.log(obj2.sayhello())    الاسم الجديد اللى انا طبعتة (osama)

// console.log(obj3.theid)
// console.log(obj3.thename)
// console.log(obj3.e)
// console.log(obj3.ab)
// console.log(obj3.sayhello())   الاسم عادى (radwan)


// ###################

// class users {
//     // private property
//     // بشوف الخاصية اللى عايز اخليها خاصة وغير مرئية واضع جانبها #

//     // وبعد كدة لازم اعمل للخاصية declared
//         #s;
//         constructor(id, name,salary) {
//             this.id = id;
//             this.n = name;
//             this.#s = salary
//         }
//         // methods
//         // اى عنصر داخل الكلاس يقدر يشوف العنصر المخفى 
//         sayhello(){      
//             return parseInt (this.#s)   
//         }
// }
// // متقدرش تاكسس على العنصر مباشرة لانه مخفى ولن يتم قرائتة
// let obj1 = new users(1033720618,`mustafa`,"7000")
// console.log(obj1.sayhello())

// #####################
// Add To Prototype Chain
// class users {
//         constructor(id, name) {
//             this.id = id;
//             this.n = name;
//         }
//         // methods
//         sayhello(){
//             return `hello ${this.n}`
//         }
// }
// let obj1 = new users(1033720618,`mustafa`)
// console.log(obj1.n )
// console.log(obj1.sayhello())

// users.prototype.welcome = function(){       اضافة methods لليوزر داخل الprototype
//     return `welcome ${this.n}`
// }
// console.log(obj1.welcome())   بيتم استدعائها 

// Object.prototype.makecake = "hello worled";      اضافة خاصية داخل الاوبجيكت بروتوتايب
// console.log(obj1.makecake)                             بيتم استدعائها 

// String.prototype.add =function(){
//     return `.${this}.`
// }
// let str = "mustafa";
// console.log(str.add())


// #######################

// let mypro = {
//     a:1,
//     b:2,
// }
// Object.defineProperty(mypro,"c",{
//     writable:true,
//     enumerable:true,
//     configurable:true,
//     value:3,
// })


// for(let  prop in mypro){
//     console.log(prop, mypro[prop])
// }
// console.log(mypro)

// ########################################################