const sqlite3 = require('better-sqlite3');

class DB{
    constructor(db){
        this.db = new sqlite3(db);
    }

    insert(tableName,title,content,date){
        let sql = `insert into ${tableName} (title, content, date) values (?, ?, ?)`
        this.db.prepare(sql).run(title,content,date);
    }

    delete(tableName,title){
        let sql = `delete from ${tableName} where title = ?`
        this.db.prepare(sql).run(title);
    }

    find(tableName,title){
        let sql = `select * from ${tableName} where title = ?`
        var row = this.db.prepare(sql).all(title);
        return row;
    }

    findAll(tableName){
        let sql = `select * from ${tableName}`;
        var row = this.db.prepare(sql).all();
        return row;
    }

    update(tableName,preTitle,nowTitle,content,date){
        let sql = `update ${tableName} set title = ?, content = ?, date = ? where title = ?`;
        this.db.prepare(sql).run(nowTitle,content,date,preTitle);
    }
}

module.exports = DB;