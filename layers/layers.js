var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BOLIVIA_1 = new ol.format.GeoJSON();
var features_BOLIVIA_1 = format_BOLIVIA_1.readFeatures(json_BOLIVIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOLIVIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOLIVIA_1.addFeatures(features_BOLIVIA_1);
var lyr_BOLIVIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOLIVIA_1, 
                style: style_BOLIVIA_1,
                popuplayertitle: 'BOLIVIA',
                interactive: false,
                title: '<img src="styles/legend/BOLIVIA_1.png" /> BOLIVIA'
            });
var format_ABC_RedVialFundamental2024_2 = new ol.format.GeoJSON();
var features_ABC_RedVialFundamental2024_2 = format_ABC_RedVialFundamental2024_2.readFeatures(json_ABC_RedVialFundamental2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABC_RedVialFundamental2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABC_RedVialFundamental2024_2.addFeatures(features_ABC_RedVialFundamental2024_2);
var lyr_ABC_RedVialFundamental2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABC_RedVialFundamental2024_2, 
                style: style_ABC_RedVialFundamental2024_2,
                popuplayertitle: 'ABC_Red Vial Fundamental 2024',
                interactive: true,
                title: '<img src="styles/legend/ABC_RedVialFundamental2024_2.png" /> ABC_Red Vial Fundamental 2024'
            });
var format_CORREDORNORTESUR_3 = new ol.format.GeoJSON();
var features_CORREDORNORTESUR_3 = format_CORREDORNORTESUR_3.readFeatures(json_CORREDORNORTESUR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDORNORTESUR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDORNORTESUR_3.addFeatures(features_CORREDORNORTESUR_3);
var lyr_CORREDORNORTESUR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDORNORTESUR_3, 
                style: style_CORREDORNORTESUR_3,
                popuplayertitle: 'CORREDOR NORTE SUR',
                interactive: true,
                title: '<img src="styles/legend/CORREDORNORTESUR_3.png" /> CORREDOR NORTE SUR'
            });
var format_CORREDORSUR_4 = new ol.format.GeoJSON();
var features_CORREDORSUR_4 = format_CORREDORSUR_4.readFeatures(json_CORREDORSUR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDORSUR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDORSUR_4.addFeatures(features_CORREDORSUR_4);
var lyr_CORREDORSUR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDORSUR_4, 
                style: style_CORREDORSUR_4,
                popuplayertitle: 'CORREDOR  SUR',
                interactive: true,
                title: '<img src="styles/legend/CORREDORSUR_4.png" /> CORREDOR  SUR'
            });
var format_CORREDOROESTENORTE_5 = new ol.format.GeoJSON();
var features_CORREDOROESTENORTE_5 = format_CORREDOROESTENORTE_5.readFeatures(json_CORREDOROESTENORTE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDOROESTENORTE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDOROESTENORTE_5.addFeatures(features_CORREDOROESTENORTE_5);
var lyr_CORREDOROESTENORTE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDOROESTENORTE_5, 
                style: style_CORREDOROESTENORTE_5,
                popuplayertitle: 'CORREDOR OESTE NORTE',
                interactive: true,
                title: '<img src="styles/legend/CORREDOROESTENORTE_5.png" /> CORREDOR OESTE NORTE'
            });
var format_CORREDOROESTESUR_6 = new ol.format.GeoJSON();
var features_CORREDOROESTESUR_6 = format_CORREDOROESTESUR_6.readFeatures(json_CORREDOROESTESUR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDOROESTESUR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDOROESTESUR_6.addFeatures(features_CORREDOROESTESUR_6);
var lyr_CORREDOROESTESUR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDOROESTESUR_6, 
                style: style_CORREDOROESTESUR_6,
                popuplayertitle: 'CORREDOR OESTE SUR',
                interactive: true,
                title: '<img src="styles/legend/CORREDOROESTESUR_6.png" /> CORREDOR OESTE SUR'
            });
var format_CORREDORESTEOESTE_7 = new ol.format.GeoJSON();
var features_CORREDORESTEOESTE_7 = format_CORREDORESTEOESTE_7.readFeatures(json_CORREDORESTEOESTE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDORESTEOESTE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDORESTEOESTE_7.addFeatures(features_CORREDORESTEOESTE_7);
var lyr_CORREDORESTEOESTE_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDORESTEOESTE_7, 
                style: style_CORREDORESTEOESTE_7,
                popuplayertitle: 'CORREDOR ESTE OESTE',
                interactive: true,
                title: '<img src="styles/legend/CORREDORESTEOESTE_7.png" /> CORREDOR ESTE OESTE'
            });
