window.onload = function () {
/*
const app = new Vue({
    el: '#app',
    data: {
      titulo:'ESCALERAS',
      //botones: ['ESCALERAS','NERF','MOTOS','MONOPATIN','OTROS']
      botones:[
          {nombre:'ESCALERAS',estado:false},
          {nombre:'NERF',estado:false},
          {nombre:'MOTOS',estado:true},
          {nombre:'MONOPATIN',estado:false},
          {nombre:'OTROS',estado:false}
      ]
    }
  })
  */
 const app1 = new Vue({
    el: '#botones',
    data: {
      titulo:'ESCALERAS',
      //botones: ['ESCALERAS','NERF','MOTOS','MONOPATIN','OTROS']
      botones:[
          {nombre:'ESCALERAS',estado:false,tipo:'par',url:''},
          {nombre:'NERF',estado:false,tipo:'impar',url:''},
          {nombre:'MOTOS',estado:false,tipo:'par',url:''},
          {nombre:'MONOPATIN',estado:false,tipo:'impar',url:''},
          {nombre:'OTROS',estado:false,tipo:'par',url:''}
      ],
      contenido:[
          {tipo:'ESCALERAS',url:'img/productos/about/escalera-03.jpg',descripcion:'Escalera 3 peldaños'},
          {tipo:'ESCALERAS',url:'img/productos/about/escalera-01.jpg',descripcion:'Escalera 4 peldaños'},
          {tipo:'ESCALERAS',url:'img/productos/about/escalera-02.jpg',descripcion:'Escalera 5 peldaños'},
          {tipo:'ESCALERAS',url:'img/productos/about/escalera-04.jpg',descripcion:'Escalera'},
          {tipo:'NERF',url:'img/productos/about/nerf1-01.jpg',descripcion:'Nerf'},
          {tipo:'NERF',url:'img/productos/about/nerf1-02.jpg',descripcion:'Nerf'},
          {tipo:'NERF',url:' img/productos/about/nerf1-04.jpg',descripcion:'Nerf'},
          {tipo:'NERF',url:'img/productos/about/nerf1-05.jpg',descripcion:'Nerf'},
          {tipo:'NERF',url:'img/productos/about/nerf1-06.jpg',descripcion:'Nerf'},
          {tipo:'MOTOS',url:'img/productos/about/moto-13.jpg',descripcion:'Escuadron'},
          {tipo:'MOTOS',url:'img/productos/about/moto-12.jpg',descripcion:'Escuadron'},
          {tipo:'MOTOS',url:'img/productos/about/moto-02.jpg',descripcion:'Moto'},
          {tipo:'MOTOS',url:'img/productos/about/moto-11.jpg',descripcion:'Escuadron'},
          {tipo:'MOTOS',url:'img/productos/about/moto-10.jpg',descripcion:'Moto'},
          {tipo:'MOTOS',url:'img/productos/about/moto-09.jpg',descripcion:'Moto'},
          {tipo:'MOTOS',url:'img/productos/about/moto-08.jpg',descripcion:'Moto'},
          {tipo:'MOTOS',url:'img/productos/about/moto-07.jpg',descripcion:'Moto'},
          {tipo:'MOTOS',url:'img/productos/about/moto-06.jpg',descripcion:'Moto'},
          {tipo:'MOTOS',url:'img/productos/about/moto-05.jpg',descripcion:'Moto'},
          {tipo:'MOTOS',url:'img/productos/about/moto-04.jpg',descripcion:'Moto'},
          {tipo:'MOTOS',url:'img/productos/about/moto-03.jpg',descripcion:'Moto'},
          {tipo:'MONOPATIN',url:'img/productos/about/mono-patin-02.jpg',descripcion:'Monopatin'}
      ]
    },
    methods:{
        ocultar (contenido){
            for(boton of this.botones){
                if(contenido != boton.nombre){
                    boton.estado = false;
                }else{
                    boton.estado = true;
                }
            }
            
        }
    }
  });
 
}