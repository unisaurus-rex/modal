/**
 * @module modalController
 */
import {getInsightsData} from 'model';

/**
 * Controller for the Bootstrap modal component that will retrieve 
 * insights data and assign it to a modalContent object that will 
 * build out the modal's title and body.
 * @function getData
 * @returns {function} - configurable function that can be used to format the modal
 */

export default function getData(){
    
    // TODO: Change what data will be pulled in
    // Place holder right now, pulls in data from the 
    // model to be displayed in the modal. Right now, 
    // it just pulls a list of fis
    var insightsData = getInsightsData("sig_debit");
    console.log("getInsightsData('sig_debit'): ", insightsData);
    var fis = Object.keys(insightsData);

    // Default values for the modal title, body and data
    var modalContent =  fis;

    // TODO: Add more cases for each modal and change assigned data values
    // Depending on which modal button was clicked, a name
    // identifier will be passed in to determine what data to
    // set the modalContent, it will return the default values
    // if none of the cases match with the pre-defined list.
    function buildModal(buttonName){
        if(!arguments.length) return modalContent;
        switch(buttonName){
            case "table": modalContent = [fis[0]];
                break;
            case "table-bar": modalContent = [fis[1]];
                break;
            default: return modalContent;
                break;
                
        }
        return modalContent;
    }

    
    return buildModal; //return the modalContent object's values to build out the modal components
}
 