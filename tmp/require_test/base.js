require.config({
    paths: {
        jquery: 'jquery'
    }
});

require(['jquery', 'common'], function($, common){
    alert(common.isNull())
});