var format_InteriorTARIJAARICA_8 = new ol.format.GeoJSON();
var features_InteriorTARIJAARICA_8 = format_InteriorTARIJAARICA_8.readFeatures(json_InteriorTARIJAARICA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InteriorTARIJAARICA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InteriorTARIJAARICA_8.addFeatures(features_InteriorTARIJAARICA_8);
var lyr_InteriorTARIJAARICA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InteriorTARIJAARICA_8, 
                style: style_InteriorTARIJAARICA_8,
                popuplayertitle: 'Interior TARIJA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/InteriorTARIJAARICA_8.png" /> Interior TARIJA - ARICA'
            });
var format_GUAYARAMERINARICA_9 = new ol.format.GeoJSON();
var features_GUAYARAMERINARICA_9 = format_GUAYARAMERINARICA_9.readFeatures(json_GUAYARAMERINARICA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUAYARAMERINARICA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUAYARAMERINARICA_9.addFeatures(features_GUAYARAMERINARICA_9);
var lyr_GUAYARAMERINARICA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUAYARAMERINARICA_9, 
                style: style_GUAYARAMERINARICA_9,
                popuplayertitle: 'GUAYARAMERIN - ARICA',
                interactive: true,
                title: '<img src="styles/legend/GUAYARAMERINARICA_9.png" /> GUAYARAMERIN - ARICA'
            });
var format_InteriorSUCREARICA_10 = new ol.format.GeoJSON();
var features_InteriorSUCREARICA_10 = format_InteriorSUCREARICA_10.readFeatures(json_InteriorSUCREARICA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InteriorSUCREARICA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InteriorSUCREARICA_10.addFeatures(features_InteriorSUCREARICA_10);
var lyr_InteriorSUCREARICA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InteriorSUCREARICA_10, 
                style: style_InteriorSUCREARICA_10,
                popuplayertitle: 'Interior SUCRE ARICA',
                interactive: true,
                title: '<img src="styles/legend/InteriorSUCREARICA_10.png" /> Interior SUCRE ARICA'
            });
var format_PTO_SUAREZARICA_11 = new ol.format.GeoJSON();
var features_PTO_SUAREZARICA_11 = format_PTO_SUAREZARICA_11.readFeatures(json_PTO_SUAREZARICA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTO_SUAREZARICA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTO_SUAREZARICA_11.addFeatures(features_PTO_SUAREZARICA_11);
var lyr_PTO_SUAREZARICA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTO_SUAREZARICA_11, 
                style: style_PTO_SUAREZARICA_11,
                popuplayertitle: 'PTO_SUAREZ - ARICA',
                interactive: true,
                title: '<img src="styles/legend/PTO_SUAREZARICA_11.png" /> PTO_SUAREZ - ARICA'
            });
var format_JENNEFERARICA_12 = new ol.format.GeoJSON();
var features_JENNEFERARICA_12 = format_JENNEFERARICA_12.readFeatures(json_JENNEFERARICA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENNEFERARICA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENNEFERARICA_12.addFeatures(features_JENNEFERARICA_12);
var lyr_JENNEFERARICA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENNEFERARICA_12, 
                style: style_JENNEFERARICA_12,
                popuplayertitle: 'JENNEFER - ARICA',
                interactive: true,
                title: '<img src="styles/legend/JENNEFERARICA_12.png" /> JENNEFER - ARICA'
            });
var format_SanMatiasARICA_13 = new ol.format.GeoJSON();
var features_SanMatiasARICA_13 = format_SanMatiasARICA_13.readFeatures(json_SanMatiasARICA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanMatiasARICA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanMatiasARICA_13.addFeatures(features_SanMatiasARICA_13);
var lyr_SanMatiasARICA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanMatiasARICA_13, 
                style: style_SanMatiasARICA_13,
                popuplayertitle: 'San Matias - ARICA',
                interactive: true,
                title: '<img src="styles/legend/SanMatiasARICA_13.png" /> San Matias - ARICA'
            });
var format_ZonaFrancaWINNERARICA_14 = new ol.format.GeoJSON();
var features_ZonaFrancaWINNERARICA_14 = format_ZonaFrancaWINNERARICA_14.readFeatures(json_ZonaFrancaWINNERARICA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaFrancaWINNERARICA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaFrancaWINNERARICA_14.addFeatures(features_ZonaFrancaWINNERARICA_14);
var lyr_ZonaFrancaWINNERARICA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaFrancaWINNERARICA_14, 
                style: style_ZonaFrancaWINNERARICA_14,
                popuplayertitle: 'Zona Franca WINNER - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ZonaFrancaWINNERARICA_14.png" /> Zona Franca WINNER - ARICA'
            });
