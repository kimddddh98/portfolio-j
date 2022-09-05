window.onload = () => {
    let circleTop = {
        template: '<p class="circleTop" :style="{fontSize:homeFont}">{{menuname}}</p>',
        props: {
            menuname: String
        },
        data(){
            return {
                homeFont:'3vw'
            }
        },
        created() {
            if (this.menuname == null) {
                this.menuname = 'content'
            }
        }
    }
    new Vue({
        el: '#app',
        mounted:function(){
            setTimeout(()=>{
                this.transform=true
            },2500)
        },
        data: {
            main: true,
            sub: false,
            header: false,
            circleStyle: [
                { transform: "rotateY(0deg) translateZ(30vw) translateY(0vw)", backgroundImage: 'linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%)'},
                { transform: "rotateY(70deg) translateZ(30vw) translateY(10vw)",backgroundImage:' linear-gradient(120deg,#8ec5fc 0%,#e0c3fc 100%) '},
                { transform: "rotateY(140deg) translateZ(30vw) translateY(20vw)",backgroundImage:'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)'},
                { transform: "rotateY(210deg) translateZ(30vw) translateY(30vw)",backgroundImage: 'linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%)'},
                { transform: "rotateY(280deg) translateZ(30vw) translateY(40vw)",backgroundImage:' linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)' },
            ],
            navName: ['Project', 'About Me', 'Skill', 'Contact', 'More'],
            click: 0,
            transform:false,
            press:false,
            startx:null,
            up:null,
            projectI:0,
            moveI:0,
            headerColor: '#fefefe'
        },
        components: {
            'menu-name': circleTop
        },
        methods: {
            mDown(e){
                let innerUl=document.querySelector('#project');
                this.press=true
                this.startx=e.offsetX - innerUl.offsetLeft
                innerUl.style.transition='none'
            },
            mUp(){
                this.press=false
                let innerUl=document.querySelector('#project');
                innerUl.style.transition='0.5s'
                if(this.up<0){
                    this.projectI++
                    this.moveI++
                    innerUl.style.marginLeft=-100*this.projectI+'vw'
                    this.up=null
                }
                else if(this.up>0){
                    this.projectI--
                    this.moveI--
                    innerUl.style.marginLeft=-100*this.projectI+'vw'
                    this.up=null
                }
            },
            mMove(e){
                let innerUl=document.querySelector('#project');
                let ch=innerUl.clientWidth-project1.clientWidth
                if (!this.press) return
                e.preventDefault()
                innerUl.style.marginLeft=e.offsetX-this.startx+'px'
                if(parseInt(innerUl.style.marginLeft)>0){
                    innerUl.style.marginLeft='0px'
                }
                else if(parseInt(innerUl.style.marginLeft)<-ch){
                    innerUl.style.marginLeft=-ch+'px'
                }
                if(parseInt(innerUl.style.marginLeft)<=0 || parseInt(innerUl.style.marginLeft)>-ch){
                this.up=document.querySelectorAll('.moveI')[this.moveI].offsetLeft
                }
            },
            subPage: function (e) {
                let headerMenu = document.querySelectorAll('.menuColor')
                this.main = false;
                this.transform=false
                setTimeout(()=>{
                    this.header = true
                    this.sub = true
                    project.style.width=this.circleStyle.length*100 +'%'
                    full.style.width=this.circleStyle.length*100 +'vw'
                },500)
                // for (let h = 0; h < headerMenu.length; h++) {
                //     headerMenu[h].style.color = this.headerColor
                // }
                for (let i = 0; i < document.querySelectorAll('.circleItem').length; i++) {
                    if (e.target == document.querySelectorAll('.circleItem')[i]) {
                        full.style.width = 100 * this.circleStyle.length + 'vw'
                        setTimeout(() => {
                            full.style.left = -100*i+'vw'
                            headerMenu[i + 1].style.color = '#8AAAE5'
                            headerMenu[i + 1].parentNode.style.backgroundColor = '#fefefe'
                        }, 500)
                        return this.click = i
                    }
                }
            },
            mainWheel: function (e) {
                let found = /-\d+|\d+/g;
                let circleItem = document.querySelectorAll('.circleItem');
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
                        // const bodyTop = window.document.querySelector('body').scrollTop
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
                                        headerMenu[h].style.color = this.headerColor
                                        headerMenu[h].parentNode.style.backgroundColor = 'transparent'
                                    }
                                    headerMenu[this.click + 2].style.color = '#8AAAE5'
                                    headerMenu[this.click + 2].parentNode.style.backgroundColor = '#fefefe'

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
                        }
                        else {
                                if (this.click != 0 && this.click > 0) {
                                    for (let i = 0; i < fullbox.length; i++) {
                                        fullbox[i].style.width = 90 + 'vw'
                                        fullbox[i].style.height = 85 + 'vh'
                                    }
                                    for (let h = 0; h < headerMenu.length; h++) {
                                        headerMenu[h].style.color = this.headerColor
                                        headerMenu[h].parentNode.style.backgroundColor = 'transparent'

                                    }
                                    headerMenu[this.click].style.color = '#8AAAE5'
                                    headerMenu[this.click].parentNode.style.backgroundColor = '#fefefe'
                                    
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
                    }, 200)
                }
            },
            home(e) {
                e.preventDefault()
                this.header = false
                this.main = true;
                setTimeout(()=>{
                    this.transform=true

                },2500)
                this.sub = false;
                let headerMenu = document.querySelectorAll('.menuColor')
                for (let h = 0; h < headerMenu.length; h++) {
                    headerMenu[h].style.color = this.headerColor
                    headerMenu[h].parentNode.style.backgroundColor = 'transparent'

                }
            },
            section(e) {
                e.preventDefault()
                let full = document.getElementById('full')
                let fullbox = document.querySelectorAll('.full')
                let headerMenu = document.querySelectorAll('.menuColor')
                for (let h = 0; h < headerMenu.length; h++) {
                    headerMenu[h].style.color = this.headerColor
                    headerMenu[h].parentNode.style.backgroundColor = 'transparent'
                    e.target.style.color = '#8AAAE5'
                    e.target.parentNode.style.backgroundColor = '#fefefe'
                    if (headerMenu[h].style.color == 'rgb(138, 170, 229)')
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
