window.onload = () => {
    var cmp =[
        {template: '<div><div v-for="(item,index) in circleStyle">지역 컴포넌트가 등록되었습니다{{index}}</div></div>'},
        {template: '<div>지역 컴포넌트가 등록되었습니다{{index}}</div>'},
        {template: '<div>지역 컴포넌트가 등록되었습니다3</div>'},
        {template: '<div>지역 컴포넌트가 등록되었습니다4</div>'},
        {template: '<div>지역 컴포넌트가 등록되었습니다5</div>'}
    ]
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
            click: 0,
            header:false
            
        },
        // components:{
        //     "my-component":cmp[1]
        // },
        methods: {
            subPage: function (e) {
                this.header=true
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
            circleOver(e){
                // let found = /-\d+|\d+/g;
                // let transfromArr=[]
                // let circleItem=document.querySelectorAll('.circleItem')

                // for(let i in this.circleStyle){
                //     transfromArr.push(circleItem[i].style.transform.match(found))

                // }

                // circleItem[0].style.transform=`rotateY(${parseInt(transfromArr[0][0])}deg) translateZ(${parseInt(transfromArr[0][1])}vw) translateY(${parseInt(transfromArr[0][2])}vw) scale(110%)`
                
            },
            circleOut(e){
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
                        let headerMenu=document.querySelectorAll('.menuColor')

                        if (e.wheelDelta <= 0) {
                            if (this.click != fullbox.length - 1 &&this.click <fullbox.length - 1 ) {
                                for (let i = 0; i < fullbox.length; i++) {
                                    fullbox[i].style.width = 90 + 'vw'
                                    fullbox[i].style.height = 85 + 'vh'
                                }
                                    this.click==fullbox.length
                                    if(this.click<headerMenu.length-2){
                                        for(let h=0;h<headerMenu.length;h++){
                                            headerMenu[h].style.color='#DCE2F0'    
                                        }
                                        headerMenu[this.click+2].style.color='red'
                                        
                                    }


                                
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
                                // headerMenu[this.click].style.color='red'
                                // if(this.click<headerMenu.length-2){
                                    for(let h=0;h<headerMenu.length;h++){
                                        headerMenu[h].style.color='#DCE2F0'    
                                    }
                                    headerMenu[this.click].style.color='red'
                                    
                                // }
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
                this.header=false
                let headerMenu=document.querySelectorAll('.menuColor')
                for(let h=0;h<headerMenu.length;h++){
                    headerMenu[h].style.color='#DCE2F0'    
                }
                e.target.style.color='red'
                this.main = true;
                this.sub = false
            },
            section(e){
                console.log(this.click)
                let full=document.getElementById('full')
                let fullbox=document.querySelectorAll('.full')
                let headerMenu=document.querySelectorAll('.menuColor')
                // headerMenu[this.click].style.color='red'
                for(let h=0;h<headerMenu.length;h++){
                    headerMenu[h].style.color='#DCE2F0' 
                    e.target.style.color='red'
                    if(headerMenu[h].style.color=='red') 
                    this.click=h-1 
                    

                }
                for (let i = 0; i < fullbox.length; i++) {
                    fullbox[i].style.width = 90 + 'vw'
                    fullbox[i].style.height = 85 + 'vh'
                }
                full.style.left=-100*this.click+'vw'

                setTimeout(()=>{
                for (let i = 0; i < fullbox.length; i++) {
                    fullbox[i].style.width = 100+ 'vw'
                    fullbox[i].style.height = 100 + 'vh'
                }

                },600)
                // return this.click=2
            }
        }
       
    })
}
