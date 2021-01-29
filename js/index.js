$(document).ready(function(){
    //console.log("your index.js file is loaded correctly!");
    $("header > nav > ul > li > a").on("click", function(e) { 
        // Prevent a page reload when a link is pressed
        e.preventDefault()
        //console.log($(this).attr("id"))
        // Call the scroll function
        goToByScroll($(this).attr("id"))         
    })
    function goToByScroll(id){
        // Remove "link" from the id
        id = id.replace("Link", "")
        //console.log(id)
        // Scroll
        $('html,body').animate(
          {scrollTop: $("#"+id).offset().top}, "slow")
        // $('html,body').animate(
        //   {scrollTop: $("#"+id).offset().top},
        //   250, 
        //   function(){ 
        //     console.log("Scrolling is done.")
        //   }
        // )
    }
    $("footer > ul > li > a").on("click", function(e) { 
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll2($(this).attr("id"));          
    })
    function goToByScroll2(id){
        // Remove "link" from the ID
        id = id.replace("Link2", "")
        // Scroll
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            'slow')
    }
})
