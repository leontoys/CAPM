sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'at/clouddna/zbookapp/test/integration/FirstJourney',
		'at/clouddna/zbookapp/test/integration/pages/BookList',
		'at/clouddna/zbookapp/test/integration/pages/BookObjectPage'
    ],
    function(JourneyRunner, opaJourney, BookList, BookObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('at/clouddna/zbookapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBookList: BookList,
					onTheBookObjectPage: BookObjectPage
                }
            },
            opaJourney.run
        );
    }
);