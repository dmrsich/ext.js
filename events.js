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
            html: "<center><h1 class='head'>Community Service</h1></br><div class='proj'></br><ul class='point'><b>Location</b><li>Georgia Southern Rotunda</li></ul></div><div class='proj'></br><ul class='point'><b>Time</b><li>5:00pm - 6:00pm</li></ul></div></center>",
        }, {
            title: 'Internship Orientation',
            html: "<center><h1 class='head'>Community Service</h1></br><div class='proj'></br><ul class='point'><b>Location</b><li>Henderson Library</li></ul></div><div class='proj'></br><ul class='point'><b>Time</b><li>4:00pm - 6:00pm</li></ul></div></center>",
           }],
        renderTo: Ext.getBody()
    });
});
