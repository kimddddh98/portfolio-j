$(function(){
        full.style.width = document.getElementById('full').clientWidth * $('#full>div').length + 'px';
        const offset2 = $('#full2').offset().left
        let index=1;
       
    $('#container').on('mousewheel', function (e) {
        let circleArr = [];
        let found = /-\d+|\d+/g;
        if (e.originalEvent.wheelDelta <= 0) {
            if($('.circleItem:last').prop('style').transform!='rotateY(14deg) translateZ(30vw) translateY(0vw)'){
                for (let i = 0; i < $('.circleItem').length; i++) {
                    circleArr.push($('.circleItem').eq(i).prop('style').transform.match(found))
                    $('.circleItem').eq(i).prop('style').transform =
                        `rotateY(${parseInt(circleArr[i][0]) - 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[i][2]) - 5}vw)`
                }
            }
        }
        else {
            if($('.circleItem:first').prop('style').transform!='rotateY(-2deg) translateZ(30vw) translateY(0vw)'){
                for (let i = 0; i < $('.circleItem').length; i++) {
                    circleArr.push($('.circleItem').eq(i).prop('style').transform.match(found))
                    $('.circleItem').eq(i).prop('style').transform =
                        `rotateY(${parseInt(circleArr[i][0]) + 32}deg) translateZ(30vw) translateY(${parseInt(circleArr[i][2]) + 5}vw)`
    
                }
            }
        };
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
        
});