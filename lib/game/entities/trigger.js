ig.module(
	'game.entities.trigger'
)
.requires(
	'impact.entity'
)
.defines(function(){
    
EntityTrigger = ig.Entity.extend({
    size: {x: 16, y: 16},
    type: 'air',
    string: 'Press <Space> to Jump!',
    checkAgainst: ig.Entity.TYPE.BOTH,
    _wmScalable: true,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(196, 255, 0, 0.7)',
    check: function( other ) {
        var ent = ig.game.getEntityByName('player');
        ent.inform(this.type, this.string);
    }
});

});