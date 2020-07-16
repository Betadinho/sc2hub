const DB_NAME = 'builddatabase';
const DB_VERSION = 1.2;
let DB;

export default {
    async getDb() {
        return new Promise((resolve, reject) => {
            
            if(DB) { return resolve(DB); }
            console.log("Opening DB ", DB);
            let request = window.indexedDB.open(DB_NAME, DB_VERSION);
            
            request.onerror = e => {
                console.log('Error opening DB', e);
                reject('Error');
            };

            
            request.onsuccess = e => {
                DB = e.target.result;
                resolve(DB);
            };
            
            request.onupgradeneeded = e => {
                console.log('onupgradeneeded');
                let db = e.target.result;
                
                //temp delete
                //db.deleteObjectStore('builds');
                let objectStore = db.createObjectStore('builds', { keyPath: 'id', autoIncrement: true });

                objectStore.createIndex("title", "title", { unique: false });
                objectStore.createIndex("matchup", "matchup", { unique: false });
                objectStore.createIndex("author", "author", { unique: false });
            };
        });
    },

    async deleteBuild(build) {
        let db = await this.getDb();

        return new Promise(resolve => {
            let trans = db.transaction(['builds'], 'readwrite');
            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore('builds');
            store.delete(build.id);
        });
    },

    async getBuilds() {
        let db = await this.getDb();

        return new Promise(resolve => {
            let trans = db.transaction(['builds'], 'readonly');
            trans.oncomplete = () => {
                resolve(builds);
            };

            let store = trans.objectStore('builds');
            let builds = [];

            store.openCursor().onsuccess = e => {
                let cursor = e.target.result;
                if(cursor) {
                    builds.push(cursor.value)
                    cursor.continue();
                }
            }
        });
    },

    async saveBuild(build) {
        let db = await this.getDb();
        
        return new Promise (resolve => {
            let trans = db.transaction(['builds'], 'readwrite');
            trans.oncomplete = () => {
                resolve();
            };
            
            let store = trans.objectStore('builds');
            store.put(build);
        });
    }

}
