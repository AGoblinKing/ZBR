ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.entities.trigger',
	'game.entities.player',
	'game.entities.spike',
	'game.levels.test'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	gravity: 300, // All entities are affected by this
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		// Bind keys
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.SPACE, 'jump' );
		ig.input.bind( ig.KEY.C, 'shoot' );
		
		// Load the LevelTest as required above ('game.level.test')
		this.loadLevel( LevelTest );
	},
	
	update: function() {		
		// screen follows the player
		var player = this.getEntitiesByType( EntityPlayer )[0];
		if( player ) {
			this.screen.x = player.pos.x - ig.system.width/2;
			this.screen.y = player.pos.y - ig.system.height/2;
		}
		
		// Update all entities and BackgroundMaps
		this.parent();
	},
	
	draw: function() {
		// Draw all entities and BackgroundMaps
		this.parent();
		
		this.font.draw( 'Arrow Keys, X, C', 2, 2 );
	}
});


// Start the Game with 60fps, a resolution of 240x160, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 240, 160, 2 );

});
