require.config({
    paths: {
        jquery: 'jquery'
    }
});

require(['jquery', 'common', "test"], function($, common, test){
    // alert(common.isNull())
    alert(test.a);
});
