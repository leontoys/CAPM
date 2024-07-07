sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project2/test/integration/FirstJourney',
		'project2/test/integration/pages/PeopleList',
		'project2/test/integration/pages/PeopleObjectPage'
    ],
    function(JourneyRunner, opaJourney, PeopleList, PeopleObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePeopleList: PeopleList,
					onThePeopleObjectPage: PeopleObjectPage
                }
            },
            opaJourney.run
        );
    }
);