var format_ZonaFrancaPuertoSuarezARICA_15 = new ol.format.GeoJSON();
var features_ZonaFrancaPuertoSuarezARICA_15 = format_ZonaFrancaPuertoSuarezARICA_15.readFeatures(json_ZonaFrancaPuertoSuarezARICA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaFrancaPuertoSuarezARICA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaFrancaPuertoSuarezARICA_15.addFeatures(features_ZonaFrancaPuertoSuarezARICA_15);
var lyr_ZonaFrancaPuertoSuarezARICA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaFrancaPuertoSuarezARICA_15, 
                style: style_ZonaFrancaPuertoSuarezARICA_15,
                popuplayertitle: 'Zona Franca Puerto Suarez - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ZonaFrancaPuertoSuarezARICA_15.png" /> Zona Franca Puerto Suarez - ARICA'
            });
var format_ARROYO_CONCEPARICA_16 = new ol.format.GeoJSON();
var features_ARROYO_CONCEPARICA_16 = format_ARROYO_CONCEPARICA_16.readFeatures(json_ARROYO_CONCEPARICA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARROYO_CONCEPARICA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARROYO_CONCEPARICA_16.addFeatures(features_ARROYO_CONCEPARICA_16);
var lyr_ARROYO_CONCEPARICA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARROYO_CONCEPARICA_16, 
                style: style_ARROYO_CONCEPARICA_16,
                popuplayertitle: 'ARROYO_CONCEP - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ARROYO_CONCEPARICA_16.png" /> ARROYO_CONCEP - ARICA'
            });
var format_AeropuertoViruViruARICA_17 = new ol.format.GeoJSON();
var features_AeropuertoViruViruARICA_17 = format_AeropuertoViruViruARICA_17.readFeatures(json_AeropuertoViruViruARICA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AeropuertoViruViruARICA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeropuertoViruViruARICA_17.addFeatures(features_AeropuertoViruViruARICA_17);
var lyr_AeropuertoViruViruARICA_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AeropuertoViruViruARICA_17, 
                style: style_AeropuertoViruViruARICA_17,
                popuplayertitle: 'Aeropuerto Viru Viru - ARICA',
                interactive: true,
                title: '<img src="styles/legend/AeropuertoViruViruARICA_17.png" /> Aeropuerto Viru Viru - ARICA'
            });
var format_InteriorSantaCruzARICA_18 = new ol.format.GeoJSON();
var features_InteriorSantaCruzARICA_18 = format_InteriorSantaCruzARICA_18.readFeatures(json_InteriorSantaCruzARICA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InteriorSantaCruzARICA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InteriorSantaCruzARICA_18.addFeatures(features_InteriorSantaCruzARICA_18);
var lyr_InteriorSantaCruzARICA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InteriorSantaCruzARICA_18, 
                style: style_InteriorSantaCruzARICA_18,
                popuplayertitle: 'Interior Santa Cruz - ARICA',
                interactive: true,
                title: '<img src="styles/legend/InteriorSantaCruzARICA_18.png" /> Interior Santa Cruz - ARICA'
            });
var format_ZonaFrancaORUROARICA_19 = new ol.format.GeoJSON();
var features_ZonaFrancaORUROARICA_19 = format_ZonaFrancaORUROARICA_19.readFeatures(json_ZonaFrancaORUROARICA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaFrancaORUROARICA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaFrancaORUROARICA_19.addFeatures(features_ZonaFrancaORUROARICA_19);
var lyr_ZonaFrancaORUROARICA_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaFrancaORUROARICA_19, 
                style: style_ZonaFrancaORUROARICA_19,
                popuplayertitle: 'Zona Franca ORURO - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ZonaFrancaORUROARICA_19.png" /> Zona Franca ORURO - ARICA'
            });
var format_PISIGAARICA_20 = new ol.format.GeoJSON();
var features_PISIGAARICA_20 = format_PISIGAARICA_20.readFeatures(json_PISIGAARICA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PISIGAARICA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PISIGAARICA_20.addFeatures(features_PISIGAARICA_20);
var lyr_PISIGAARICA_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PISIGAARICA_20, 
                style: style_PISIGAARICA_20,
                popuplayertitle: 'PISIGA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/PISIGAARICA_20.png" /> PISIGA - ARICA'
            });
