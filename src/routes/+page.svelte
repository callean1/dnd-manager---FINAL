<script>
  const images = [
    '/images/Home-Screen8.png',
    '/images/Home-Screen6.png',
    '/images/Home-Screen3.png',
    '/images/Home-Screen9.png',
    '/images/Home-Screen5.png',
    '/images/Home-Screen2.png',
    '/images/Home-Screen7.png',
    '/images/Home-Screen.png',
    '/images/Home-Screen4.png'
  ];

  let currentIndex = $state(0);

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  };

  let interval;
  $effect(() => {
    interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  });

  const getIndex = (offset) => (currentIndex + offset + images.length) % images.length;
</script>

<svelte:head>
  <title>D&D Manager</title>
</svelte:head>

<div class="container py-5">
  <div class="text-center">
    <h1>Willkommen zu deinem Dungeons & Dragons-Manager</h1>
    <p class="intro">
      Tauche ein in die magische Welt von D&D. Finde praktische Übersichten über Rassen und Klassen,
      erstelle eigene Charaktere und mach dich bereit für dein nächstes episches Abenteuer.
    </p>
    <p class="intro">Roll for Initiative!</p>

    <div class="carousel-wrapper">
      <button class="nav-btn left fancy-button" onclick={prevSlide}>&laquo;</button>

      <div class="carousel-track">
        {#each [-1, 0, 1] as offset}
          <div class="slide {offset === 0 ? 'center' : 'side'}">
            <div class="frame-container">
              <img src={images[getIndex(offset)]} alt="Bild" />
              <div class="frame-overlay"></div>
            </div>
          </div>
        {/each}
      </div>

      <button class="nav-btn right fancy-button" onclick={nextSlide}>&raquo;</button>
    </div>
  </div>
</div>

<style>
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .intro {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .carousel-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    position: relative;
  }

  .carousel-track {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    max-width: 960px;
    width: 100%;
  }

  .slide {
    flex-shrink: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .slide.center {
    transform: scale(1);
    opacity: 1;
  }

  .slide.side {
    transform: scale(0.85);
    opacity: 0.5;
  }

  .frame-container {
    position: relative;
    width: 420px;
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .frame-container img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    position: relative;
    top: 1px;
    z-index: 1;
    border-radius: 6px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.8);
  }

  .frame-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/Rahmen.png') no-repeat center center;
    background-size: cover;
    z-index: 2;
    pointer-events: none;
  }

  .nav-btn {
    font-size: 2rem;
    background-color: transparent;
    border: none;
    color: #3e2c1c;
    cursor: pointer;
    z-index: 5;
    transition: transform 0.2s;
  }

  .nav-btn:hover {
    transform: scale(1.2);
  }

  .nav-btn.left {
    position: absolute;
    left: -4rem;
  }

  .nav-btn.right {
    position: absolute;
    right: -4rem;
  }


  @media (max-width: 900px) {
    h1 {
      font-size: 2.2rem;
    }

    .intro {
      font-size: 1.2rem;
      padding: 0 1rem;
    }

    .carousel-wrapper {
      flex-direction: column;
    }

    .carousel-track {
      gap: 1rem;
    }

    .frame-container {
      width: 220px;
      height: 220px;
    }

    .slide.side {
      transform: scale(0.8);
    }

    .nav-btn.left,
    .nav-btn.right {
      margin: 0.5rem 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }

    .intro {
      font-size: 1rem;
    }

    .frame-container {
      width: 180px;
      height: 180px;
    }

    .nav-btn {
      font-size: 1.5rem;
    }
  }
</style>






















