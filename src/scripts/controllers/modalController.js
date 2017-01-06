/**
 * @module modalController
 */
import {getInsightsData} from 'model';
import * as d3 from "d3";

export default function(){
    var txnType = "sig_debit";

    var insightsData = getInsightsData(txnType);
    var fis = Object.keys(insightsData);
    console.log("fis ", fis);
    return fis;

}
