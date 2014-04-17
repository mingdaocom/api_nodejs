var config = {
    app: {
        appKey: '',     //分配到的App_Key
        appSecret: '',  //分配到的App_Secret
        apiBaseUrl: 'https://api.mingdao.com/',
        //授权回调地址，站外应用需与设置的回调地址一致
        GetRedirectUrl: function () {
            return 'http://' + config.server.host + ':' + config.server.port + '/authorize_callback';
        },
        getRequestUrl: function() {
            return config.app.apiBaseUrl + 'auth2/authorize?' +
                'app_key=' + config.app.appKey +
                '&redirect_uri=' + config.app.GetRedirectUrl();
        },
        tokenUrl: 'https://api.mingdao.com/auth2/access_token?'
    },
    server: {
        host: 'localhost',
        port: 808
    },
    api: {
        post: {
            followed: 'post/followed',
            all: 'post/all',
            my: 'post/my',
            atme: 'post/atme',
            replyme: 'post/replyme',
            favorite: 'post/favorite',
            group: 'post/group',
            user: 'post/user',
            doc: 'post/doc',
            img: 'post/img',
            faq: 'post/faq',
            unreadCount: 'post/unreadcount',
            detail: 'post/detail',
            reply: 'post/reply',
            update: 'post/update',
            upload: 'post/upload',
            del: 'post/delete',
            repost: 'post/repost',
            addReply: 'post/add_reply',
            deleteReply: 'post/delete_reply',
            addFavorite: 'post/add_favorite',
            deleteFavorite: 'post/delete_favorite',
            deleteLike: 'post/delete_like'
        },
        task: {
            myJoined: 'task/my_joined',
            myJoinedFinished: 'task/my_joined_finished',
            myAssign: 'task/my_assign',
            myAssignFinished: 'task/my_assign_finished',
            myCharge: 'task/my_charge',
            myChargeFinished: 'task/my_charge_finished',
            project: 'task/project',
            unreadCount: 'task/unreadcount',
            detail: 'task/detail',
            reply: 'task/reply',
            create: 'task/create',
            finish: 'task/finish',
            addreply: 'task/addreply',
            del: 'task/delete'
        },
        calendar: {
            create: 'calendar/create',
            edit: 'calendar/edit',
            addMember: 'calendar/add_member',
            deleteMember: 'calendar/delete_member',
            exit: 'calendar/exit',
            join: 'calendar/join',
            deny: 'calendar/deny',
            reinviteMember: 'calendar/reinvite_member',
            del: 'calendar/destroy'
        },
        user: {
            all: 'user/all',
            search: 'user/search',
            detail: 'user/detail',
            followed: 'user/followed',
            department: 'user/department',
            addFollowed: 'user/add_followed',
            deleteFollowed: 'user/delete_followed',
            invite: 'user/invite'
        },
        group: {
            all: 'group/all',
            myCreated: 'group/my_created',
            myJoined: 'group/my_joined',
            user: 'group/user',
            create: 'group/create',
            exit: 'group/exit',
            join: 'group/join',
            close: 'group/close',
            open: 'gorup/open',
            del: 'group/delete',
            invite: 'group/invite'
        },
        message: {
            all: 'message/all',
            list: 'message/list',
            unreadCount: 'message/unreadcount',
            create: 'message/create',
            del: 'message/delete',
            read: 'message/read'
        },
        passport: {
            detail: 'passport/detail',
            edit: 'passport/edit',
            editAvstar: 'passport/edit_avstar'
        },
        company: {
            detail: 'company/detail',
            getAdmin: 'company/get_admin',
            isAdmin: 'company/add_admin'
        },
        app: {
            version: 'app/version',
            getAdmin: 'app/get_admin',
            addAdmin: 'app/add_admin',
            deleteAdmin: 'app/delete_admin',
            statistics: 'app/statistics',
            isAdmin: 'app/is_admin'
        },
        auth2: {
            authorize: 'auth2/authorize',
            accessToken: 'auth2/access_token',
            device: 'auth2/device'
        }
    }
};

exports.config = config;