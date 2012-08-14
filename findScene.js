 t = db.getMongo().getDB('cameo-development')


t.full_scenes.find(
function() { 
	if (this.hash == "5ec8ec820de7389d3d7f01a54b6ad93423f9a277") { 
		return true; 
	} 
	return false; 
})
.forEach(printjson)
