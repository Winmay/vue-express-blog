// var getName = require('../src/js/getLoginName.js');
// var name = getName.getName();
// console.log('get' + name);
var login_name = '周磊'
// var login_name = 'zygg'
    // sql语句
var sqlMap = {
    // 用户
    user: {
        /*add: 'insert into user_info(user_name, user_pwd) values (?,?)',
        check: 'select user_name,user_pwd from user_info',*/
        add: 'insert into userinfo(userName, userPass) values (?,?)',
        check: 'select userName,userPass from userinfo',
    },
    message: {
        /*written: 'insert into message_board(message_list, author, date) values (?,?,?)',
        search: 'select message_list, author, date from message_board'*/
        written: 'insert into datasource(address, name, date) values (?,?,?)',
        search: 'select address, name, date from datasource'
    },
    diary: {
        /*written: 'insert into diary_board(diary_list, author, date) values (?,?,?)',
        search_myself: "select * from diary_board where author='" + login_name + "'",
        search_all: 'select * from diary_board'*/
        written: 'insert into datasource(address, name, date) values (?,?,?)',
        search_myself: "select * from datasource where name='" + login_name + "'",
        search_all: 'select * from datasource'
    },
    comment: {
        /*written: 'insert into comment(userid, msg_id, comment_message, create_time) values (?,?,?,?)',
        search: 'select userid, msg_id, comment_message, create_time from comment'*/
        written: 'insert into datasource(name, id, address, date) values (?,?,?,?)',
        search: 'select name, id, address, date from datasource'
    }
}
module.exports = sqlMap;