$(function(){
    
    $('.circleItem').on('click', function () {
        let circleIndex =$(this).index();
        console.log(circleIndex)
        $(this).siblings().hide();
        $(this).animate({ scale: '700%' }, 1000, function () {
            $(this).css({ transform: 'scale(100%)' });
            $('#container').hide();
            $('#full').css({
                display: 'flex',
                width: 100 * $('#full>div').length + 'vw'
            });
            const offset2 = $('#full2').offset().left
            $('#full').css({ left: -offset2 * circleIndex })
            console.log(offset2)
            let index = circleIndex + 1;

            $('#full').on("mousewheel", function (event) {

                if (event.originalEvent.wheelDelta <= 0) {
                    if (index != $('#full>div').length) {
                        $('#full>div').stop().animate({
                            height: 90 + 'vh',
                            width: 90 + 'vw'
                        }, function () {
                            $('#full').stop().animate({ left: -offset2 * index }, function () {
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
                    if (index != 1) {
                        $('#full>div').stop().animate({
                            height: 90 + 'vh',
                            width: 90 + 'vw'
                        }, function () {
                            $('#full').stop().animate({ left: -offset2 * (index - 2) }, function () {
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

        })
    })
    $('#container').on('mousewheel', function (e) {
        let circleArr = [];
        let found = /-\d+|\d+/g;
        if (e.originalEvent.wheelDelta <= 0) {
            
            if($('.circleItem:last').prop('style').transform!='rotateY(0deg) translateZ(30vw) translateY(0vw)'){
                for (let i = 0; i < $('.circleItem').length; i++) {
                    circleArr.push($('.circleItem').eq(i).prop('style').transform.match(found))
                    $('.circleItem').eq(i).prop('style').transform =
                        `rotateY(${parseInt(circleArr[i][0]) - 35}deg) translateZ(30vw) translateY(${parseInt(circleArr[i][2]) - 5}vw)`
                }
                
            }
           
        }
        else {
            if($('.circleItem:first').prop('style').transform!='rotateY(0deg) translateZ(30vw) translateY(0vw)'){
                for (let i = 0; i < $('.circleItem').length; i++) {
                    circleArr.push($('.circleItem').eq(i).prop('style').transform.match(found))
                    $('.circleItem').eq(i).prop('style').transform =
                        `rotateY(${parseInt(circleArr[i][0]) + 35}deg) translateZ(30vw) translateY(${parseInt(circleArr[i][2]) + 5}vw)`
    
                }
                console.log(
                    $('.circleItem:first').prop('style').transform
        
                    )
            }
        };
    })

        
        
});