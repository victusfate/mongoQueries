t = db.getMongo().getDB('cameo-development')


t.full_scenes.find(
    function() {
        for (content in this) {
            for (files in this[content]) {
                for (hash in this[content][files]) {
                    if (this[content][files][hash].file_type    == 'Video'
                    &&  this[content][files][hash].file_context == 'User Upload') {
                        return true;
                    }
                }
            }
        }

        return false; 
    }
).limit(1).forEach(printjson)
