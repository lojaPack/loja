var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function chamaAnun(){
    loja.style.display='block'
  }

  function fechaAnun(){
    loja.style.display='none'
  }

  /*====== links ========*/
  function gage(){
      const siteGage = confirm('Você deseja ir para o site da Gage developer ? ')
      if(site == true){
          location='https://gustavowp8.github.io/Gage_Developer/'
      }
  }

  function apoio(){
    const apoioN = confirm('Este site não tem anúncios e ajuda mulheres a vender e produzir conteúdos, ajude a manter esta plataforma no ar com uma doação de R$ 15,00.')
    if(apoioN == true){
        location='https://mpago.la/2C5bg5r'
    }
  }

  function contos(){
      alert('No momento não é possível o acesso de novos assinantes!')
  }
  function plano(){
    alert('Não e possivel fazer esta operação no momento!')
  }

  function sobre(){
    location='sobre.html'
  }
  function voltaInicio(){
    location='index.html'
  }

  function irLuana(){
    location='https://lojapack.github.io/luana/'
  }
  /*====== links ========*/

  /*====== Formulario ======*/
function envioDados(){
  const nome = document.getElementById('tNome').value
  const tele = document.getElementById('tTel').value


  var my_text = `Solicitação de criar perfil de  %0A %0A  ${nome} %0A %0A Telefone: ${tele}`

  var token = "5101167923:AAHY984g_xsMRbz-m2Bvyz-N_lAgWXBVhwE";
  var chat_id = -1001247274051
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  alert('Dados enviados')
  contato.style.display='none'
}
  /*====== Formulario ======*/

  function casdPlanoGrat(){
    loja.style.display='none'
    contato.style.display='block'
  }

  function irAna(){
    location='https://lojapack.github.io/anajulia/'
  }