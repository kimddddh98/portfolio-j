$(function(){
    let circleHover;
    let found = /-\d+|\d+/g;
    $('.circleItem').on('mouseover', function () {
        circleHover = [];
        circleHover.push($(this).prop('style').transform.match(found))
        $(this).prop('style').transform =
        `rotateY(${parseInt(circleHover[0][0])-5}deg) translateZ(${parseInt(circleHover[0][1])+5}vw) translateY(${parseInt(circleHover[0][2])}vw)`
    })
    $('.circleItem').on('mouseout', function () {
        circleHover = [];
        circleHover.push($(this).prop('style').transform.match(found))
        $(this).prop('style').transform =
        `rotateY(${parseInt(circleHover[0][0])+5}deg) translateZ(${parseInt(circleHover[0][1])-5}vw) translateY(${parseInt(circleHover[0][2])}vw)`
    })
    // document.getElementById('home').onclick=function(){
    //     $('#full').css({
    //         display: 'none',
    //     });
    //     $('#container').show();
    //     $('.circleItem').show();
    //     // $('header ul li a').css({color:'#DCE2F0'})

    //     // $(this).css({color:'red'})

    //     for (let i = 0; i < $('.circleItem').length; i++) {
    //         // circleArr.push($('.circleItem').eq(i).prop('style').transform.match(found))
    //         $('.circleItem').eq(i).prop('style').transform =
    //             `rotateY(${parseInt(70*i)}deg) translateZ(30vw) translateY(${parseInt(10*i)}vw)`
    //     }
    // }
        
    $('.circleItem').on('click', function () {
        let circleIndex =$(this).index();
        $(this).siblings().hide();
        // $(this).prop('style').transform='rotateY(0deg) translateZ(30vw) translateY(0vw)'
        $(this).css('transform','rotateY(0deg) translateZ(30vw) translateY(0vw)')
        $(this).animate({ scale: '700%' }, 1000, function () {
            $('#container').hide();
            $('#full').css({
                width: 100 * $('#full>div').length + 'vw',
                display: 'flex'
            });
            $(this).css({ scale: 'none',rotateY:'none',translateZ:'none',translateY:'none' });
            $('header ul li a').eq(circleIndex+1).css({color:'red'})
            const offset2 = $('#full2').offset().left
            $('#full').css({ left: -offset2 * circleIndex })
            let index = circleIndex + 1;
            $('#full').on("mousewheel", function (event) {
                if (event.originalEvent.wheelDelta <= 0) {
                    if (index != $('#full>div').length) {
                        $('#full>div').stop().animate({
                            height: 85 + 'vh',
                            width: 85 + 'vw'
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
                            height: 85 + 'vh',
                            width: 85 + 'vw'
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
            
            if($('.circleItem:first').prop('style').transform!='rotateY(-280deg) translateZ(30vw) translateY(-40vw)')
            {
                for (let i = 0; i < $('.circleItem').length; i++) {
                    circleArr.push($('.circleItem').eq(i).prop('style').transform.match(found))
                    $('.circleItem').eq(i).prop('style').transform =
                        `rotateY(${parseInt(circleArr[i][0]) - 35}deg) translateZ(30vw) translateY(${parseInt(circleArr[i][2]) - 5}vw)`
                }
            }
           
        }
        else {
            if($('.circleItem:last').prop('style').transform!='rotateY(280deg) translateZ(30vw) translateY(40vw)'){
                for (let i = 0; i < $('.circleItem').length; i++) {
                    circleArr.push($('.circleItem').eq(i).prop('style').transform.match(found))
                    $('.circleItem').eq(i).prop('style').transform =
                        `rotateY(${parseInt(circleArr[i][0]) + 35}deg) translateZ(30vw) translateY(${parseInt(circleArr[i][2]) + 5}vw)`
    
                }
            }
        };
    })

        
        
});