var ObjetSimple{
	"id" : "x32b",
	"title" : "Le titre d'un article",
	"content" : "Un article avec tout son contenu"

}

var ObjetSimple2{
	"title" : "Le titre",
	"liste" : [5, 8, 19]
}

var ObjetSimple3{
	"contact" : {
		"email" : "toto@gmail.com",
		"phone" : "098765432"
	},
	"stores" : {
		"Object1" : {
			"name" : " BestStore",
			"city" : "Bouston"
		},
		"Object2" : {
			"name" : "TestZone",
			"city" : "Paris"
		},
		"Object3" : {
			"name" : "ZeStore",
			"city" : "London"
		}
	}
}

console.log(ObjetSimple3[contact[email]]);