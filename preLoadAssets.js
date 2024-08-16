//função responsavel pelo carregamento dos sprites
function preLoadAssets (scene) {
    console.log(scene);

    // cenário
    scene.load.image("fundo", "./assets/fundo.png");
    scene.load.image("plat", "./assets/plataforma.png");

    //Player
    scene.load.spritesheet("player", "./assets/player.png", {
        frameWidth:  32,
        frameHeight: 48,
    });


    //coletaveis
    scene.load.image("star", "./assets/star.png");


    //Inimigos
    scene.load.image("bombs", "./assets/bomb.png");
}