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
	}
)
.sort( { 'start' : 1 } )
.forEach(printjson);