var format_TAMBOQUEMADOARICA_21 = new ol.format.GeoJSON();
var features_TAMBOQUEMADOARICA_21 = format_TAMBOQUEMADOARICA_21.readFeatures(json_TAMBOQUEMADOARICA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMBOQUEMADOARICA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMBOQUEMADOARICA_21.addFeatures(features_TAMBOQUEMADOARICA_21);
var lyr_TAMBOQUEMADOARICA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMBOQUEMADOARICA_21, 
                style: style_TAMBOQUEMADOARICA_21,
                popuplayertitle: 'TAMBO QUEMADO - ARICA',
                interactive: true,
                title: '<img src="styles/legend/TAMBOQUEMADOARICA_21.png" /> TAMBO QUEMADO - ARICA'
            });
var format_CHARANAARICA_22 = new ol.format.GeoJSON();
var features_CHARANAARICA_22 = format_CHARANAARICA_22.readFeatures(json_CHARANAARICA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHARANAARICA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHARANAARICA_22.addFeatures(features_CHARANAARICA_22);
var lyr_CHARANAARICA_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHARANAARICA_22, 
                style: style_CHARANAARICA_22,
                popuplayertitle: 'CHARANA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/CHARANAARICA_22.png" /> CHARANA - ARICA'
            });
var format_InteriorORUROARICA_23 = new ol.format.GeoJSON();
var features_InteriorORUROARICA_23 = format_InteriorORUROARICA_23.readFeatures(json_InteriorORUROARICA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InteriorORUROARICA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InteriorORUROARICA_23.addFeatures(features_InteriorORUROARICA_23);
var lyr_InteriorORUROARICA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InteriorORUROARICA_23, 
                style: style_InteriorORUROARICA_23,
                popuplayertitle: 'Interior ORURO - ARICA',
                interactive: true,
                title: '<img src="styles/legend/InteriorORUROARICA_23.png" /> Interior ORURO - ARICA'
            });
var format_InteriorPOTOSIARICA_24 = new ol.format.GeoJSON();
var features_InteriorPOTOSIARICA_24 = format_InteriorPOTOSIARICA_24.readFeatures(json_InteriorPOTOSIARICA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InteriorPOTOSIARICA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InteriorPOTOSIARICA_24.addFeatures(features_InteriorPOTOSIARICA_24);
var lyr_InteriorPOTOSIARICA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InteriorPOTOSIARICA_24, 
                style: style_InteriorPOTOSIARICA_24,
                popuplayertitle: 'Interior POTOSI - ARICA',
                interactive: true,
                title: '<img src="styles/legend/InteriorPOTOSIARICA_24.png" /> Interior POTOSI - ARICA'
            });
var format_ZonaFrancaPATACAMAYAARICA_25 = new ol.format.GeoJSON();
var features_ZonaFrancaPATACAMAYAARICA_25 = format_ZonaFrancaPATACAMAYAARICA_25.readFeatures(json_ZonaFrancaPATACAMAYAARICA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaFrancaPATACAMAYAARICA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaFrancaPATACAMAYAARICA_25.addFeatures(features_ZonaFrancaPATACAMAYAARICA_25);
var lyr_ZonaFrancaPATACAMAYAARICA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaFrancaPATACAMAYAARICA_25, 
                style: style_ZonaFrancaPATACAMAYAARICA_25,
                popuplayertitle: 'Zona Franca PATACAMAYA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ZonaFrancaPATACAMAYAARICA_25.png" /> Zona Franca PATACAMAYA - ARICA'
            });
var format_AeropuertoELALTOARICA_26 = new ol.format.GeoJSON();
var features_AeropuertoELALTOARICA_26 = format_AeropuertoELALTOARICA_26.readFeatures(json_AeropuertoELALTOARICA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AeropuertoELALTOARICA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeropuertoELALTOARICA_26.addFeatures(features_AeropuertoELALTOARICA_26);
var lyr_AeropuertoELALTOARICA_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AeropuertoELALTOARICA_26, 
                style: style_AeropuertoELALTOARICA_26,
                popuplayertitle: 'Aeropuerto EL ALTO - ARICA',
                interactive: true,
                title: '<img src="styles/legend/AeropuertoELALTOARICA_26.png" /> Aeropuerto EL ALTO - ARICA'
            });
