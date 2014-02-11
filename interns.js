Ext.onReady(function () {
    var tabs = Ext.create('Ext.tab.Panel', {
        tabPosition: 'left',
         height: 1000,
        align: 'middle',
        defaults: {
            bodyPadding: 10
          },

        items: [{
            title: 'Web Development Intern',
            html: "<center><h1 class='head'>Web Development Intern</h1></br><div class='proj'></br><ul class='point'><b>Responsibilities</b><li>Create Websites</li><li>Learn Application devleopment</li><li>Project Management</li><li>5 hours of community service a month</li></ul></div><div class='proj'></br><ul class='point'><b>Requirements</b><li>3.0 GPA minimum</li><li>2 Letters of Recommendation</li><li>IT Major</li><li>Good Standing with University</li></ul></div></center>",
        }, {
            id: 'remove-this-tab',
            title: 'Graphic Design Intern',
            html: "<center><h1 class='head'>Graphic Design Intern</h1></br><div class='proj'></br><ul class='point'><b>Responsibilities</b><li>Learn Photoshop</li><li>Learn color science</li><li>Project Management</li><li>5 hours of community service a month</li></ul></div><div class='proj'></br><ul class='point'><b>Requirements</b><li>3.0 GPA minimum</li><li>2 Letters of Recommendation</li><li>IT Major</li><li>Good Standing with University</li></ul></div></center>",
        }],
        renderTo: Ext.getBody()
    });
});
