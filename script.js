const images =document.getElementById('imgs')
const leftbtn=document.getElementById('left')
const rightbtn=document.getElementById('right')

const img = document.querySelectorAll('#imgs img')


let idx=0

let interval = setInterval(run, 2000)


function run()
{
      idx++
      changeimage()
}

function changeimage()
{
      if(idx > img.length - 1)
      {
          idx=0;
      }
      else if( idx < 0)
      {
            idx=img.length-1
      }

      images.style.transform = `translateX(${-idx * 500}px)`
}
function reset()
{
      clearInterval(interval)
      interval = setInterval(run,2000)
}

rightbtn.addEventListener('click', ()=>
{
      idx++
      changeimage()
      reset()
})
leftbtn.addEventListener('click', ()=>
{
      idx--
      changeimage()
      reset()
})