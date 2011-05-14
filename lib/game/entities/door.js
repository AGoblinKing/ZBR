ig.module(
	'game.entities.door'
)
.requires(
	'impact.entity'
)
.defines(function(){
    
EntityDoor = ig.Entity.extend({
    size: {x: 16, y: 16},
    target: {},
    
    _wmScalable: true,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(196, 255, 255, 0.7)',
    
    open: function() {
        console.log('opened');
    }
    
});

});