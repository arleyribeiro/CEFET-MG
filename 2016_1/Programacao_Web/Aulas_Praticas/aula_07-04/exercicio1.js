var buttons = document.getElementsByTagName('button');
var i;

  for(i=0;i<buttons.length;i++) {
    var button = buttons[i];

    button.addEventListener('click', function(){
    	var p = this.parentElement;
      if(p.classList.contains('expandido')){
				p.classList.remove('expandido');
        this.innerHTML = '+';
      }else{
      	p.classList.add('expandido');
        this.innerHTML = '-';
      }
    });

  }
