const user ={
    isJedi: true
}

const user2 = {
    firstName: "Luke",
    lastName: "skywalker",
    age: 19,
    isJedi: true
}

console.log(user2);
console.log('halo saya');
console.log(`Halo, nama saya ${user2.firstName, user2.lastName}`);
console.log(`Umur saya ${user2.age} tahun`);

//Array

let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);

myArray.push('JavaScript'); //menambahkan data di akhir array.
myArray.pop(); // mengeluarkan data atau elemen terakhir dari array
myArray.shift(); // digunakan untuk mengeluarkan elemen pertama dari array
myArray.unshift("Apple"); //menambahkan elemen di awal array

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(...favorites);const food = ["Seafood", "Salad", "Nugget", "Soup"];


const [firstFood, secondFood, thirdFood, fourthFood] = food;
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

const student = [
    { 
        nim: 1,
        name: "Alice",
        age: 22,
        major: "Computer Science"}, 
    {
        nim: 2,
        name: "Bob",
        age: 21,
        major: "Mathematics"},
    {
        nim: 3,
        name: "fadel",
        age: 19,
        major: "informatics"
    }];


    // CARA MEMANGGIL ARRAY OBEJK HARUS BIKIN VARIABEL BARU UNTUK MEMANGGIL SEMUANYA

    const DataMahasiswa = student.map(student => {
        return{
            name: student.name,
            nim: student.nim,
            major: student.major
        }
    })
    console.log(DataMahasiswa);

    // manipulasi dom

    let output = document.getElementById('outputData') // mengirim h2 (element) ke html
    output.innerHTML = `<h2> Data Mahasiswa </h2>`

    DataMahasiswa.forEach(student =>{
        output.innerHTML += `<h2> Nama Mahasiswa ${student.name}, nim Mahasiwa ${student.nim}, major ${student.major}</h2>`
    })

    