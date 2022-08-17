window.onload = () => {
    new Vue({
        el: '#app',
        data: {
            main: true,
            sub: false,
            circleStyle: [
                { transform: "rotateY(0deg) translateZ(30vw) translateY(0vw)" },
                { transform: "rotateY(70deg) translateZ(30vw) translateY(10vw)" },
                { transform: "rotateY(140deg) translateZ(30vw) translateY(20vw)" },
                { transform: "rotateY(210deg) translateZ(30vw) translateY(30vw)" },
                { transform: "rotateY(280deg) translateZ(30vw) translateY(40vw)" },
            ],
            click: 0
        },
        methods: {
            subPage: function (e) {
                let headerMenu=document.querySelectorAll('.menuColor')
                this.main = false;
                this.sub = true
                // let headerMenu=document.querySelectorAll('.menuColor')
                for(let h=0;h<headerMenu.length;h++){
                    headerMenu[h].style.color='#DCE2F0'    
                }
                // e.target.style.width=100+"vw"
                // e.target.style.height=100+"vw"
                for (let i = 0; i < document.querySelectorAll('.circleItem').length; i++) {
                    if (e.target == document.querySelectorAll('.circleItem')[i]) {
                        full.style.width = 100 * this.circleStyle.length + 'vw'
                        setTimeout(() => {
                            const offset = document.querySelectorAll('.full')[1].offsetWidth;
                            full.style.left = -offset * i + 'px'
                            headerMenu[i+1].style.color='red'
                        }, 0)
                        return this.click = i
                    }
                  
                }
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
                        let headerMenu=document.querySelectorAll('.menuColor')
                        for(let h=0;h<headerMenu.length;h++){
                            headerMenu[h].style.color='#DCE2F0'    
                        }
                        if (e.wheelDelta <= 0) {
                            if (this.click != fullbox.length - 1 &&this.click <fullbox.length - 1 ) {
                                for (let i = 0; i < fullbox.length; i++) {
                                    fullbox[i].style.width = 90 + 'vw'
                                    fullbox[i].style.height = 85 + 'vh'
                                }
                                this.click==fullbox.length
                            headerMenu[this.click+2].style.color='red'

                                full.style.left = -100 * (this.click + 1) + 'vw'
                                setTimeout(() => {
                                    for (let i = 0; i < fullbox.length; i++) {
                                        fullbox[i].style.width = 100 + 'vw'
                                        fullbox[i].style.height = 100 + 'vh'
                                    }
                                    return this.click+1 >=fullbox.length-1?this.click=fullbox.length-1:this.click++
                                }, 600)
                            }
                        }
                        else {
                            if (this.click != 0 && this.click > 0) {
                                for (let i = 0; i < fullbox.length; i++) {
                                    fullbox[i].style.width = 90 + 'vw'
                                    fullbox[i].style.height = 85 + 'vh'
                                }
                                headerMenu[this.click].style.color='red'

                                full.style.left = -100 * (this.click - 1) + 'vw'
                                setTimeout(() => {
                                    for (let i = 0; i < fullbox.length; i++) {
                                        fullbox[i].style.width = 100 + 'vw'
                                        fullbox[i].style.height = 100 + 'vh'
                                    }
                                    return this.click <= 0?this.click=0:this.click--
                                }, 600)
                            }
                        }
                    }, 200)
                    console.log(this.click)
                }
            },
            home(e){
                let headerMenu=document.querySelectorAll('.menuColor')
                for(let h=0;h<headerMenu.length;h++){
                    headerMenu[h].style.color='#DCE2F0'    
                }
                e.target.style.color='red'
                this.main = true;
                this.sub = false
            }
        }
    })
}
