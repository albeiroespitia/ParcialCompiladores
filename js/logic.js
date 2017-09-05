class Automata{
	constructor(lexema){
		this.error = -1;
		this.aceptar = 0;
		this.lexema = lexema;
		this.contador = 0;
	}
	sixthState(){}
	zeroState(){
		if((/[a-h]|[j-m]|o|q|s|[u-z]/.test(this.lexema[this.contador])) && (this.lexema[this.contador] != undefined)){
			this.contador++;
			return this.sixthState();
		}
		switch(this.lexema[this.contador++]){
			case '+': return this.firstState();
			case '-': return this.secondState();
			case '=': return this.thirdState();
			case '0': return this.error;
			case '1': return this.fourthState();
			case '2': return this.fourthState();
			case '3': return this.fourthState();
			case '4': return this.fourthState();
			case '5': return this.fourthState();
			case '6': return this.fourthState();
			case '7': return this.fourthState();
			case '8': return this.fourthState();
			case '9': return this.fourthState();
			case 'p': return this.eighthState();
			case 'r': return this.sixthState();
			case 'i': return this.sixthState();
			case 'n': return this.sixthState();
			case 't': return this.sixthState();
			default: return this.error;
		}
	}
	firstState(){
		if(this.lexema.length == this.contador){
			return this.aceptar;	
		}else{
			return this.error;
		}
	}
	secondState(){
		if(this.lexema.length == this.contador){
			return this.aceptar;	
		}else{
			return this.error;
		}
	}
	thirdState(){
		if(this.lexema.length == this.contador){
			return this.aceptar;	
		}else{
			return this.error;
		}
	}
	fourthState(){
		if((/[a-h]|[j-m]|o|q|s|[u-z]/.test(this.lexema[this.contador])) && (this.lexema[this.contador] != undefined)){
			this.contador++;
			return this.fifthState();
		}
		switch(this.lexema[this.contador++]){
			case '+': return this.fifthState();
			case '-': return this.fifthState();
			case '=': return this.fifthState();
			case '0': return this.fourthState();
			case '1': return this.fourthState();
			case '2': return this.fourthState();
			case '3': return this.fourthState();
			case '4': return this.fourthState();
			case '5': return this.fourthState();
			case '6': return this.fourthState();
			case '7': return this.fourthState();
			case '8': return this.fourthState();
			case '9': return this.fourthState();
			case 'p': return this.fifthState();
			case 'r': return this.fifthState();
			case 'i': return this.fifthState();
			case 'n': return this.fifthState();
			case 't': return this.fifthState();
			default: return this.error;

		}
	}
	fifthState(){
		if(this.lexema.length == this.contador){
			return this.aceptar;	
		}else{
			return this.error;
		}
		
	}
	sixthState(){
		if((/[a-h]|[j-m]|o|q|s|[u-z]/.test(this.lexema[this.contador])) && (this.lexema[this.contador] != undefined)){
			this.contador++;
			return this.sixthState();
		}
		switch(this.lexema[this.contador++]){
			case '+': return this.seventhState();
			case '-': return this.seventhState();
			case '=': return this.seventhState();
			case '0': return this.seventhState();
			case '1': return this.seventhState();
			case '2': return this.seventhState();
			case '3': return this.seventhState();
			case '4': return this.seventhState();
			case '5': return this.seventhState();
			case '6': return this.seventhState();
			case '7': return this.seventhState();
			case '8': return this.seventhState();
			case '9': return this.seventhState();
			case 'p': return this.sixthState();
			case 'r': return this.sixthState();
			case 'i': return this.sixthState();
			case 'n': return this.sixthState();
			case 't': return this.sixthState();
			default: return this.error;

		}
	}
	seventhState(){
		if(this.lexema.length == this.contador){
			return this.aceptar;	
		}else{
			return this.error;
		}
	}
	eighthState(){
		if((/[a-h]|[j-m]|o|q|s|[u-z]/.test(this.lexema[this.contador])) && (this.lexema[this.contador] != undefined)){
			this.contador++;
			return this.sixthState();
		}
		switch(this.lexema[this.contador++]){
			case '+': return this.thirteenthState();
			case '-': return this.thirteenthState();
			case '=': return this.thirteenthState();
			case '0': return this.thirteenthState();
			case '1': return this.thirteenthState();
			case '2': return this.thirteenthState();
			case '3': return this.thirteenthState();
			case '4': return this.thirteenthState();
			case '5': return this.thirteenthState();
			case '6': return this.thirteenthState();
			case '7': return this.thirteenthState();
			case '8': return this.thirteenthState();
			case '9': return this.thirteenthState();
			case 'p': return this.sixthState();
			case 'r': return this.ninthState();
			case 'i': return this.sixthState();
			case 'n': return this.sixthState();
			case 't': return this.sixthState();
			default: return this.error;

		}
	}
	ninthState(){
		if((/[a-h]|[j-m]|o|q|s|[u-z]/.test(this.lexema[this.contador])) && (this.lexema[this.contador] != undefined)){
			this.contador++;
			return this.sixthState();
		}
		switch(this.lexema[this.contador++]){
			case '+': return this.thirteenthState();
			case '-': return this.thirteenthState();
			case '=': return this.thirteenthState();
			case '0': return this.thirteenthState();
			case '1': return this.thirteenthState();
			case '2': return this.thirteenthState();
			case '3': return this.thirteenthState();
			case '4': return this.thirteenthState();
			case '5': return this.thirteenthState();
			case '6': return this.thirteenthState();
			case '7': return this.thirteenthState();
			case '8': return this.thirteenthState();
			case '9': return this.thirteenthState();
			case 'p': return this.sixthState();
			case 'r': return this.sixthState();
			case 'i': return this.tenthState();
			case 'n': return this.sixthState();
			case 't': return this.sixthState();
			default: return this.error;

		}
	}
	tenthState(){
		if((/[a-h]|[j-m]|o|q|s|[u-z]/.test(this.lexema[this.contador])) && (this.lexema[this.contador] != undefined)){
			this.contador++;
			return this.sixthState();
		}
		switch(this.lexema[this.contador++]){
			case '+': return this.thirteenthState();
			case '-': return this.thirteenthState();
			case '=': return this.thirteenthState();
			case '0': return this.thirteenthState();
			case '1': return this.thirteenthState();
			case '2': return this.thirteenthState();
			case '3': return this.thirteenthState();
			case '4': return this.thirteenthState();
			case '5': return this.thirteenthState();
			case '6': return this.thirteenthState();
			case '7': return this.thirteenthState();
			case '8': return this.thirteenthState();
			case '9': return this.thirteenthState();
			case 'p': return this.sixthState();
			case 'r': return this.sixthState();
			case 'i': return this.sixthState();
			case 'n': return this.eleventhState();
			case 't': return this.sixthState();
			default: return this.error;

		}
	}
	eleventhState(){
		if((/[a-h]|[j-m]|o|q|s|[u-z]/.test(this.lexema[this.contador])) && (this.lexema[this.contador] != undefined)){
			this.contador++;
			return this.sixthState();
		}
		switch(this.lexema[this.contador++]){
			case '+': return this.thirteenthState();
			case '-': return this.thirteenthState();
			case '=': return this.thirteenthState();
			case '0': return this.thirteenthState();
			case '1': return this.thirteenthState();
			case '2': return this.thirteenthState();
			case '3': return this.thirteenthState();
			case '4': return this.thirteenthState();
			case '5': return this.thirteenthState();
			case '6': return this.thirteenthState();
			case '7': return this.thirteenthState();
			case '8': return this.thirteenthState();
			case '9': return this.thirteenthState();
			case 'p': return this.sixthState();
			case 'r': return this.sixthState();
			case 'i': return this.sixthState();
			case 'n': return this.sixthState();
			case 't': return this.twelfthState();
			default: return this.error;

		}
	}
	twelfthState(){
		if(this.lexema.length == this.contador){
			return this.aceptar;	
		}else{
			return this.error;
		}
	}
	thirteenthState(){
		if(this.lexema.length == this.contador){
			return this.aceptar;	
		}else{
			return this.error;
		}
	}
}

$(document).ready(function(){
	$('#acceptButton').click(function(){
		$('.result').html('');
		let data = $('#expressionArea').val();
		data = data.split(' ');
		let obj,result;
		for (let i = 0; i < data.length; i++) {
			obj = new Automata(data[i]);
			result = obj.zeroState();
			if(result == -1){
				$('.result').append(`<span>${data[i]}<i class="fa fa-times fa-lg" aria-hidden="true"></i></span><br>`)
			}else{
				$('.result').append(`<span>${data[i]}<i class="fa fa-check fa-lg" aria-hidden="true"></i></span><br>`)				
			}
		}	

	})
	
})

