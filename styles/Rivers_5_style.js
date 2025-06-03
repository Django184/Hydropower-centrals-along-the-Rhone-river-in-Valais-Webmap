var size = 0;
var placement = 'point';
function categories_Rivers_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '150 m3/s < Q  ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15.2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 9.5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '100 < Q < 150  m3/s':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 13.299999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 8.3125}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '50 < Q < 100 m3/s':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.9375}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '15 < Q < 50 m3/s':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.75}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6 < Q < 15 m3/s':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 6.08}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3 < Q < 6 m3/s':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Q < 3 m3/s':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.95}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Rivers_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Discharge [millions m^3/an]");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Rivers_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