var format_INTERIORLAPAZARICA_27 = new ol.format.GeoJSON();
var features_INTERIORLAPAZARICA_27 = format_INTERIORLAPAZARICA_27.readFeatures(json_INTERIORLAPAZARICA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INTERIORLAPAZARICA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTERIORLAPAZARICA_27.addFeatures(features_INTERIORLAPAZARICA_27);
var lyr_INTERIORLAPAZARICA_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTERIORLAPAZARICA_27, 
                style: style_INTERIORLAPAZARICA_27,
                popuplayertitle: 'INTERIOR LA PAZ - ARICA',
                interactive: true,
                title: '<img src="styles/legend/INTERIORLAPAZARICA_27.png" /> INTERIOR LA PAZ - ARICA'
            });
var format_ZONAFRANCAELALTOARICA_28 = new ol.format.GeoJSON();
var features_ZONAFRANCAELALTOARICA_28 = format_ZONAFRANCAELALTOARICA_28.readFeatures(json_ZONAFRANCAELALTOARICA_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAFRANCAELALTOARICA_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAFRANCAELALTOARICA_28.addFeatures(features_ZONAFRANCAELALTOARICA_28);
var lyr_ZONAFRANCAELALTOARICA_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAFRANCAELALTOARICA_28, 
                style: style_ZONAFRANCAELALTOARICA_28,
                popuplayertitle: 'ZONA FRANCA EL ALTO - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ZONAFRANCAELALTOARICA_28.png" /> ZONA FRANCA EL ALTO - ARICA'
            });
var format_InteriorCBBAARICA_29 = new ol.format.GeoJSON();
var features_InteriorCBBAARICA_29 = format_InteriorCBBAARICA_29.readFeatures(json_InteriorCBBAARICA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InteriorCBBAARICA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InteriorCBBAARICA_29.addFeatures(features_InteriorCBBAARICA_29);
var lyr_InteriorCBBAARICA_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InteriorCBBAARICA_29, 
                style: style_InteriorCBBAARICA_29,
                popuplayertitle: 'Interior CBBA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/InteriorCBBAARICA_29.png" /> Interior CBBA - ARICA'
            });
var format_AeropuertoCBBAARICA_30 = new ol.format.GeoJSON();
var features_AeropuertoCBBAARICA_30 = format_AeropuertoCBBAARICA_30.readFeatures(json_AeropuertoCBBAARICA_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AeropuertoCBBAARICA_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeropuertoCBBAARICA_30.addFeatures(features_AeropuertoCBBAARICA_30);
var lyr_AeropuertoCBBAARICA_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AeropuertoCBBAARICA_30, 
                style: style_AeropuertoCBBAARICA_30,
                popuplayertitle: 'Aeropuerto CBBA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/AeropuertoCBBAARICA_30.png" /> Aeropuerto CBBA - ARICA'
            });
var format_DESTINOARICA_31 = new ol.format.GeoJSON();
var features_DESTINOARICA_31 = format_DESTINOARICA_31.readFeatures(json_DESTINOARICA_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESTINOARICA_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESTINOARICA_31.addFeatures(features_DESTINOARICA_31);
var lyr_DESTINOARICA_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESTINOARICA_31, 
                style: style_DESTINOARICA_31,
                popuplayertitle: 'DESTINO ARICA',
                interactive: true,
                title: '<img src="styles/legend/DESTINOARICA_31.png" /> DESTINO ARICA'
            });
var format_ADUANAS_32 = new ol.format.GeoJSON();
var features_ADUANAS_32 = format_ADUANAS_32.readFeatures(json_ADUANAS_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADUANAS_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADUANAS_32.addFeatures(features_ADUANAS_32);
var lyr_ADUANAS_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADUANAS_32, 
                style: style_ADUANAS_32,
                popuplayertitle: 'ADUANAS',
                interactive: true,
                title: '<img src="styles/legend/ADUANAS_32.png" /> ADUANAS'
            });
var group_PUERTOSYADUANAS = new ol.layer.Group({
                                layers: [lyr_DESTINOARICA_31,lyr_ADUANAS_32,],
                                fold: 'close',
                                title: 'PUERTOS Y ADUANAS'});
var group_DESDECOCHABAMBA = new ol.layer.Group({
                                layers: [lyr_InteriorCBBAARICA_29,lyr_AeropuertoCBBAARICA_30,],
                                fold: 'close',
                                title: 'DESDE COCHABAMBA'});
