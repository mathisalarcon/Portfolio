$(document).ready(async function () {
  await loadFull(tsParticles);

  $("#tsparticles")
      .particles()
      .init(particlesOptions);
});