/*global Ext:false */
Ext.onReady(function () {
    var tabs = Ext.create('Ext.tab.Panel', {
        tabPosition: 'left',
         height: 1000,
        align: 'middle',
        defaults: {
            bodyPadding: 10
          },

        items: [{
            title: 'Local Store Site',
            html: "<center><h1 class='head'>Website made by our Web Development Inters</h1></br><img src='site.png' alt='sample site'></center>",
        }, {
            title: 'Magazine Cover',
            html: "<center><h1 class='head'>Magazine Cover made by our Graphic Design Interns</h1></br><img src='cover.jpg' alt='sample cover'></center>",
           }],
        renderTo: Ext.getBody()
    });
});
