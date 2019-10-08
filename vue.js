  var app = new Vue({
  el: '#app',
  data: {
    objetoSeleccionado:{},
    objetoProductos:{},
    objetoPrincipal:{
        productos:{
            escaleras:
                    {
                        nombre:"ESCALERAS",
                        tipos:{
                            retractil:{
                                nombre:'RETRÁCTIL',
                                url:'img/productos/ESCALERAS/escalera_retractil.jpg',
                                productos:[
                                    {descripcion:"3.70m",url:'img/productos/ESCALERAS/RETRÁCTIL/37m.jpg'},
                                    {descripcion:"4.70m",url:'img/productos/ESCALERAS/RETRÁCTIL/47m.jpg'},
                                    {descripcion:"5.70m",url:'img/productos/ESCALERAS/RETRÁCTIL/57m.jpg'},
                                    {descripcion:"6.70m",url:'img/productos/ESCALERAS/RETRÁCTIL/67m.jpg'}
                                ]
                            },
                            telescopia:{
                                nombre:'TELESCOPICA',
                                url:'img/productos/ESCALERAS/escalera_telescopia.jpg',
                                productos:[
                                    {descripcion:"24 PELDAÑOS 7M",url:'img/productos/ESCALERAS/TELESCOPICA/42.jpg'},
                                    {descripcion:"28 PELDAÑOS 8M",url:'img/productos/ESCALERAS/TELESCOPICA/42.jpg'},
                                    {descripcion:"32 PELDAÑOS 9M",url:'img/productos/ESCALERAS/TELESCOPICA/42.jpg'},
                                    {descripcion:"34 PELDAÑOS 10M",url:'img/productos/ESCALERAS/TELESCOPICA/42.jpg'},
                                    {descripcion:"42 PELDAÑOS 12M",url:'img/productos/ESCALERAS/TELESCOPICA/42.jpg'}
                                ]
                            },
                            tubular:{
                                nombre:'TUBULAR',
                                url:'img/productos/ESCALERAS/escalera_tubular.jpg',
                                productos:[
                                    {descripcion:"2.60M",url:'img/productos/about/moto-04.jpg'},
                                    {descripcion:"4.10M",url:'img/productos/about/moto-04.jpg'},
                                    {descripcion:"5.0M",url:'img/productos/about/moto-04.jpg'},
                                    {descripcion:"TIJERA",url:'img/productos/about/moto-04.jpg'}
                                ]
                            },
                        },
                        estado:false,
                        tipo:'par'
             },
            cajasUr:{
                        nombre:"CAJAS UR",
                        estado:false,
                        tipo:'impar',
                        tipos:{
                            genericaMetal004mm:{
                                nombre:"GENÉRICA METAL 0.04mm",
                                url:'img/productos/CAJAS UR/generico.jpg',
                                productos:[
                                    {descripcion:"4UR",url:'img/productos/CAJAS UR/GENÉRICA METAL 0.04mm/4ur.jpg'},
                                    {descripcion:"6UR",url:'img/productos/CAJAS UR/GENÉRICA METAL 0.04mm/6ur.jpg'},
                                    {descripcion:"9UR",url:'img/productos/CAJAS UR/GENÉRICA METAL 0.04mm/9ur.jpg'},
                                    {descripcion:"12UR",url:'img/productos/CAJAS UR/GENÉRICA METAL 0.04mm/12ur.jpg'}
                                ]
                            },
                            originalMetal006mm:{
                                nombre:"ORIGINAL METAL 0.06mm",
                                url:'img/productos/CAJAS UR/original.jpg',
                                productos:[
                                    {descripcion:"4UR",url:'img/productos/CAJAS UR/ORIGINAL METAL 0.06mm/4ur.jpg'},
                                    {descripcion:"6UR",url:'img/productos/CAJAS UR/ORIGINAL METAL 0.06mm/6ur.jpg'},
                                    {descripcion:"9UR",url:'img/productos/CAJAS UR/ORIGINAL METAL 0.06mm/9ur.jpg'},
                                    {descripcion:"12UR",url:'img/productos/CAJAS UR/ORIGINAL METAL 0.06mm/12ur.jpg'},
                                    {descripcion:"15UR",url:'img/productos/CAJAS UR/ORIGINAL METAL 0.06mm/15ur.jpg'}
                                ]
                        }
                        }
             },
            cables:{
                nombre:"CABLES",
                tipos:{
                    hdmi:{
                        nombre:"HDMI",
                        url:'img/productos/cables/HDMI/30m.jpg',
                        productos:[
                            {descripcion:"1M",url:'img/productos/cables/HDMI/1m.jpg'},
                            {descripcion:"2M",url:'img/productos/cables/HDMI/2m.jpg'},
                            {descripcion:"3M",url:'img/productos/cables/HDMI/3m.jpg'},
                            {descripcion:"5M",url:'img/productos/cables/HDMI/5m.jpg'},
                            {descripcion:"10M",url:'img/productos/cables/HDMI/10m.jpg'},
                            {descripcion:"15M",url:'img/productos/cables/HDMI/15m.jpg'},
                            {descripcion:"20M",url:'img/productos/cables/HDMI/20m.jpg'},
                            {descripcion:"30M",url:'img/productos/cables/HDMI/30m.jpg'}
                        ]
                    },
                    utp:{
                        nombre:"UTP CAT5 - CAT6",
                        url:'img/productos/cables/UTP/utp.jpg',
                        productos:[
                            {descripcion:"CAT 5e INTERIOR",url:'img/productos/cables/UTP/cat-5e-exterior.jpg'},
                            {descripcion:"CAT 6e INTERIOR",url:'img/productos/cables/UTP/cat-6e-exterior.jpg'},
                            {descripcion:"CAT 5e 4.0MM EXTERIOR",url:'img/productos/cables/UTP/cat-5e-exterior.jpg'},
                            {descripcion:"CAT 5e 5.0MM EXTERIOR",url:'img/productos/cables/UTP/cat-5e-exterior.jpg'}
                        ]
                    }
                },
                estado:false,
                tipo:'par'
            },
            soportes:{
                nombre:"SOPORTES",
                tipos:{
                    tv:{
                        nombre:"TV",
                        url:'img/productos/cables/HDMI/30m.jpg',
                        productos:[
                            {descripcion:"1M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"2M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"3M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"5M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"10M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"15M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"20M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"30M",url:'img/productos/about/moto-04.jpg'}
                        ]
                    }
                },
                estado:false,
                tipo:'impar'
                
            },
            monopatin:{
                nombre:"MONOPATIN",
                tipos:{
                    escuadron:{
                        nombre:"ESCUADRON",
                        url:'img/productos/ESCALERAS/escalera_retractil.jpg',
                        productos:[
                            {descripcion:"1M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"2M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"3M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"5M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"10M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"15M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"20M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"30M",url:'img/productos/about/moto-04.jpg'}
                        ]
                    }
                },
                    estado:false,tipo:'par'
            },
            otros:{
                nombre:"OTROS",
                conectorHDMI:{
                        nombre:"CONECTORES HDMI",
                        url:'img/productos/ESCALERAS/escalera_retractil.jpg',
                        productos:[
                            {descripcion:"1M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"2M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"3M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"5M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"10M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"15M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"20M",url:'img/productos/about/moto-04.jpg'},
                            {descripcion:"30M",url:'img/productos/about/moto-04.jpg'}
                        ],
                },
                    estado:false,tipo:'impar'
            }
        }

    },
    obtenerObjeto(evento){
        evento.estado = true;
        this.objetoSeleccionado = _.clone(evento);
        this.objetoProductos = {};
        this.objetoProductos.estado = false;
    },
    obtenerProducto(evento){
        this.objetoProductos = _.clone(evento.productos);
        this.objetoProductos.estado = true;
    }
  },
  
})