var group_DESDELAPAZ = new ol.layer.Group({
                                layers: [lyr_ZonaFrancaPATACAMAYAARICA_25,lyr_AeropuertoELALTOARICA_26,lyr_INTERIORLAPAZARICA_27,lyr_ZONAFRANCAELALTOARICA_28,],
                                fold: 'close',
                                title: 'DESDE LA PAZ'});
var group_DESDEPOTOS = new ol.layer.Group({
                                layers: [lyr_InteriorPOTOSIARICA_24,],
                                fold: 'close',
                                title: 'DESDE POTOSÍ'});
var group_DESDEORURO = new ol.layer.Group({
                                layers: [lyr_ZonaFrancaORUROARICA_19,lyr_PISIGAARICA_20,lyr_TAMBOQUEMADOARICA_21,lyr_CHARANAARICA_22,lyr_InteriorORUROARICA_23,],
                                fold: 'close',
                                title: 'DESDE ORURO'});
var group_DESDESANTACRUZ = new ol.layer.Group({
                                layers: [lyr_PTO_SUAREZARICA_11,lyr_JENNEFERARICA_12,lyr_SanMatiasARICA_13,lyr_ZonaFrancaWINNERARICA_14,lyr_ZonaFrancaPuertoSuarezARICA_15,lyr_ARROYO_CONCEPARICA_16,lyr_AeropuertoViruViruARICA_17,lyr_InteriorSantaCruzARICA_18,],
                                fold: 'close',
                                title: 'DESDE SANTA CRUZ'});
var group_DESDECHUQUISACA = new ol.layer.Group({
                                layers: [lyr_InteriorSUCREARICA_10,],
                                fold: 'close',
                                title: 'DESDE CHUQUISACA'});
var group_DESDEBENI = new ol.layer.Group({
                                layers: [lyr_GUAYARAMERINARICA_9,],
                                fold: 'close',
                                title: 'DESDE BENI'});
var group_DESDETARIJA = new ol.layer.Group({
                                layers: [lyr_InteriorTARIJAARICA_8,],
                                fold: 'close',
                                title: 'DESDE TARIJA'});
var group_CORREDORESBOL = new ol.layer.Group({
                                layers: [lyr_ABC_RedVialFundamental2024_2,lyr_CORREDORNORTESUR_3,lyr_CORREDORSUR_4,lyr_CORREDOROESTENORTE_5,lyr_CORREDOROESTESUR_6,lyr_CORREDORESTEOESTE_7,],
                                fold: 'close',
                                title: 'CORREDORES BOL'});
var group_BOLIVIA = new ol.layer.Group({
                                layers: [lyr_BOLIVIA_1,],
                                fold: 'close',
                                title: 'BOLIVIA'});

