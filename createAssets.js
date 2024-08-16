//cria e mostra os elemento do jogo na tela
function createAssets (scene) {

    //Cenario
    scene.add.image(500, 250, "fundo");

    //Adicionando a fisica(sem gravidade) na plataforma
    // scene.add.image(500, 479, "plat");
    plataforma = scene.physics.add.staticGroup();
    plataforma.create(500, 479, "plat");

    //Player
    //scene.add.image(500, 250, "player");
    player = scene.physics.add.sprite(500, 250, "player"); //Adicionando fisica no player
    player.setCollideWorldBounds(true); //não atravesa o chão
    player.setBounce(0.2);  //da uma quicada
    criarAnimations(scene); // chamando a função de criar animação
    player.anims.play("parado", true); // iniciando a animação

    //Star: Coletavel
    var pos = Phaser.Math.FloatBetween(100, 900);
    star = scene.physics.add.sprite(pos, 0, "star");
    star.setBounce(0.5);  //da uma quicada

    //Bombas
    bombs = scene.physics.add.group();

    //Colliders
    scene.physics.add.collider(player, plataforma); //player com plataforma
    scene.physics.add.collider(star, plataforma);   //estrela com plataforma
    scene.physics.add.overlap(star, player, coletarStar);   //estrela com player
    scene.physics.add.collider(bombs, plataforma); //bomba com plataforma
    scene.physics.add.overlap(bombs, player, gameOver);  //bomba com player

    // Entradas do teclado
    teclado = scene.input.keyboard.createCursorKeys();

    //HUD - Head Ups Display;
    var configTxt = {
        fontSize: "25px",
        fontFamily: "Arial Black",
    }
    pontosTxt = scene.add.text( 20, 20,"Pontos: 0", configTxt);

}

function coletarStar(star, player){ //Coletar a estrela 
    let pos = Phaser.Math.FloatBetween(100, 900); // mudar posição da estrela
    star.setX(pos);
    star.setY(0);
    star.setVelocity(0);  //Mudando velocidade da estrela 

    pontos+=10;
    pontosTxt.setText("Pontos: " + pontos);

    //Criar uma bomba
    let bomb = bombs.create(pos, 0, "bombs");
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(50);
}

function gameOver(player, bombs){
    player.setVisible(false);
    isGameOver = true;

    var configTxt = {
        fontSize: "45px",
        fontFamily: "Arial Black",
        color: "black",
    };
    player.scene.add.text( 350, 250,"Game Over\n Pontuação :" + pontos, configTxt);

}


function criarAnimations(scene) {
    //cria animações
    var parado = {
        key: "parado",
        frames: [{key: "player", frame: 4}],
    };
    scene.anims.create(parado);

    var left = {
        key: "left",
        frames: scene.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      };
      scene.anims.create(left);
    
      var right = {
        key: "right",
        frames: scene.anims.generateFrameNumbers("player", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
      };
      scene.anims.create(right);


     
    }


