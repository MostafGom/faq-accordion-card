document.querySelectorAll('.accordion_question').forEach(item=>{
  item.addEventListener('click',(event)=>{
      // console.log('clicked');
      if(!item.classList.contains('open')){
        item.nextElementSibling.classList = 'accordion_container collapsing'
        
        setTimeout(()=>{
        item.nextElementSibling.classList = 'accordion_container open'
        
      },300)

      }
      else{
        item.nextElementSibling.classList = 'accordion_container collapsing'
        setTimeout(()=>{
        item.nextElementSibling.classList = 'accordion_container collapse'
      },300)
      }
      item.classList.toggle('open')
      
    })
})