lyr_OSMStandard_0.setVisible(true);lyr_BOLIVIA_1.setVisible(false);lyr_ABC_RedVialFundamental2024_2.setVisible(false);lyr_CORREDORNORTESUR_3.setVisible(false);lyr_CORREDORSUR_4.setVisible(false);lyr_CORREDOROESTENORTE_5.setVisible(false);lyr_CORREDOROESTESUR_6.setVisible(false);lyr_CORREDORESTEOESTE_7.setVisible(false);lyr_InteriorTARIJAARICA_8.setVisible(true);lyr_GUAYARAMERINARICA_9.setVisible(true);lyr_InteriorSUCREARICA_10.setVisible(true);lyr_PTO_SUAREZARICA_11.setVisible(false);lyr_JENNEFERARICA_12.setVisible(false);lyr_SanMatiasARICA_13.setVisible(false);lyr_ZonaFrancaWINNERARICA_14.setVisible(false);lyr_ZonaFrancaPuertoSuarezARICA_15.setVisible(true);lyr_ARROYO_CONCEPARICA_16.setVisible(true);lyr_AeropuertoViruViruARICA_17.setVisible(true);lyr_InteriorSantaCruzARICA_18.setVisible(true);lyr_ZonaFrancaORUROARICA_19.setVisible(false);lyr_PISIGAARICA_20.setVisible(true);lyr_TAMBOQUEMADOARICA_21.setVisible(true);lyr_CHARANAARICA_22.setVisible(true);lyr_InteriorORUROARICA_23.setVisible(true);lyr_InteriorPOTOSIARICA_24.setVisible(true);lyr_ZonaFrancaPATACAMAYAARICA_25.setVisible(false);lyr_AeropuertoELALTOARICA_26.setVisible(true);lyr_INTERIORLAPAZARICA_27.setVisible(true);lyr_ZONAFRANCAELALTOARICA_28.setVisible(false);lyr_InteriorCBBAARICA_29.setVisible(true);lyr_AeropuertoCBBAARICA_30.setVisible(true);lyr_DESTINOARICA_31.setVisible(true);lyr_ADUANAS_32.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_BOLIVIA,group_CORREDORESBOL,group_DESDETARIJA,group_DESDEBENI,group_DESDECHUQUISACA,group_DESDESANTACRUZ,group_DESDEORURO,group_DESDEPOTOS,group_DESDELAPAZ,group_DESDECOCHABAMBA,group_PUERTOSYADUANAS];
lyr_BOLIVIA_1.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_ABC_RedVialFundamental2024_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ruta': 'ruta', 'rodadura': 'rodadura', 'tipo': 'tipo', 'depto': 'depto', 'de': 'de', 'a': 'a', 'longitud': 'longitud', });
lyr_CORREDORNORTESUR_3.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_CORREDORSUR_4.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_CORREDOROESTENORTE_5.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_CORREDOROESTESUR_6.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_CORREDORESTEOESTE_7.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_InteriorTARIJAARICA_8.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_GUAYARAMERINARICA_9.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_InteriorSUCREARICA_10.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'PLAZO A_Hr': 'PLAZO A_Hr', });
lyr_PTO_SUAREZARICA_11.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_JENNEFERARICA_12.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_SanMatiasARICA_13.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_ZonaFrancaWINNERARICA_14.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_ZonaFrancaPuertoSuarezARICA_15.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_ARROYO_CONCEPARICA_16.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_AeropuertoViruViruARICA_17.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_InteriorSantaCruzARICA_18.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_ZonaFrancaORUROARICA_19.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_PISIGAARICA_20.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_TAMBOQUEMADOARICA_21.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_CHARANAARICA_22.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_InteriorORUROARICA_23.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_InteriorPOTOSIARICA_24.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_ZonaFrancaPATACAMAYAARICA_25.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_AeropuertoELALTOARICA_26.set('fieldAliases', {'DIST_Km': 'DIST_Km', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_INTERIORLAPAZARICA_27.set('fieldAliases', {'LONGITUD [': 'LONGITUD [', 'PLAZO A [H': 'PLAZO A [H', });
lyr_ZONAFRANCAELALTOARICA_28.set('fieldAliases', {'FID': 'FID', });
lyr_InteriorCBBAARICA_29.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_AeropuertoCBBAARICA_30.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_DESTINOARICA_31.set('fieldAliases', {'Ruta': 'Ruta', 'Destino': 'Destino', 'Coordenada': 'Coordenada', 'Coordena_1': 'Coordena_1', 'Coord LLEG': 'Coord LLEG', 'Coord LL_1': 'Coord LL_1', 'Partida': 'Partida', 'Llegada': 'Llegada', 'Plazo (hor': 'Plazo (hor', 'Modalidad': 'Modalidad', });
lyr_ADUANAS_32.set('fieldAliases', {'fid': 'fid', 'Ruta': 'Ruta', 'Nombre': 'Nombre', 'Coordenada': 'Coordenada', 'Coordena_1': 'Coordena_1', 'Coord LLEG': 'Coord LLEG', 'Coord LL_1': 'Coord LL_1', 'Partida': 'Partida', 'Llegada': 'Llegada', 'Plazo (hor': 'Plazo (hor', 'Modalidad': 'Modalidad', });
lyr_BOLIVIA_1.set('fieldImages', {'GID_1': '', 'GID_0': '', 'COUNTRY': '', 'NAME_1': '', 'VARNAME_1': '', 'NL_NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'CC_1': '', 'HASC_1': '', 'ISO_1': '', });
lyr_ABC_RedVialFundamental2024_2.set('fieldImages', {'ogc_fid': '', 'ruta': '', 'rodadura': '', 'tipo': '', 'depto': '', 'de': '', 'a': '', 'longitud': '', });
lyr_CORREDORNORTESUR_3.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_CORREDORSUR_4.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_CORREDOROESTENORTE_5.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_CORREDOROESTESUR_6.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_CORREDORESTEOESTE_7.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_InteriorTARIJAARICA_8.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_GUAYARAMERINARICA_9.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_InteriorSUCREARICA_10.set('fieldImages', {'DIST_KM': 'TextEdit', 'PLAZO A_Hr': 'TextEdit', });
lyr_PTO_SUAREZARICA_11.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_JENNEFERARICA_12.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_SanMatiasARICA_13.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_ZonaFrancaWINNERARICA_14.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_ZonaFrancaPuertoSuarezARICA_15.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_ARROYO_CONCEPARICA_16.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_AeropuertoViruViruARICA_17.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_InteriorSantaCruzARICA_18.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_ZonaFrancaORUROARICA_19.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_PISIGAARICA_20.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_TAMBOQUEMADOARICA_21.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_CHARANAARICA_22.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_InteriorORUROARICA_23.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_InteriorPOTOSIARICA_24.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_ZonaFrancaPATACAMAYAARICA_25.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_AeropuertoELALTOARICA_26.set('fieldImages', {'DIST_Km': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_INTERIORLAPAZARICA_27.set('fieldImages', {'LONGITUD [': 'Range', 'PLAZO A [H': '', });
lyr_ZONAFRANCAELALTOARICA_28.set('fieldImages', {'FID': '', });
lyr_InteriorCBBAARICA_29.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_AeropuertoCBBAARICA_30.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_DESTINOARICA_31.set('fieldImages', {'Ruta': '', 'Destino': '', 'Coordenada': '', 'Coordena_1': '', 'Coord LLEG': '', 'Coord LL_1': '', 'Partida': '', 'Llegada': '', 'Plazo (hor': '', 'Modalidad': '', });
lyr_ADUANAS_32.set('fieldImages', {'fid': '', 'Ruta': '', 'Nombre': '', 'Coordenada': '', 'Coordena_1': '', 'Coord LLEG': '', 'Coord LL_1': '', 'Partida': '', 'Llegada': '', 'Plazo (hor': '', 'Modalidad': '', });
lyr_BOLIVIA_1.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_ABC_RedVialFundamental2024_2.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'ruta': 'inline label - visible with data', 'rodadura': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'depto': 'inline label - visible with data', 'de': 'hidden field', 'a': 'hidden field', 'longitud': 'inline label - visible with data', });
lyr_CORREDORNORTESUR_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CORREDORSUR_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_CORREDOROESTENORTE_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CORREDOROESTESUR_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CORREDORESTEOESTE_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_InteriorTARIJAARICA_8.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_GUAYARAMERINARICA_9.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_InteriorSUCREARICA_10.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'PLAZO A_Hr': 'inline label - visible with data', });
lyr_PTO_SUAREZARICA_11.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_JENNEFERARICA_12.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_SanMatiasARICA_13.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_ZonaFrancaWINNERARICA_14.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_ZonaFrancaPuertoSuarezARICA_15.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_ARROYO_CONCEPARICA_16.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_AeropuertoViruViruARICA_17.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_InteriorSantaCruzARICA_18.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_ZonaFrancaORUROARICA_19.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_PISIGAARICA_20.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_TAMBOQUEMADOARICA_21.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_CHARANAARICA_22.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_InteriorORUROARICA_23.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_InteriorPOTOSIARICA_24.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_ZonaFrancaPATACAMAYAARICA_25.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_AeropuertoELALTOARICA_26.set('fieldLabels', {'DIST_Km': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_INTERIORLAPAZARICA_27.set('fieldLabels', {'LONGITUD [': 'hidden field', 'PLAZO A [H': 'inline label - visible with data', });
lyr_ZONAFRANCAELALTOARICA_28.set('fieldLabels', {'FID': 'inline label - visible with data', });
lyr_InteriorCBBAARICA_29.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_AeropuertoCBBAARICA_30.set('fieldLabels', {'FID': 'hidden field', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_DESTINOARICA_31.set('fieldLabels', {'Ruta': 'hidden field', 'Destino': 'hidden field', 'Coordenada': 'hidden field', 'Coordena_1': 'hidden field', 'Coord LLEG': 'hidden field', 'Coord LL_1': 'hidden field', 'Partida': 'hidden field', 'Llegada': 'hidden field', 'Plazo (hor': 'hidden field', 'Modalidad': 'hidden field', });
lyr_ADUANAS_32.set('fieldLabels', {'fid': 'hidden field', 'Ruta': 'hidden field', 'Nombre': 'inline label - visible with data', 'Coordenada': 'hidden field', 'Coordena_1': 'hidden field', 'Coord LLEG': 'hidden field', 'Coord LL_1': 'hidden field', 'Partida': 'hidden field', 'Llegada': 'hidden field', 'Plazo (hor': 'hidden field', 'Modalidad': 'hidden field', });
lyr_ADUANAS_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});