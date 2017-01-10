import getmodalData from 'modalController';

describe("modal controller test", function(){

    var modaldata;
    var modalText = {};
    beforeEach(function() {
        modaldata = getmodalData();
    });


    it("passes in the correct data for the table modal", function() {

        modalText = modaldata("table");
        expect(modalText).toEqual(["All Issuers"]);
    });

    it("passes in the correct data for the table-bar modal", function() {

        modalText = modaldata("table-bar");
        expect(modalText).toEqual(["My Financial Institution"]);
    });

    it("passes the generic data if nothing is passed", function(){

        modalText = modaldata("");
        expect(modalText).toEqual([ 'All Issuers', 'My Financial Institution', 'Issuer 1', 'Issuer 2', 'Issuer CUs' ]);

    });
});