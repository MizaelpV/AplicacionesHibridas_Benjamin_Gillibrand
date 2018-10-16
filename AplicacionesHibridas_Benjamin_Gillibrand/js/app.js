    window.onload = function() {
      var Calculadora =
    {
		   display,
		   numero:0,
		   ultimoInput:0,
		   operacion:"",
		Init(){
			display = document.querySelector('#display');
			//Asignar funcion reducir tamaño
			var botones = document.querySelectorAll('.tecla');
			for (var i = 0; i < botones.length; i++) {
				var cambio = botones[i];
				cambio.onmouseover = this.hover;
				cambio.onmouseout = this.fuera;
				cambio.onclick = this.Click;
			}
			//Agregamos funcionalidad a las teclas numéricas
			for (var i = 0; i < 10; i++) {
				var item = document.getElementById(i);
				item.onclick = this.Input;
			}
			var objeto;
			//Agregamos funcionalidad al boton ON/C
			objeto=document.getElementById("on");
			objeto.onclick=this.Limpiar;
			//Agregamos funcionalidad al punto
		  objeto=document.getElementById("punto");
			objeto.onclick=this.Punto;
			//Agregamos funcionalidad al boton +/-
			objeto=document.getElementById("sign");
			objeto.onclick=this.Signo;
			//Agregamos funcionalidad a la suma
			objeto=document.getElementById("mas");
			objeto.onclick=this.Sumar;
			//Agregamos funcionalidad a la resta
			objeto=document.getElementById("menos");
			objeto.onclick=this.Restar;
			//Agregamos funcionalidad a la multiplicación
			objeto=document.getElementById("por");
			objeto.onclick=this.Multiplicar;
			//Agregamos funcionalidad a la división
			objeto=document.getElementById("dividido");
			objeto.onclick=this.Dividir;
			//Agregamos funcionalidad a la igualdad
			objeto=document.getElementById("igual");
			objeto.onclick=this.Calcular;
		},
		mostrar(result){
			var text = result.slice(0,8);
			display.innerHTML = text;
		},
		hover(a){
			a.target.style.padding="1.5px";
		},
		fuera(b){
			b.target.style.padding="0px";
		},
		Click(c){
			var id=c.target.id;
		},
		Input(d){
			var n = d.target.id;
			if(display.innerHTML=="0"){
				display.innerHTML=n;
			}else{
				if(Calculadora.ultimoInput=="")
					display.innerHTML+=n;
				else{
					display.innerHTML=n;
					Calculadora.ultimoInput="";
				}
			}
			Calculadora.mostrar(display.innerHTML);
		},
		Limpiar(e){
			display.innerHTML="0";
			Calculadora.numero="";
			Calculadora.ultimoInput="";
			Calculadora.operacion="";
		},
		Punto(f){
			var hadDot=display.innerHTML.includes(".");
			if(!hadDot){
				hadDot=true;
				display.innerHTML+=".";
				Calculadora.mostrar(display.innerHTML);
			}
		},
		 Signo(g){
			var hadMinus=display.innerHTML.includes("-");
			var isZero = (display.innerHTML=="0");
			if(isZero){
				return;
			}
			if(!hadMinus){
				display.innerHTML="-"+display.innerHTML;
				Calculadora.mostrar(display.innerHTML);
			}else{
				display.innerHTML=display.innerHTML.slice(1);
				Calculadora.mostrar(display.innerHTML);
			}
		},
		  Sumar(h){
			if(Calculadora.numero!="" && Calculadora.operacion=="sumar"){
				Calculadora.Calcular(h);
				return;
			}
			Calculadora.ultimoInput="";
			Calculadora.numero=display.innerHTML;
			Calculadora.operacion="sumar";
			Calculadora.mostrar("");
		},
		   Restar(i){
			if(Calculadora.numero!="" && Calculadora.operacion=="restar"){
				Calculadora.Calcular(i);
				return;
			}
			Calculadora.ultimoInput="";
			Calculadora.numero=display.innerHTML;
			Calculadora.operacion="restar";
			Calculadora.mostrar("");
		},
  		Multiplicar(j){
			if(Calculadora.numero!="" && Calculadora.operacion=="multiplicar"){
				Calculadora.Calcular(j);
				return;
			}
			Calculadora.ultimoInput="";
			Calculadora.numero=display.innerHTML;
			Calculadora.operacion="multiplicar";
			Calculadora.mostrar("");
		},
		  Dividir(k){
			if(Calculadora.numero!="" && Calculadora.operacion=="dividir"){
				Calculadora.Calcular(k);
				return;
			}
			Calculadora.ultimoInput="";
			Calculadora.numero=display.innerHTML;
			Calculadora.operacion="dividir";
			Calculadora.mostrar("");
		},
		  Calcular(l){
			if(Calculadora.operacion==""){
				return;
			}
			if(Calculadora.ultimoInput==""||Calculadora.ultimoInput===undefined){
				Calculadora.ultimoInput=display.innerHTML;
			}
			//
			var n=parseFloat(Calculadora.numero);
			var m=parseFloat(Calculadora.ultimoInput);
			var r=0;
			//
			if(Calculadora.operacion=="sumar"){
				r=n+m;
			}
			if(Calculadora.operacion=="restar"){
				r=n-m;
			}
			if(Calculadora.operacion=="multiplicar"){
				r=n*m;
			}
			if(Calculadora.operacion=="dividir"){
				r=n/m;
			}
			Calculadora.mostrar(r.toString());
			Calculadora.numero=r;
		}
};

Calculadora.Init();
}
