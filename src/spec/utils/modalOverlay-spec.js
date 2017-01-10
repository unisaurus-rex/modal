import modalPrompt from 'modal';
import * as d3 from "d3";

describe("Test the modal feature", function(){
    var buttonName = "";
    var modalData = "";

    var buildModal = modalPrompt();

    var el = d3.select("body").append("div").attr("class", "modal-title");
    var bdy = d3.select("body").append("div").attr("class", "modal-body");


    it("should build out the correct title of the modal", function(){
        modalData = "test data";
        buttonName = "Table Modal";

        buildModal(buttonName, modalData);
        expect(d3.selectAll('.modal-title')._groups[0][0].textContent).toEqual("d3 title Table Modal");

    });

    it("should build out the correct body of the modal", function(){
        modalData = "test data";
        buttonName = "Table Modal";

        buildModal(buttonName, modalData);
        expect(d3.selectAll('.modal-body')._groups[0][0].childNodes[0].nodeValue).toEqual("Table Modal");
    });

    it("should pull in the correct data for the modal", function(){
        modalData = [12, 22, 23];
        buttonName = "Table Modal";

        buildModal(buttonName, modalData);
        expect(d3.selectAll('.modal-body')._groups[0][0].children[0].innerText).toEqual("12");
        expect(d3.selectAll('.modal-body')._groups[0][0].children[1].innerText).toEqual("22");
        expect(d3.selectAll('.modal-body')._groups[0][0].children[2].innerText).toEqual("23");
    });

    it("should pull in the correct number of data items for the modal", function(){
        modalData = [12, 22, 23];
        buttonName = "Table Modal";

        buildModal(buttonName, modalData);
        expect(d3.selectAll('.modal-body')._groups[0][0].children.length).toEqual(3);

    });
});