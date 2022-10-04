var Dots = document.querySelector('#dots');
var Showmore = document.querySelector('#more');
const btn      =  document.querySelector('#readmore');
Showmore.style.display = 'none';

function showtext(event)
{


    if(Dots.style.display === 'none')
    {

        
        Dots.style.display     = 'inline';
        btn.textContent.display = 'Read More';
    }
    else
    {
         btn.textContent.display = 'Read Less';
        Showmore.style.display = 'inline';
        Dots.style.display = 'none';
       
    }

    
}



btn.addEventListener('click', showtext);
