import * as d3 from "d3";

export default function modalButton() {
    
    function buildModal(modalName, modalText){
    
        var modalTitle = d3.select('.modal-title').text("d3 title " + modalName);
        //get content for the modal body
        var modalBody = d3.select(".modal-body").text(modalName);

        var bodytext = modalBody.selectAll("p")
            .data(modalText.data)
            .enter()
            .append("p")
            .text((d) => {
                return d;
            });

    }
    return buildModal;
}