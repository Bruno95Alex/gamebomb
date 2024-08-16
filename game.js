var config = {      //configurações da tela 
    width: 1000,        //largura
    height: 500,        //altura
    scale: {autoCenter: Phaser.Scale.CENTER_BOTH}, //centralizar a tela
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    //Fisica do jogo
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 300}, //gravidade
        },
    },
};

var game = new Phaser.Game(config);  //indicando ao phaser a criar uma instancia com essas configurações

//Funções responsaveis pela cena
function preload () { //carregamento
    preLoadAssets(this);
}

function create () { //criação
    createAssets(this);
}

function update () { //atualização
    updateGame(this);
}