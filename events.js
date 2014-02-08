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
            title: 'Community Service',
            html: "<center><h1>Community Service</h1></br>Located just outside of Georgia Southern</center>",
        }, {
            title: 'Internship Orientation',
            html: "<center><h1>Internship Orientation</h1></br>Located at Hacker's</center>",
           }],
        renderTo: Ext.getBody()
    });
});
