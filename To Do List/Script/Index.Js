const item = document.getElementById("item");
const todobox = document.querySelector(".to-do-list");
const close = document.getElementById("close");

item.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addToDo(event.target.value);
    event.target.value = "";
  }
});

const addToDo = (item) => {
  const list = document.createElement("li");
  list.innerHTML = `${item} <i class='bx bxl-xing'></i>`; //? if you want to change the icon so paste the i tag here
  todobox.appendChild(list);

  list.querySelector(".bx").addEventListener("click", () => {
    list.remove(); //? --- this method is use remove the list.
  });
};

//? second method (professional method) is method ko use krne se jab user cross icon per click kre ga tu corss icon dosre icon mein tabdeel hojay ga

// const addToDo = (item) => {
//   const list = document.createElement("li");
//   const icon = document.createElement("i");
//   icon.classList.add("bx", "bx-x"); //? classlist add krte waqt yahan per first parameter box icon k refernce hy or dosra parameter icon ki class hy joh hamein pehle dikhani h enter krne k baad or jab hum first class per click krenge jo second icon ayga us ko neche toggle mein define krdenge first class k toggle k neche upper bhi krskte hain but neche krne se aik sequence bana rehta hun.
//   //?  console.log(icon.classList.length); checking the number of classes in the icon. We can use this method to check how many classes does the element have.

//   list.appendChild(document.createTextNode(item)); //* is ko use krne se yeh hoga k 'item' k under joh bhi text ayga peche se jo user ne input dia hy woh list k under set hoga list var mein. aur list var mein li hy joh hum ne upper create ki hy ab li mein user k input joh bhi ho woh set hojay ga is k baad phir hum ne icon k under jo classes ad ki thi boxicons ki us ko hum ne list k under dal diya h means k list.appenchild ka use krke icons bhi list under agaya. tu yeah hua h
//   list.appendChild(icon);
//   list.querySelector(".bx", ".bx-x").addEventListener("click", () => {
//     list.classList.toggle("done");
//     icon.classList.toggle("bx-chevron-right"); //? idhar pehle cross ka icon pehle bana hua ayga then phir right wala icon bana hua aga jab cross ka icon toggle tu aur agar mein yeh chahta hun k pehle right ka icon bana hua aay tu us k liye mujhe classlist add krte waqt right wale icon ki class lagane pary gi aur phir query selector mein use tarah
//     icon.classList.toggle("bx-x"); //? yahan per basically 2 icons add hy aik on hoga tu dosra off hoga.
//   });

//   todobox.appendChild(list);
// };
