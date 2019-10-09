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
                                    {descripcion:"2.60M",url:'img/productos/ESCALERAS/TUBULAR/26m.jpg'},
                                    {descripcion:"4.10M",url:'img/productos/ESCALERAS/TUBULAR/4m.jpg'},
                                    {descripcion:"5.0M",url:'img/productos/ESCALERAS/TUBULAR/5m.jpg'},
                                    {descripcion:"TIJERA",url:'img/productos/ESCALERAS/TUBULAR/tijera.jpg'}
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
                        url:'img/productos/CABLES/HDMI/30m.jpg',
                        productos:[
                            {descripcion:"1M",url:'img/productos/CABLES/HDMI/1m.jpg'},
                            {descripcion:"2M",url:'img/productos/CABLES/HDMI/2m.jpg'},
                            {descripcion:"3M",url:'img/productos/CABLES/HDMI/3m.jpg'},
                            {descripcion:"5M",url:'img/productos/CABLES/HDMI/5m.jpg'},
                            {descripcion:"10M",url:'img/productos/CABLES/HDMI/10m.jpg'},
                            {descripcion:"15M",url:'img/productos/CABLES/HDMI/15m.jpg'},
                            {descripcion:"20M",url:'img/productos/CABLES/HDMI/20m.jpg'},
                            {descripcion:"30M",url:'img/productos/CABLES/HDMI/30m.jpg'}
                        ]
                    },
                    utp:{
                        nombre:"UTP CAT5 - CAT6",
                        url:'img/productos/CABLES/UTP/utp.jpg',
                        productos:[
                            {descripcion:"CAT 5e INTERIOR",url:'img/productos/CABLES/UTP/cat-5e-exterior.jpg'},
                            {descripcion:"CAT 6e INTERIOR",url:'img/productos/CABLES/UTP/cat-6e-exterior.jpg'},
                            {descripcion:"CAT 5e 4.0MM EXTERIOR",url:'img/productos/CABLES/UTP/cat-5e-exterior.jpg'},
                            {descripcion:"CAT 5e 5.0MM EXTERIOR",url:'img/productos/CABLES/UTP/cat-5e-exterior.jpg'}
                        ]
                    }
                },
                estado:false,
                tipo:'par'
            },
            soportes:{
                nombre:"SOPORTES",
                tipos:{
                    movil:{
                        nombre:"TV",
                        url:'img/productos/SOPORTES/soporte-vesa.jpg',
                        productos:[
                            {descripcion:"Soporte con ruedas",url:'img/productos/SOPORTES/soporte-vesa.jpg'},
                        ]
                    },
                    brazo:{
                        nombre:"TV",
                        url:'img/productos/SOPORTES/brazo.jpg',
                        productos:[
                            {descripcion:"Soporte con brazo",url:'img/productos/SOPORTES/brazo.jpg'},
                        ]
                    },
                    estatico:{
                        nombre:"TV",
                        url:'img/productos/SOPORTES/estatico.jpg',
                        productos:[
                            {descripcion:"Soporte estatico",url:'img/productos/SOPORTES/estatico.jpg'},
                        ]
                    }
                },
                estado:false,
                tipo:'impar'
                
            },
            monopatin:{
                nombre:"MOTOS",
                tipos:{
                    monopatin:{
                        nombre:"MONOPATIN",
                        url:'img/productos/MOTOS/monopatin.jpg',
                        productos:[
                            {descripcion:"Monopatin 1",url:'img/productos/MOTOS/monopatin/1.jpg'},
                            {descripcion:"Monopatin 2",url:'img/productos/MOTOS/monopatin/2.jpg'}
                        ]
                    },
                    escuadron:{
                        nombre:"ESCUADRON",
                        url:'img/productos/MOTOS/escuadron.jpg',
                        productos:[
                            {descripcion:"Escuadron 1",url:'img/productos/MOTOS/escuadron/1.jpg'},
                            {descripcion:"Escuadron 2",url:'img/productos/MOTOS/escuadron/2.jpg'},
                            {descripcion:"Escuadron 3",url:'img/productos/MOTOS/escuadron/3.jpg'}
                        ]
                    },
                    motos:{
                        nombre:"MOTOS",
                        url:'img/productos/MOTOS/motos.jpg',
                        productos:[
                            {descripcion:"Moto 1",url:'img/productos/MOTOS/motos/1.jpg'},
                            {descripcion:"Moto 2",url:'img/productos/MOTOS/motos/2.jpg'},
                            {descripcion:"Moto 3",url:'img/productos/MOTOS/motos/3.jpg'},
                            {descripcion:"Moto 4",url:'img/productos/MOTOS/motos/4.jpg'},
                            {descripcion:"Moto 5",url:'img/productos/MOTOS/motos/5.jpg'},
                            {descripcion:"Moto 6",url:'img/productos/MOTOS/motos/6.jpg'},
                            {descripcion:"Moto 7",url:'img/productos/MOTOS/motos/7.jpg'},
                            {descripcion:"Moto 8",url:'img/productos/MOTOS/motos/8.jpg'},
                            {descripcion:"Moto 9",url:'img/productos/MOTOS/motos/9.jpg'},
                            {descripcion:"Moto 10",url:'img/productos/MOTOS/motos/10.jpg'}
                        ]
                    }
                },
                    estado:false,tipo:'par'
            },
            otros:{
                nombre:"OTROS",
                tipos:{
                    canaletas:{
                            nombre:"Canaletas",
                            url:'img/productos/OTROS/canaletas.jpg',
                            productos:[
                                {descripcion:"10MM x 10MM",url:'img/productos/OTROS/canaletas/10MM x 10MM.jpg'},
                                {descripcion:"10MM x 15MM",url:'img/productos/OTROS/canaletas/10MM x 15MM.jpg'},
                                {descripcion:"10MM x 20MM",url:'img/productos/OTROS/canaletas/10MM x 20MM.jpg'},
                                {descripcion:"25MM x 25MM",url:'img/productos/OTROS/canaletas/25MM x 25MM.jpg'}
                            ],
                    },
                    conectoresRJ45:{
                        nombre:"Conectores RJ45",
                        url:'img/productos/OTROS/conectoresRJ45.jpg',
                        productos:[
                            {descripcion:"Conector RJ 45 PLÁSCTICO",url:'img/productos/OTROS/conectores/plastico.jpg'},
                            {descripcion:"Conector RJ 45 BLINDADO",url:'img/productos/OTROS/conectores/blindado.jpg'}
                        ],
                    },
                    cerraduras:{
                        nombre:"Cerradura 350KG ",
                        url:'img/productos/OTROS/cerradura350kg.jpg',
                        productos:[
                            {descripcion:"Cerradura 350 kb",url:'img/productos/OTROS/cerradura350kg.jpg'},
                            {descripcion:"Soporte ZL para Cerradura magnética",url:'img/productos/OTROS/cerradura/Soporte ZL para Cerradura magnética.jpg'},
                            {descripcion:"Soporte U para Cerradura magnética",url:'img/productos/OTROS/cerradura/Soporte U para Cerradura magnética.jpg'}

                        ],
                    },
                    baterias:{
                        nombre:"Baterias",
                        url:'img/productos/OTROS/bateria.jpg',
                        productos:[
                            {descripcion:"Bateria de 4A",url:'img/productos/OTROS/baterias/4a.jpg'},
                            {descripcion:"Bateria de 7A",url:'img/productos/OTROS/bateria.jpg'}
                        ],
                    },
                    fuenteCentralizada:{
                        nombre:"Fuente Centralizada",
                        url:'img/productos/OTROS/fuenteCentralizada.jpg',
                        productos:[
                            {descripcion:"Fuente Centralizada 5A 4 Canales GN",url:'img/productos/OTROS/fuenteCentralizada/Fuente Centralizada 5A 4 Canales OR.jpg'},
                            {descripcion:"Fuente Centralizada 9A 9 Canales GN",url:'img/productos/OTROS/fuenteCentralizada/Fuente Centralizada 9A 9 Canales OR.jpg'},
                            {descripcion:"Fuente Centralizada 9A 9 Canales OR",url:'img/productos/OTROS/fuenteCentralizada/Fuente Centralizada 9A 9 Canales OR.jpg'},
                            {descripcion:"Fuente Centralizada 5A 4 Canales OR",url:'img/productos/OTROS/fuenteCentralizada/Fuente Centralizada 5A 4 Canales OR.jpg'}
                        ],
                    },
                    transformador:{
                        nombre:"Transformador 12 V",
                        url:'img/productos/OTROS/transformador.jpg',
                        productos:[
                            {descripcion:"Transformador 12V GN",url:'img/productos/OTROS/transformador.jpg'}
                        ],
                    }
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
        this.objetoSeleccionado = false;
        this.objetoProductos = _.clone(evento.productos);
        this.objetoProductos.estado = true;
    }
  },
  
})
