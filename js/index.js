window.onload = () => {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
//     var renderer = new THREE.WebGLRenderer( { antialias: true, preserveDrawingBuffer: true } );
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
    let circleTop = {

        template: '<p class="circleTop" :style="{color:homeColor,fontSize:homeFont}">{{menuname}}</p>',
        props: {
            menuname: String
        },
        data(){
            return {
                homeColor:'#DCE2F0',
                homeFont:'2vw'
            }
        },
        created() {
            if (this.menuname == null) {
                this.menuname = '2'
            }
        }
    }
    new Vue({
        el: '#app',
        mounted:function(){
            setTimeout(()=>{
                this.load=false
                this.main=true
            },2000)
        },
        data: {
            main: false,
            sub: false,
            header: false,
            load: true,
            circleStyle: [
                { transform: "rotateY(0deg) translateZ(30vw) translateY(0vw)" },
                { transform: "rotateY(70deg) translateZ(30vw) translateY(10vw)" },
                { transform: "rotateY(140deg) translateZ(30vw) translateY(20vw)" },
                { transform: "rotateY(210deg) translateZ(30vw) translateY(30vw)" },
                { transform: "rotateY(280deg) translateZ(30vw) translateY(40vw)" },
            ],
            click: 0,
        },
        components: {
            'menu-name': circleTop
        },
        methods: {
            subPage: function (e) {
                let headerMenu = document.querySelectorAll('.menuColor')
                this.main = false;

                setTimeout(()=>{
                    this.header = true
                    this.sub = true
                },500)
                for (let h = 0; h < headerMenu.length; h++) {
                    headerMenu[h].style.color = '#DCE2F0'
                }
                for (let i = 0; i < document.querySelectorAll('.circleItem').length; i++) {
                    if (e.target == document.querySelectorAll('.circleItem')[i]) {
                        full.style.width = 100 * this.circleStyle.length + 'vw'
                        setTimeout(() => {
                            const offset = document.querySelectorAll('.full')[1].offsetWidth;
                            full.style.left = -offset * i + 'px'
                            headerMenu[i + 1].style.color = 'red'
                        }, 0)
                        return this.click = i
                    }
                }
            },
            down(e){
                console.log(e)
            },
            circleOver(e) {
                // let found = /-\d+|\d+/g;
                // let transfromArr=[]
                // let circleItem=document.querySelectorAll('.circleItem')

                // for(let i in this.circleStyle){
                //     transfromArr.push(circleItem[i].style.transform.match(found))
                // }
                // circleItem[0].style.transform=`rotateY(${parseInt(transfromArr[0][0])}deg) translateZ(${parseInt(transfromArr[0][1])}vw) translateY(${parseInt(transfromArr[0][2])}vw) scale(110%)`
            },
            circleOut(e) {
                // let found = /-\d+|\d+/g;
                // let transfromArr=[]
                // let circleItem=document.querySelectorAll('.circleItem')

                // for(let i in this.circleStyle){
                //     transfromArr.push(circleItem[i].style.transform.match(found))
                // }
                // circleItem[0].style.transform=`rotateY(${parseInt(transfromArr[0][0])}deg) translateZ(${parseInt(transfromArr[0][1])}vw) translateY(${parseInt(transfromArr[0][2])}vw)`
            },
            mainWheel: function (e) {
                let found = /-\d+|\d+/g;
                let circleItem = document.getElementById('menu').children;
                let circleArr = [];

                if (e.wheelDelta <= 0) {
                    if (circleItem[0].style.transform != 'rotateY(-280deg) translateZ(30vw) translateY(-40vw)') {
                        for (let i = 0; i < circleItem.length; i++) {
                            circleArr.push(circleItem[i].style.transform.match(found))
                            circleItem[i].style.transform =
                                `rotateY(${parseInt(circleArr[i][0]) - 35}deg) translateZ(30vw) translateY(${parseInt(circleArr[i][2]) - 5}vw)`
                        }
                    }
                }
                else {

                    if (circleItem[0].style.transform != 'rotateY(0deg) translateZ(30vw) translateY(0vw)') {
                        for (let i = 0; i < circleItem.length; i++) {
                            circleArr.push(circleItem[i].style.transform.match(found))
                            circleItem[i].style.transform =
                                `rotateY(${parseInt(circleArr[i][0]) + 35}deg) translateZ(30vw) translateY(${parseInt(circleArr[i][2]) + 5}vw)`
                        }
                    }
                }
            },
            subWheel(e) {
                if (!this.timer) {
                    this.timer = setTimeout(() => {
                        this.timer = null;
                        const fullbox = document.querySelectorAll('.full');
                        const full = document.getElementById('full');
                        const bodyTop = window.document.querySelector('body').scrollTop
                        console.log()
                        // && bodyTop >= -fullbox[0].offsetTop - 100
                        let headerMenu = document.querySelectorAll('.menuColor')
                        if (e.wheelDelta <= 0) {
                            if (this.click != fullbox.length - 1 && this.click < fullbox.length - 1 ) {
                                for (let i = 0; i < fullbox.length; i++) {
                                    fullbox[i].style.width = 90 + 'vw'
                                    fullbox[i].style.height = 85 + 'vh'
                                }
                                this.click == fullbox.length
                                if (this.click < headerMenu.length - 2) {
                                    for (let h = 0; h < headerMenu.length; h++) {
                                        headerMenu[h].style.color = '#DCE2F0'
                                    }
                                    headerMenu[this.click + 2].style.color = 'red'

                                }
                                full.style.left = -100 * (this.click + 1) + 'vw'
                                setTimeout(() => {
                                    for (let i = 0; i < fullbox.length; i++) {
                                        fullbox[i].style.width = 100 + 'vw'
                                        fullbox[i].style.height = 100 + 'vh'
                                    }
                                    return this.click + 1 >= fullbox.length - 1 ? this.click = fullbox.length - 1 : this.click++
                                }, 600)
                            }
                            // }

                        }
                        else {
                            if (bodyTop <= 0) {
                                if (this.click != 0 && this.click > 0) {
                                    for (let i = 0; i < fullbox.length; i++) {
                                        fullbox[i].style.width = 90 + 'vw'
                                        fullbox[i].style.height = 85 + 'vh'
                                    }
                                    // headerMenu[this.click].style.color='red'
                                    // if(this.click<headerMenu.length-2){
                                    for (let h = 0; h < headerMenu.length; h++) {
                                        headerMenu[h].style.color = '#DCE2F0'
                                    }
                                    headerMenu[this.click].style.color = 'red'

                                    // }
                                    full.style.left = -100 * (this.click - 1) + 'vw'
                                    setTimeout(() => {
                                        for (let i = 0; i < fullbox.length; i++) {
                                            fullbox[i].style.width = 100 + 'vw'
                                            fullbox[i].style.height = 100 + 'vh'
                                        }
                                        return this.click <= 0 ? this.click = 0 : this.click--
                                    }, 600)
                                }
                            }

                        }


                    }, 200)
                }


            },
            home(e) {
                this.header = false
                this.main = true;
                this.sub = false;
                let headerMenu = document.querySelectorAll('.menuColor')
                for (let h = 0; h < headerMenu.length; h++) {
                    headerMenu[h].style.color = '#DCE2F0'
                }
                e.target.style.color = 'red'
            },
            section(e) {
                let full = document.getElementById('full')
                let fullbox = document.querySelectorAll('.full')
                let headerMenu = document.querySelectorAll('.menuColor')
                for (let h = 0; h < headerMenu.length; h++) {
                    headerMenu[h].style.color = '#DCE2F0'
                    e.target.style.color = 'red'
                    if (headerMenu[h].style.color == 'red')
                        this.click = h - 1
                }
                for (let i = 0; i < fullbox.length; i++) {
                    fullbox[i].style.width = 90 + 'vw'
                    fullbox[i].style.height = 85 + 'vh'
                }
                full.style.left = -100 * this.click + 'vw'
                setTimeout(() => {
                    for (let i = 0; i < fullbox.length; i++) {
                        fullbox[i].style.width = 100 + 'vw'
                        fullbox[i].style.height = 100 + 'vh'
                    }
                }, 600)
            }
          
        }

    })
}
