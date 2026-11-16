// LOVR — edit the text and labels here to personalize the template.
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) menuButton.addEventListener('click', () => nav.classList.toggle('open'));

  const letters = [
    { title: 'Hey, my favorite person.', body: 'Semoga hari-harimu selalu punya alasan untuk tersenyum. Tapi kalau hari ini belum berjalan sesuai harapan, nggak apa-apa. Kamu nggak harus selalu kuat, nggak harus selalu baik-baik saja. Aku cuma mau kamu tahu, ada seseorang yang selalu senang melihat kamu berusaha.' },
    { title: 'Please take it easy, okay?', body: 'Kalau hari ini terasa berat, istirahat dulu. Kamu tidak harus menyelesaikan semuanya sekaligus. Aku bangga sama kamu, bahkan di hari-hari ketika kamu merasa belum melakukan apa-apa. Pelan-pelan saja. Aku tetap ada di sini, mendukungmu dari dekat maupun jauh.' },
    { title: 'In case you forgot...', body: 'Aku suka caramu tertawa, caramu bercerita tentang hal-hal kecil, dan caramu menjadi dirimu sendiri. Aku mungkin nggak selalu pandai merangkai kata, tapi satu hal yang pasti: kehadiranmu membuat banyak hal terasa lebih berarti.' }
  ];
  document.querySelectorAll('.letter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.letter-tab').forEach(item => item.classList.remove('selected'));
      tab.classList.add('selected');
      const letter = letters[Number(tab.dataset.letter)];
      const title = document.getElementById('letter-title');
      const body = document.getElementById('letter-body');
      if (title && body && letter) {
        title.textContent = letter.title; body.textContent = letter.body;
        title.classList.remove('fade-in'); body.classList.remove('fade-in');
        void title.offsetWidth; title.classList.add('fade-in'); body.classList.add('fade-in');
      }
    });
  });

  const reveal = document.getElementById('reveal-button');
  if (reveal) reveal.addEventListener('click', () => {
    const target = document.getElementById('surprise-text');
    if (target) {
      target.innerHTML = 'If I had to choose<br><em>all over again,</em><br>it would still be you. ♡';
      target.classList.remove('fade-in'); void target.offsetWidth; target.classList.add('fade-in');
      reveal.textContent = 'MESSAGE UNLOCKED ♥'; reveal.disabled = true;
    }
  });
});
