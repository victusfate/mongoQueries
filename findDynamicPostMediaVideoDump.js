t = db.getMongo().getDB('cameo-development')


t.full_scenes.find( 
	function() { 
		for (frames in this) { 
			if (this[frames]) {
				for (frame in this[frames]) { 
					if (this[frames][frame]) {
						for (item in this[frames][frame]) { 
							if (this[frames][frame][item]) {
								if (this[frames][frame][item].type == 'Dynamic.Post.Media.Video') { 
									return true; 
								} 
							}
						} 
					}
				} 
			}
		} 
		return false; 
	}
)
.sort( { 'montage.montage_id' : -1 } )
.limit(10)
.forEach(printjson);

