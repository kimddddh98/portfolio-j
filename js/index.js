$(function(){
        full.style.width = document.getElementById('full').clientWidth * $('#full>div').length + 'px';
        const offset2 = $('#full2').offset().left
        let index=1;
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
                            console.log(index);
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