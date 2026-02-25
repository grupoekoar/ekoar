const imagensLightbox = document.querySelectorAll('.imagem-lightbox');
const lightbox = document.getElementById('lightbox');
const imagemLightbox = document.getElementById('imagem-lightbox');
const botaoFechar = document.getElementById('botao-fechar');
const botaoSalvar = document.getElementById('botao-salvar');

imagensLightbox.forEach((imagem) => {
 imagem.addEventListener('click', () => {
 lightbox.classList.add('lightbox-ativo');
 imagemLightbox.src = imagem.src;
 });
});

botaoFechar.addEventListener('click', () => {
 lightbox.classList.remove('lightbox-ativo');
});

botaoSalvar.addEventListener('click', () => {
 const link = document.createElement('a');
 link.href = imagemLightbox.src;
 link.download = 'ekoarimage.jpg';
 link.click();
});