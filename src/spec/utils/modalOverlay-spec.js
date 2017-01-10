import modalPrompt from 'modal';
import * as d3 from "d3";

describe("Test the modal feature", function(){

    var modalData = {
        title: "test title",
        body: "test body",
        data: "test data"
    };

    var buttonName = "Table Modal";

    var el = d3.select("body").append("div").attr("id", "modaloverlay");
    var buildModal = modalPrompt();
    buildModal(buttonName, modalData);

    it("should build out the correct title of the modal", function(){
        var modalData = {
            title: "test title",
            body: "test body",
            data: "test data"
        };

        var buttonName = "Table Modal";


        var buildModal = modalPrompt();
        buildModal(buttonName, modalData);
        console.log(d3.selectAll('modal-title')._groups[0][0]);
        expect(d3.selectAll('modal-title')._groups[0][0]).not.toBeNull();

    });

    it("should build out the correct body of the modal", function(){

    });

    it("should pull in the correct data for the modal", function(){

    });
});