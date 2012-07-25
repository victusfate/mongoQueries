t = db.getMongo().getDB('cameo-development')


t.full_scenes.find( 
	function() { 
		for (frames in this) { 
			for (frame in this[frames]) { 
				for (item in this[frames][frame]) { 
					if (this[frames][frame][item].type == 'Dynamic.Post.Media.Video') { 
						return true; 
					} 
				} 
			} 
		} 
		return false; 
	}, 
	{ 'montage.montage_id' : 1} 
)
.limit(100)
.forEach(printjson);

