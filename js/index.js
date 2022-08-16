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
                this.main = false;
                this.sub = true;
                for (let i = 0; i < document.querySelectorAll('.circleItem').length; i++) {
                    if (e.target == document.querySelectorAll('.circleItem')[i]) {
                        full.style.width = 100 * this.circleStyle.length + 'vw'
                        setTimeout(() => {
                            const offset = document.querySelectorAll('.full')[1].offsetWidth;
                            full.style.left = -offset * i + 'px'
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
                const offset = document.querySelectorAll('.full')[1].offsetWidth
                const fullbox = document.querySelectorAll('.full');
                const full = document.getElementById('full');
                if (e.wheelDelta <= 0) {
                    if (this.click != fullbox.length - 1) {
                        for (let i = 0; i < fullbox.length; i++) {
                            fullbox[i].style.width = 90 + 'vw'
                            fullbox[i].style.height = 90 + 'vh'
                        }
                        full.style.left = -offset * (this.click + 1) + 'px'
                        setTimeout(() => {
                            for (let i = 0; i < fullbox.length; i++) {
                                fullbox[i].style.width = 100 + 'vw'
                                fullbox[i].style.height = 100 + 'vh'
                            }

                        }, 700)
                        return this.click++
                    }

                }
                else {
                    if (this.click != 0) {
                        for (let i = 0; i < fullbox.length; i++) {
                            fullbox[i].style.width = 90 + 'vw'
                            fullbox[i].style.height = 90 + 'vh'
                        }
                        full.style.left = -offset * (this.click - 1) + 'px'

                        setTimeout(() => {
                            for (let i = 0; i < fullbox.length; i++) {
                                fullbox[i].style.width = 100 + 'vw'
                                fullbox[i].style.height = 100 + 'vh'
                            }
                            return this.click--

                        }, 700)

                    }

                }

            }
        }
    })
}
