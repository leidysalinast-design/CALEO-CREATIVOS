// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('visible') }
  })
},{threshold:0.12})
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay = (i % 4)*0.08+'s'
  observer.observe(el)
})

// Portfolio filter
function filterPortfolio(cat, btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'))
  btn.classList.add('active')
  document.querySelectorAll('.portfolio-item').forEach(item=>{
    if(cat==='todos'||item.dataset.cat===cat){
      item.style.display=''
    } else {
      item.style.display='none'
    }
  })
}

// Testimonial slider
let currentSlide = 0
const totalSlides = 5
function goToSlide(n){
  document.querySelectorAll('.testimonial-card').forEach((c,i)=>{
    c.classList.toggle('active', i===n)
  })
  document.querySelectorAll('.dot').forEach((d,i)=>{
    d.classList.toggle('active', i===n)
  })
  currentSlide = n
}
setInterval(()=>{ goToSlide((currentSlide+1)%totalSlides) }, 4500)

// Char counter
function updateCount(){
  const v = document.getElementById('msgArea').value
  document.getElementById('charCount').textContent = Math.min(v.length,500)
  if(v.length>500) document.getElementById('msgArea').value = v.slice(0,500)
}

// Nav sticky style
window.addEventListener('scroll',()=>{
  const nav = document.querySelector('nav')
  nav.style.boxShadow = window.scrollY>10 ? '0 2px 20px rgba(0,0,0,0.1)':'0 2px 12px rgba(0,0,0,0.06)'
})
