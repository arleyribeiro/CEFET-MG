 document.getElementById('btnSave').addEventListener('click', function(){
 		  var id =  document.getElementById('identificador').value;
      var nome =  document.getElementById('nome').value;
      var tel =  document.getElementById('telefone').value;
     /* console.log(id);
      console.log(nome);
      console.log(tel);*/ 
      
      var user = {id: id, nome: nome, telefone: tel};
      localStorage.setItem('user', JSON.stringify(user));
      
      var user = localStorage.getItem('user');
      user = JSON.parse(user);
      console.log(user);
      
 });
 
 document.getElementById('btnLoad').addEventListener('click', function(){
 		  var user = localStorage.getItem('user');
      user = JSON.parse(user);
      
    /*  console.log(user.id);
      console.log(user.nome);
      console.log(user.telefone);*/
      document.getElementById('identificador').value = user.id;
      document.getElementById('nome').value = user.nome;
      document.getElementById('telefone').value = user.telefone;  
 });
 