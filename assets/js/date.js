
//FECHA 
var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
//Agregar un cero en meses de una cifra.
function addZero(i) {
	if (i < 10) {
		i = '0' + i;
	}
	return i;
}

function toDay() {
	//aplico funcion addZero()
	dd = addZero(dd);
	mm = addZero(mm);
	return dd + '/' + mm + '/' + yyyy; //devuelve fecha ordenada en string
}


/* DESCUENTOS a fin de mes
if (toDay(dd) <= 31 && toDay(dd) >= 27) {
	console.log("Hay descuentos 10%off ");
} else {
	console.log("precio sin descuento");
}
*/




