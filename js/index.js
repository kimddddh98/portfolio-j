$(function(){
        full.style.width = document.getElementById('full').clientWidth * $('#full>div').length + 'px';
        const offset2 = $('#full2').offset().left
        let index=1;
       
        $('#container').on('mousewheel', function(e){
        let circle1=$('.circleItem').eq(0).prop('style');
        let circle2=$('.circleItem').eq(1).prop('style');
        let circle3=$('.circleItem').eq(2).prop('style');
        let circle4=$('.circleItem').eq(3).prop('style');
        let circle5=$('.circleItem').eq(4).prop('style');
        let circle6=$('.circleItem').eq(5).prop('style');
        let circle7=$('.circleItem').eq(6).prop('style');
        let found=/-*\d+/g;
        let rY1=circle1.transform.match(found)[0];
        let tZ1=parseInt(circle1.transform.match(found)[1]);
        let tY1=parseInt(circle1.transform.match(found)[2])
        console.log(typeof parseInt(rY1));
        
        let rY2=circle2.transform.match(found)[0];
        let tZ2=circle2.transform.match(found)[1];
        let tY2=circle2.transform.match(found)[2];

        let rY3=circle3.transform.match(found)[0];
        let tZ3=circle3.transform.match(found)[1];
        let tY3=circle3.transform.match(found)[2];

        let rY4=circle4.transform.match(found)[0];
        let tZ4=circle4.transform.match(found)[1];
        let tY4=circle4.transform.match(found)[2];

       

        let rY5=circle5.transform.match(found)[0];
        let tZ5=circle5.transform.match(found)[1];
        let tY5=circle5.transform.match(found)[2];

        let rY6=circle6.transform.match(found)[0];
        let tZ6=circle6.transform.match(found)[1];
        let tY6=circle6.transform.match(found)[2];

        let rY7=circle7.transform.match(found)[0];
        let tZ7=circle7.transform.match(found)[1];
        let tY7=circle7.transform.match(found)[2];

            if (e.originalEvent.wheelDelta <= 0){
            circle1.transform=`rotateY(${parseInt(rY1-65)}deg) translateZ(30vw) translateY(${parseInt(tY1-10)}vw)`
            circle2.transform=`rotateY(${parseInt(rY2-65)}deg) translateZ(30vw) translateY(${parseInt(tY2-10)}vw)`
            circle3.transform=`rotateY(${parseInt(rY3-65)}deg) translateZ(30vw) translateY(${parseInt(tY3-10)}vw)`
            circle4.transform=`rotateY(${parseInt(rY4-65)}deg) translateZ(30vw) translateY(${parseInt(tY4-10)}vw)`
            circle5.transform=`rotateY(${parseInt(rY5-65)}deg) translateZ(30vw) translateY(${parseInt(tY5-10)}vw)`
            circle6.transform=`rotateY(${parseInt(rY6-65)}deg) translateZ(30vw) translateY(${parseInt(tY6-10)}vw)`
            circle7.transform=`rotateY(${parseInt(rY7-65)}deg) translateZ(30vw) translateY(${parseInt(tY7-10)}vw)`
                console.log(parseInt(rY1)+65)
        }
            else{
                circle1.transform=`rotateY(${parseInt(rY1)+65}deg) translateZ(30vw) translateY(${parseInt(tY1)+10}vw)`
                circle2.transform=`rotateY(${parseInt(rY2)+65}deg) translateZ(30vw) translateY(${parseInt(tY2)+10}vw)`
                circle3.transform=`rotateY(${parseInt(rY3)+65}deg) translateZ(30vw) translateY(${parseInt(tY3)+10}vw)`
                circle4.transform=`rotateY(${parseInt(rY4)+65}deg) translateZ(30vw) translateY(${parseInt(tY4)+10}vw)`
                circle5.transform=`rotateY(${parseInt(rY5)+65}deg) translateZ(30vw) translateY(${parseInt(tY5)+10}vw)`
                circle6.transform=`rotateY(${parseInt(rY6)+65}deg) translateZ(30vw) translateY(${parseInt(tY6)+10}vw)`
                circle7.transform=`rotateY(${parseInt(rY7)+65}deg) translateZ(30vw) translateY(${parseInt(tY7)+10}vw)`
            }
        
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