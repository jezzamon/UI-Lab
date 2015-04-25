$(document).ready(function() {
 
/*****************************************/    
/*waypoints and animate css*/
/*****************************************/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              
        });
  });
}


    
/******************************************** / 
    /*fulljs */
/********************************************/
    $('#fullpage').fullpage({
        menu: '#myMenu',                /*currently not used, using dot navigation*/
        navigation: true,               /*dot navigation*/
        navigationPosition: 'left',
        navigationTooltips: ['first','second','third','fourth','fifth'],
        showActiveTooltip: true,
        continuousVertical: true,
         afterLoad: function(anchorLink, index){
            /*var loadedSection = $(this);*/
            /****************section 2 action - animate.css************************/
             if(index === 2) {
                 console.log('here!');
            $('.os-animation').addClass('animated');
                 setTimeout(function() {
                     $('.os-animation').addClass('zoomOutLeft');
                 },3000);
                 
            } if (index===3) {
           /****************section 3 action - textualizer************************/ 
            
            
            } if(index===4) {
            /*section*************** 4 action - svg writing************************/
                
                $('#svg5573').css('opacity',1); /*had to hide first due to fullpagejs*/
            var anim2 = new Vivus('svg5573', {
                type: 'oneByOne',
                duration: 200,
                start: 'inViewport'
                });    
            }
        
         },
        sectionsColor: ['#1abc9c','#2ecc71','#e74c3c','#8e44ad','#f39c12'],
        onLeave: function(index, nextIndex, direction){
            /*var leavingSection = $(this);*/

            //after leaving section 2
            if(index == 2 && direction =='down'){
                $('.os-animation').removeClass('animated zoomOutLeft');
            }
        },
        afterRender: function() {
            console.log("all good");
            
        }
        
            
       
    });

   
    /*vivus*/
    /************************************/
    var anim1 =  new Vivus('svg5559', {
     type: 'delayed',
     duration: 200
 }); 
    /*var anim2 = new Vivus('svg5573', {
    type: 'delayed',
    duration: 200
    });*/
    
  
});

