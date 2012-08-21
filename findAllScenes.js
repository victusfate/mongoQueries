t = db.getMongo().getDB('cameo-development')


t.full_scenes.find( 
	function() { 
		for (montage in this) { 
			if (this[montage]) {
				if (this[montage].montage_id == 389) {
                	return true;
                }
            }
        }
        return false; 
	},
	{  
      'start' : 1,
      'hash' : 1
    } 
)
.sort( { 'start' : 1 } )
.forEach( function(x) { print(x.hash) } );
