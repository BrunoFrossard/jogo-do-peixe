var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var tubarão;

function preload() {
    this.load.image('bruno', 'assets/bg_azul-escuro.png');


    this.load.image('logo','assets/logo-inteli_branco.png' );


    this.load.image('tubarão', 'peixes/tubarao.png');


    this.load.image('adicional', 'assets/tesouro.png');


   
   }

function create() {
    this.add.image(400,300, 'bruno');


    this.add.image(400,525, 'logo').setScale(0.5);


    this.add.image(650,500, 'adicional').setScale(0.5);

    
    tubarão = this.add.image(400,300,'tubarão')

    tubarão.setFlip(true, false);
}

function update() {                                              


    tubarão.x = this.input.x;
    tubarão.y = this.input.y;
}
