t = db.getMongo().getDB('cameo-development')


t.full_scenes.find( 
	function() { 
		for (frames in this) { 
			if (this[frames]) {
				for (frame in this[frames]) { 
					if (this[frames][frame]) {
						for (item in this[frames][frame]) { 
							if (this[frames][frame][item]) {
								if (this[frames][frame][item].data) {
									if (this[frames][frame][item].data.file_hash) {
										if ( this[frames][frame][item].data.file_hash == '818007739475f4b9aca9eb8ae09bc13f1845a425') {
											return true;
										}
									}
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
