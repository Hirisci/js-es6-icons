const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const containerHTMl = document.querySelector(".container.grid");
const boxIcon = document.querySelector("#boxIcon").content;
const select = document.querySelector("#type");

const iconsAnimal = icons.filter((word => word.type ==="animal"));
const iconsVegetable = icons.filter((word => word.type ==="vegetable"))
const iconsUser = icons.filter((word => word.type ==="user"))


function printIconBox(where, ogg){
	let box = boxIcon.cloneNode(true);
	box.querySelector("i").classList.add(ogg.family, ogg.prefix + ogg.name, ogg.color)
	box.querySelector("span").innerHTML = ogg.name;
	where.append(box)
}

function printListIcon(where, arr){
	arr.forEach(element => printIconBox(where, element));
}

printListIcon(containerHTMl, icons)

select.addEventListener("change", 
	function (){
		console.log(this.value);

		switch (this.value) {
			case "animal":
				containerHTMl.innerHTML = "";
				printListIcon(containerHTMl, iconsAnimal);
				break;
			case "vegetable":
				containerHTMl.innerHTML = "";
				printListIcon(containerHTMl, iconsVegetable);
				break;
			case "user":
				console.log(iconsUser)
				printListIcon(containerHTMl, iconsUser);
			break;
			default:
				printListIcon(containerHTMl, icons);
			break;
		}
})