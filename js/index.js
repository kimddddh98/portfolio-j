$(function(){
        full.style.width = document.getElementById('full').clientWidth * $('#full>div').length + 'px';
        const offset2 = $('#full2').offset().left
        let index=1;
       
        $('#container').on('mousewheel', function(e){
        // let circle1=$('.circleItem').eq(0).prop('style');
        // let circle2=$('.circleItem').eq(1).prop('style');
        // let circle3=$('.circleItem').eq(2).prop('style');
        // let circle4=$('.circleItem').eq(3).prop('style');
        // let circle5=$('.circleItem').eq(4).prop('style');
        // let circle6=$('.circleItem').eq(5).prop('style');
        // let circle7=$('.circleItem').eq(6).prop('style');
        let circleArr=[];
        let found=/-\d+|\d+/g;
            for (let i = 0; i < $('.circleItem').length; i++) {
                circleArr.push($('.circleItem').eq(i).prop('style').transform.match(found))
                if (e.originalEvent.wheelDelta <= 0) {
                    $('.circleItem').eq(i).prop('style').transform=
                    `rotateY(${parseInt(circleArr[i][0]) - 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[i][2]) - 5}vw)`
                }
                else {
                    $('.circleItem').eq(i).prop('style').transform=
                    `rotateY(${parseInt(circleArr[i][0]) + 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[i][2]) + 5}vw)`
                    // circle1.transform = `rotateY(${parseInt(circleArr[0][0]) + 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[0][2]) + 5}vw)`
                    // circle2.transform = `rotateY(${parseInt(circleArr[1][0]) + 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[1][2]) + 5}vw)`
                    // circle3.transform = `rotateY(${parseInt(circleArr[2][0]) + 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[2][2]) + 5}vw)`
                    // circle4.transform = `rotateY(${parseInt(circleArr[3][0]) + 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[3][2]) + 5}vw)`
                    // circle5.transform = `rotateY(${parseInt(circleArr[4][0]) + 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[4][2]) + 5}vw)`
                    // circle6.transform = `rotateY(${parseInt(circleArr[5][0]) + 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[5][2]) + 5}vw)`
                    // circle7.transform = `rotateY(${parseInt(circleArr[6][0]) + 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[6][2]) + 5}vw)`
                }

            }
            // if (e.originalEvent.wheelDelta <= 0) {
            //     circle1.transform = `rotateY(${parseInt(circleArr[0][0]) - 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[0][2]) - 5}vw)`
            //     circle2.transform = `rotateY(${parseInt(circleArr[1][0]) - 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[1][2]) - 5}vw)`
            //     circle3.transform = `rotateY(${parseInt(circleArr[2][0]) - 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[2][2]) - 5}vw)`
            //     circle4.transform = `rotateY(${parseInt(circleArr[3][0]) - 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[3][2]) - 5}vw)`
            //     circle5.transform = `rotateY(${parseInt(circleArr[4][0]) - 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[4][2]) - 5}vw)`
            //     circle6.transform = `rotateY(${parseInt(circleArr[5][0]) - 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[5][2]) - 5}vw)`
            //     circle7.transform = `rotateY(${parseInt(circleArr[6][0]) - 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[6][2]) - 5}vw)`
            // }
           

        })

        $(window).on("mousewheel", function (event) {
           
            if (event.originalEvent.wheelDelta <= 0) {
                if(index==$('#full>div').length){
                    index=index
                }
                
                else {
                    $('#full>div').stop().animate({
                        height: 90 + 'vh',
                        width: 90 + 'vw'
                    },function(){
                        $('#full').stop().animate({ left: -offset2*index },function(){
                            $('#full>div').stop().animate({
                            height: 100 + '%',
                            width: 100 + 'vw'
                            })
                            index++
                        })
                    })
                };
            }
            else {

                if(index==1){index=index}
                
                else {
                    $('#full>div').stop().animate({
                        height: 90 + 'vh',
                        width: 90 + 'vw'
                    },function(){
                        $('#full').stop().animate({ left: -offset2*(index-2) },function(){
                            index--
                            $('#full>div').stop().animate({
                            height: 100 + '%',
                            width: 100 + 'vw'
                            })
                        })
                    })
                };
            }
        })
        // $('.circleItem').mouseover(function(){
        //     console.log($(this).css('transform'))
            
        //     // $(this).css({Transform:` rotateY(220deg) translateZ(30vw) translateY(-10vw)`})
        // });
        // $('.circleItem').mouseout(function(){
        //     // $(this).css({Transform:' rotateY(220deg) translateZ(30vw) translateY(-10vw)'})
        // })

        
});