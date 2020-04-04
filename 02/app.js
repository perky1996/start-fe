console.log('app');

// // Create
// var todos = ['운동'];
// var todo = '게임';
// todos.push(todo);
// console.log(todos);

// // Read

// todos.forEach(function(todo){
//     console.log(todo)
// });

// Update
// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo){
//     return todo === updateTodo;
// });
// todos[updateIndex] = '공부';
// console.log(todos);

//Delete
// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);


// var isMan = true;
// if(isMan) {
//     console.log('1');
// } 
// else if(!isMan && isHero){

// }
// else {
//     console.log('2');
// }

// window.alert('1');
// var who = prompt('당신은 누구세요?');
// console.log(who);

// var isDelete = confirm('정말 삭제하시겠습니까?');
// console.log(isDelete);

// function sum(a, b){
//     return a + b;
// }
// console.log(sum(a, b));

// var car = {
//     year: '2014',
//     starting: function() {
//       console.log('starting..');
//     },
//   };

//   car.starting();

// (function() {
//     var a = 'a';
//     console.log(a);
// })();

// function sum(x, y) {
//     if (!y) y = 1;
//     console.log(x + y);
//   }
//   console.log(sum(3));
//   console.log(sum(3, 3));

//배열 평균값
// var count = [10, 20, 30, 40, 50, 60, 70, 100];

// var sum = 0;

// for(var i = 0; i < count.length; i++){
//     sum = sum + count[i]
// }
// console.log(sum / count.length);


//구구단문제
// for(var i=1; i<=9; i++){
    
//       console.log(i + "단");
    
//       for(var j=1; j<=9; j++){
    
//         console.log(i +"x"+ j + "=" + (i * j));
//       }
    
//     }

//구구단 함수
// var aaa = {
//     gugudan: function() {
//         for(var i=1; i<=9; i++){
    
//             console.log(i + "단");
          
//             for(var j=1; j<=9; j++){
          
//               console.log(i +"x"+ j + "=" + (i * j));
//             }
          
//           }
//     }
// };
// aaa.gugudan();

//두수의합
// var num, total = 0;

// for(var isEnd = false; isEnd === false; ){

//   num = prompt("숫자를 입력하세요");

//   if(num === null){
//     alert("합은 "+ total +" 입니다");
//     isEnd = true;
//     // break;
//   }
//   else {
//     total += parseInt(num, 10);
//   }
// }