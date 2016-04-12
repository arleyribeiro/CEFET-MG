var servidorDasImagens = 'http://fegemo.github.io/cefet-web/images/',
    todasAsImagens = ['philae-parts.jpg',
        'philae-rosetta.jpg',
        'philae-separation.jpg',
        'philae-67-picture.jpg',
        'philae-collecting.jpg'];

 document.getElementById('anterior').addEventListener('click', function(){
 		var atual = document.getElementById('slide');
    var src = atual.src.split('/');
    var img = src[src.length - 1];

    var pos = todasAsImagens.indexOf(img);
    var url = 'http://fegemo.github.io/cefet-web/images/';
    pos = pos ? pos - 1 : todasAsImagens.length - 1;
    atual.src = url + todasAsImagens[pos];
 });

 document.getElementById('proximo').addEventListener('click', function(){
 		var atual = document.getElementById('slide');
    var src = atual.src.split('/');
    var img = src[src.length - 1];

    var pos = todasAsImagens.indexOf(img);
    var url = 'http://fegemo.github.io/cefet-web/images/';
    pos = (pos + 1) % todasAsImagens.length;
    atual.src = url + todasAsImagens[pos];
 });
