export default angular.module('directives.icons', [])
.directive('iconHome', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 486.406 486.406" style="enable-background:new 0 0 486.406 486.406;" xml:space="preserve"><g><g><g><g><path d="M481.198,224.116L253.202,26.52c-5.715-4.955-14.197-4.955-19.912,0l-81.288,70.405V68.41c0-16.781-13.619-30.399-30.399-30.399S91.203,51.63,91.203,68.41v81.197l-85.97,74.509c-6.323,5.502-7.022,15.109-1.52,21.462c5.533,6.323,15.109,6.992,21.462,1.52L243.201,58.135l217.995,188.963c2.918,2.493,6.414,3.709,9.971,3.709c4.286,0,8.451-1.794,11.461-5.229C488.22,239.225,487.491,229.679,481.198,224.116z"/><path d="M262.443,136.14c-5.563-4.59-12.403-6.931-19.243-6.931c-6.84,0-13.68,2.31-19.273,6.931L71.93,260.747c-7.053,5.776-11.126,14.379-11.126,23.529v148.927c0,16.781,13.619,30.399,30.399,30.399h91.198V311.606h121.598v151.997h91.198c16.75,0,30.399-13.619,30.399-30.399V284.277c0-9.181-4.104-17.753-11.157-23.499L262.443,136.14z"/></g></g></g></g></svg>',
        replace: true
    }
})
.directive('iconMonkey', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="469.4px" height="469.4px" viewBox="0 0 469.4 469.4" style="enable-background:new 0 0 469.4 469.4;" xml:space="preserve"><g><path d="M469.4,218.45c0-33.8-27.5-61.4-61.4-61.4c-3.3,0-6.5,0.3-9.6,0.8c-12.3-86.8-81-153.2-163.9-153.2c-82.9,0-151.6,66.4-163.9,153.2c-3-0.5-6.1-0.7-9.2-0.7c-33.8,0-61.4,27.5-61.4,61.4c0,33,26.2,60.1,59,61.3c-2.4,10.2-3.7,20.601-3.7,31.2c0,21.199,4.9,41.8,14.7,61.1c9.3,18.4,22.4,34.8,39.1,48.8c33.6,28.2,78.2,43.801,125.3,43.801c47.1,0,91.8-15.601,125.5-43.9c16.7-14,29.899-30.4,39.1-48.8c9.7-19.301,14.7-39.9,14.7-61.1c0-10.601-1.2-21-3.7-31.201C442.9,278.75,469.4,251.65,469.4,218.45z M392.7,310.951c0,4.399-0.3,8.699-0.8,13h-50.4h-214H77.1c-0.5-4.301-0.8-8.601-0.8-13c0-12,1.9-23.601,5.4-34.601c1.2-3.601,2.5-7.101,4-10.601c8-18.5,20.8-35.1,37-48.699c1.8-1.5,3.7-3,5.6-4.5c-2.8-4.6-5.4-9.4-7.7-14.4c-19.3-43.1-8.1-85.1,25-93.8c4.1-1.1,8.4-1.6,12.7-1.6c27.3,0,57.8,20.7,76.1,51.8c18.3-31.2,48.8-51.8,76.1-51.8c4.3,0,8.601,0.5,12.7,1.6c33.1,8.7,44.3,50.7,25,93.8c-2.3,5-4.8,9.9-7.7,14.4c2,1.6,4,3.2,6,4.8c16.101,13.6,28.7,30,36.7,48.399c1.5,3.4,2.8,6.9,3.9,10.5C390.8,287.35,392.7,298.951,392.7,310.951z M155.5,344.951h158.101H387.5c-17.899,56.8-79.6,98.699-153,98.699c-73.4,0-135.1-41.899-153-98.699H155.5L155.5,344.951z M61.4,258.85c-22.3,0-40.4-18.101-40.4-40.4c0-22.3,18.1-40.4,40.4-40.4c2.5,0,5,0.2,7.4,0.7c-0.1,2.3-0.1,4.6-0.1,7c0,6,0.3,11.8,0.8,17.6c-4.3-2.9-9.4-5.2-15.3-6.6c-5.6-1.3-11.3,2.2-12.6,7.8c-1.3,5.6,2.2,11.3,7.8,12.6c17.3,4.1,23,24.1,23.1,24.5c0.2,0.801,0.5,1.5,0.8,2.2c-0.5,0.8-0.9,1.601-1.4,2.399c-2.2,4.101-4.2,8.201-5.9,12.301C64.5,258.75,63,258.85,61.4,258.85zM408,258.85c-1.7,0-3.3-0.101-5-0.3c-1.8-4.1-3.7-8.2-5.899-12.301c-0.7-1.299-1.5-2.6-2.2-4c0.1-0.199,0.1-0.399,0.2-0.6c0.1-0.199,5.699-20.5,23.1-24.5c5.6-1.3,9.1-7,7.8-12.6c-1.3-5.6-7-9.1-12.6-7.8c-5.2,1.2-9.8,3.2-13.8,5.6c0.5-5.5,0.699-11,0.699-16.6c0-2.3-0.1-4.6-0.1-6.9c2.5-0.5,5.1-0.8,7.8-0.8c22.3,0,40.4,18.1,40.4,40.4C448.4,240.75,430.3,258.85,408,258.85z"/><path d="M214.5,263.35c-4.7-5.5-13-6.101-18.5-1.399c-5.5,4.699-6.1,13-1.4,18.5l12.1,14.1c2.6,3,6.3,4.6,10,4.6c3,0,6-1,8.5-3.1c5.5-4.7,6.1-13,1.4-18.5L214.5,263.35z"/><path d="M273,261.85c-5.5-4.7-13.8-4.101-18.5,1.399l-12.1,14.101c-4.7,5.5-4.1,13.8,1.4,18.5c2.5,2.101,5.5,3.101,8.5,3.101c3.699,0,7.399-1.601,10-4.601l12.1-14.101C279.2,274.85,278.5,266.55,273,261.85z"/><circle cx="191.2" cy="199.25" r="21.3"/><circle cx="277.801" cy="199.25" r="21.3"/></g></svg>',
        replace: true
    }
})
.directive('iconBird', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="480.034px" height="480.034px" viewBox="0 0 480.034 480.034" style="enable-background:new 0 0 480.034 480.034;" xml:space="preserve"><g><path d="M210.979,458.3l-25.4-72.1c-10.9,4.2-22.8,6.5-35.3,6.5h-14.5c-13.1,0-25.6-2.5-36.8-7.101l-25.6,72.7c0,0,19.3,39.5,68.9,12C191.679,497.7,210.979,458.3,210.979,458.3z"/><path d="M244.88,170.7c0-21.3-10.5-40.5-27.201-53.5c-1.7,0.2-3.4,0.4-5.1,0.7c-18.3,2.5-37.5,5.9-57.3,10.4c-0.9,0.2-1.7,0.3-2.6,0.3c-4,0-7.7-2-10-5.4l-15.3-23.4l-3.9-6l-1.5-2.3c-0.7-1.1-1.3-2.3-1.6-3.6c-0.6-2.3-0.5-4.8,0.4-7c1.3-3.5,4.2-6.3,7.8-7.3c11.4-3.3,19.3-9.3,24-18.2c10.9-20.7,1.4-50.2,1.3-50.5c-0.4-1.3-0.6-2.7-0.6-4c-3.6-0.6-7.3-0.9-11.1-0.9c-39,0-70.5,31.6-70.5,70.5v29.2v6.9v7c-19.5,12.9-32.2,33.7-32.2,57.1l17.2,139.1c0,28.7,19,53.4,46.3,64.601c10,4.1,21.1,6.399,32.9,6.399h14.5c11.1,0,21.7-2.1,31.4-5.8c28.1-10.9,47.8-36,47.8-65.2L244.88,170.7z M123.279,21.4c15.7,0,15.7,24.4,0,24.4C107.58,45.8,107.479,21.4,123.279,21.4z"/><path d="M439.38,159.9c2.699,0,0.199-11.1-2-43.2c-7.4-108.5-206.3-115.8-259.4-115.8c-8.2,0-12.9,0.2-12.9,0.2s0.4,1.1,0.9,3c3.6,13.3,14.6,66.6-34.1,80.8l1.9,2.9l3.9,6l3.9,6l11.1,16.9c17.3-3.9,33.5-6.9,48.8-9.2c3.4-0.5,6.8-1,10.1-1.4c0.3,0,0.7-0.1,1-0.1c2.8-0.4,5.5-0.7,8.2-1c19.899-2.3,38-3.4,54.5-3.4C400.079,101.5,433.179,159.9,439.38,159.9z"/></g></svg>',
        replace: true
    }
})
.directive('iconLogo', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 21.755 21.755" style="enable-background:new 0 0 21.755 21.755;" xml:space="preserve"><g><g><path d="M11.639,8.196l-1.131-1.131l3.042-3.042l4.257,4.256l-3.043,3.042l-2.209-2.208l1.575-1.575c0.252-0.252,0.252-0.664,0-0.917c-0.252-0.252-0.664-0.252-0.916,0L11.639,8.196z M5.137,16.529c-0.252,0.252-0.664,0.252-0.916,0c-0.252-0.252-0.252-0.664,0-0.916l3.802-3.801l-1.131-1.131l-4.846,4.846L0.339,21.49l5.963-1.707l4.846-4.847l-2.209-2.208L5.137,16.529z M21.755,4.307l-4.244-4.245l-2.813,2.814l4.244,4.246L21.755,4.307zM16.511,12.715c-0.35,0.001-0.69,0.042-1.016,0.116L8.718,6.093c0.178-0.485,0.273-1.01,0.272-1.557c-0.007-2.48-2.026-4.487-4.507-4.48c-0.032,0-0.065,0-0.097,0.001l0.337,1.241c0.868,0.421,1.468,1.31,1.47,2.342c0.003,1.439-1.161,2.61-2.601,2.615c-1.294,0.003-2.37-0.937-2.578-2.172L0.188,3.261C0.064,3.673-0.001,4.11,0,4.562c0.008,2.48,2.026,4.488,4.508,4.48C4.933,9.041,5.344,8.98,5.733,8.869l6.642,6.605c-0.225,0.537-0.348,1.127-0.348,1.746c0.01,2.479,2.027,4.487,4.51,4.479c0.031,0,0.064,0,0.096,0l-0.336-1.242c-0.869-0.422-1.469-1.311-1.473-2.34c-0.004-1.439,1.16-2.61,2.602-2.614c1.293-0.005,2.369,0.936,2.578,2.171l0.826,0.82c0.125-0.412,0.189-0.849,0.188-1.301C21.011,14.715,18.992,12.708,16.511,12.715z"/></g></g></svg>',
        replace: true
    }
})
.directive('iconEye', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 488.85 488.85" style="enable-background:new 0 0 488.85 488.85;" xml:space="preserve"> <g><path d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"/></g></svg>',
        replace: true
    }
})
.directive('iconMail', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="511.626px" height="511.627px" viewBox="0 0 511.626 511.627" xml:space="preserve"><g><path d="M498.208,68.235c-8.945-8.947-19.701-13.418-32.261-13.418H45.682c-12.562,0-23.318,4.471-32.264,13.418C4.471,77.18,0,87.935,0,100.499v310.633c0,12.566,4.471,23.312,13.418,32.257c8.945,8.953,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.469,32.261-13.422c8.949-8.945,13.418-19.697,13.418-32.257V100.499C511.626,87.935,507.158,77.18,498.208,68.235z M475.078,411.125c0,2.475-0.903,4.616-2.714,6.424c-1.81,1.81-3.949,2.706-6.42,2.706H45.679c-2.474,0-4.616-0.896-6.423-2.706c-1.809-1.808-2.712-3.949-2.712-6.424V191.858c6.09,6.852,12.657,13.134,19.7,18.843c51.012,39.209,91.553,71.374,121.627,96.5c9.707,8.186,17.607,14.561,23.697,19.13c6.09,4.571,14.322,9.185,24.694,13.846c10.373,4.668,20.129,6.991,29.265,6.991h0.287h0.284c9.134,0,18.894-2.323,29.263-6.991c10.376-4.661,18.613-9.274,24.701-13.846c6.089-4.569,13.99-10.944,23.698-19.13c30.074-25.126,70.61-57.291,121.624-96.5c7.043-5.708,13.613-11.991,19.694-18.843V411.125L475.078,411.125z M475.078,107.92v3.14c0,11.229-4.421,23.745-13.271,37.543c-8.851,13.798-18.419,24.792-28.691,32.974c-36.74,28.936-74.897,59.101-114.495,90.506c-1.14,0.951-4.474,3.757-9.996,8.418c-5.514,4.668-9.894,8.241-13.131,10.712c-3.241,2.478-7.471,5.475-12.703,8.993c-5.236,3.518-10.041,6.14-14.418,7.851c-4.377,1.707-8.47,2.562-12.275,2.562h-0.284h-0.287c-3.806,0-7.895-0.855-12.275-2.562c-4.377-1.711-9.185-4.333-14.417-7.851c-5.231-3.519-9.467-6.516-12.703-8.993c-3.234-2.471-7.614-6.044-13.132-10.712c-5.52-4.661-8.854-7.467-9.995-8.418c-39.589-31.406-77.75-61.57-114.487-90.506c-27.981-22.076-41.969-49.106-41.969-81.083c0-2.472,0.903-4.615,2.712-6.421c1.809-1.809,3.949-2.714,6.423-2.714h420.266c1.52,0.855,2.854,1.093,3.997,0.715c1.143-0.385,1.998,0.331,2.566,2.138c0.571,1.809,1.095,2.664,1.57,2.57c0.477-0.096,0.764,1.093,0.859,3.571c0.089,2.473,0.137,3.718,0.137,3.718V107.92L475.078,107.92z"/></g></svg>',
        replace: true
    }
})
.directive('iconSettings', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 478.703 478.703" style="enable-background:new 0 0 478.703 478.703;" xml:space="preserve"><g><g><path d="M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z"/><path d="M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z"/></g></g></svg>',
        replace: true
    }
})
.directive('iconPen', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 613.95 613.95" style="enable-background:new 0 0 613.95 613.95;" xml:space="preserve"><g><path d="M597.972,96.853l-81.725-81.725C506.11,4.991,493.477,0,480.064,0s-26.982,5.069-36.184,15.128l-54.743,54.743c-10.917-3.353-23.55-0.858-31.972,6.706l-23.55,23.55c-9.28,9.28-10.917,23.55-5.927,35.404L63.174,400.046c-0.858,0.858-1.716,1.716-1.716,2.495c0,0,0,0,0,0.858c-0.858,0.858-0.858,1.716-1.716,2.495l0,0L12.642,549.147l0,0l-5.069,15.128l-5.069,15.128c0,0.858,0,1.716-0.858,1.716c-1.716,8.422,0,15.128,2.495,19.339c0.858,1.716,1.716,3.353,2.495,4.211c5.069,5.927,12.633,9.28,21.055,9.28l0,0c0.858,0,1.716,0,2.495,0c1.716,0,2.495,0,3.353,0l0,0l0,0c0.858,0,1.716,0,1.716-0.858l21.055-6.706l151.596-49.674l0,0c2.495-0.858,4.211-1.716,5.927-3.353l265.294-265.294c3.353,1.716,6.706,1.716,10.917,1.716c8.422,0,15.986-3.353,21.913-9.28l23.55-23.55c9.28-9.28,10.917-21.913,6.706-32.83l54.743-54.743C618.169,149.959,618.169,117.05,597.972,96.853z M204.633,519.67l-42.89-42.968l251.803-252.661l42.968,42.968L204.633,519.67z M391.633,202.128L139.83,454.789l-42.968-43.748l251.803-251.803L391.633,202.128z M66.527,570.202l-21.055-21.055l36.184-109.486l47.179,47.179l0,0l0,0l47.179,47.179L66.527,570.202z M496.05,254.376c-0.858-0.858-0.858-1.716-1.716-1.716L363.793,121.261c-1.716-1.716-2.495-2.495-4.211-3.353l18.56-19.339l1.716,1.716l0,0l132.257,132.257c0.858,0.858,1.716,1.716,2.495,1.716L496.05,254.376z M576.059,148.243l-53.028,53.028L412.688,90.147l53.028-53.028c7.564-7.564,21.055-7.564,28.619,0l81.725,81.647C583.623,127.188,583.623,139.821,576.059,148.243z"/></g></svg>',
        replace: true
    }
})
.directive('iconMonitor', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 442 442" style="enable-background:new 0 0 442 442;" xml:space="preserve"><g><g><path d="M59.5,332.917H204v68H96.333c-9.35,0-17,7.65-17,17s7.65,17,17,17h246.5c9.35,0,17-7.65,17-17s-7.65-17-17-17H238v-68h144.5c32.583,0,59.5-26.917,59.5-59.5V67.15c0-32.583-26.917-60.067-59.5-60.067h-323C26.917,7.083,0,34.567,0,67.15v206.267C0,306,26.917,332.917,59.5,332.917z M408,273.983c0,13.883-11.333,24.933-24.933,24.933H58.933C45.05,298.917,34,287.583,34,273.983V66.017c0-13.883,11.333-24.933,24.933-24.933h323.85c13.883,0,24.933,11.333,24.933,24.933v207.967H408z"/></g></g></svg>',
        replace: true
    }
})
.directive('iconClose', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" xml:space="preserve"><g><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/></g></svg>',
        replace: true
    }
})
.directive('iconUp', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 46.001 46.001" xml:space="preserve"><g><path d="M5.906,34.998c-1.352,1.338-3.541,1.338-4.893,0c-1.35-1.338-1.352-3.506,0-4.846l19.54-19.148 c1.352-1.338,3.543-1.338,4.895,0l19.539,19.148c1.352,1.34,1.352,3.506,0,4.846c-1.352,1.338-3.541,1.338-4.893,0L23,19.295 L5.906,34.998z"/></g></svg>',
        replace: true
    }
})
.directive('iconDown', function(){
    return {
        restrict: 'A',
        template: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/></g></svg>',
        replace: true
    }
})
.directive('iconVk', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 112.196 112.196" xml:space="preserve"><g><g><circle  cx="56.098" cy="56.098" r="56.098"/></g><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M53.979,80.702h4.403c0,0,1.33-0.146,2.009-0.878c0.625-0.672,0.605-1.934,0.605-1.934s-0.086-5.908,2.656-6.778c2.703-0.857,6.174,5.71,9.853,8.235c2.782,1.911,4.896,1.492,4.896,1.492l9.837-0.137c0,0,5.146-0.317,2.706-4.363c-0.2-0.331-1.421-2.993-7.314-8.463c-6.168-5.725-5.342-4.799,2.088-14.702c4.525-6.031,6.334-9.713,5.769-11.29c-0.539-1.502-3.867-1.105-3.867-1.105l-11.076,0.069c0,0-0.821-0.112-1.43,0.252c-0.595,0.357-0.978,1.189-0.978,1.189s-1.753,4.667-4.091,8.636c-4.932,8.375-6.904,8.817-7.71,8.297c-1.875-1.212-1.407-4.869-1.407-7.467c0-8.116,1.231-11.5-2.397-12.376c-1.204-0.291-2.09-0.483-5.169-0.514c-3.952-0.041-7.297,0.012-9.191,0.94c-1.26,0.617-2.232,1.992-1.64,2.071c0.732,0.098,2.39,0.447,3.269,1.644c1.135,1.544,1.095,5.012,1.095,5.012s0.652,9.554-1.523,10.741c-1.493,0.814-3.541-0.848-7.938-8.446c-2.253-3.892-3.954-8.194-3.954-8.194s-0.328-0.804-0.913-1.234c-0.71-0.521-1.702-0.687-1.702-0.687l-10.525,0.069c0,0-1.58,0.044-2.16,0.731c-0.516,0.611-0.041,1.875-0.041,1.875s8.24,19.278,17.57,28.993C44.264,81.287,53.979,80.702,53.979,80.702L53.979,80.702z"/></g></svg>',
        replace: true
    }
})
.directive('iconInstagram', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 291.319 291.319" xml:space="preserve"><g><path d="M145.659,0c80.44,0,145.66,65.219,145.66,145.66S226.1,291.319,145.66,291.319S0,226.1,0,145.66S65.21,0,145.659,0z"/><path style="fill:#FFFFFF;" d="M195.93,63.708H95.38c-17.47,0-31.672,14.211-31.672,31.672v100.56c0,17.47,14.211,31.672,31.672,31.672h100.56c17.47,0,31.672-14.211,31.672-31.672V95.38C227.611,77.919,213.4,63.708,195.93,63.708z M205.908,82.034l3.587-0.009v27.202l-27.402,0.091l-0.091-27.202C182.002,82.116,205.908,82.034,205.908,82.034z M145.66,118.239c22.732,0,27.42,21.339,27.42,27.429c0,15.103-12.308,27.411-27.42,27.411c-15.121,0-27.42-12.308-27.42-27.411C118.23,139.578,122.928,118.239,145.66,118.239zM209.65,193.955c0,8.658-7.037,15.704-15.713,15.704H97.073c-8.667,0-15.713-7.037-15.713-15.704v-66.539h22.759c-2.112,5.198-3.305,12.299-3.305,18.253c0,24.708,20.101,44.818,44.818,44.818s44.808-20.11,44.808-44.818c0-5.954-1.193-13.055-3.296-18.253h22.486v66.539L209.65,193.955z"/></g></svg>',
        replace: true
    }
})
.directive('iconLinkedin', function(){
    return {
        restrict: 'A',
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 112.196 112.196" xml:space="preserve"><g><circle cx="56.098" cy="56.097" r="56.098"/><g><path style="fill:#F1F2F2;" d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969zM27.865,83.739H41.27V43.409H27.865V83.739z"/></g></g></svg>',
        replace: true
    }
})
.directive('iconLetter', function(){
    return {
        restrict: 'A',
        template: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 31.012 31.012" xml:space="preserve"><g><path d="M28.512,26.529H2.5c-1.378,0-2.5-1.121-2.5-2.5V6.982c0-1.379,1.122-2.5,2.5-2.5h26.012c1.378,0,2.5,1.121,2.5,2.5v17.047C31.012,25.408,29.89,26.529,28.512,26.529z M2.5,5.482c-0.827,0-1.5,0.673-1.5,1.5v17.047c0,0.827,0.673,1.5,1.5,1.5h26.012c0.827,0,1.5-0.673,1.5-1.5V6.982c0-0.827-0.673-1.5-1.5-1.5H2.5z"/><path d="M15.506,18.018c-0.665,0-1.33-0.221-1.836-0.662L0.891,6.219c-0.208-0.182-0.23-0.497-0.048-0.705c0.182-0.21,0.498-0.23,0.706-0.049l12.778,11.137c0.64,0.557,1.72,0.556,2.358,0L29.46,5.466c0.207-0.183,0.522-0.162,0.706,0.049c0.182,0.208,0.16,0.523-0.048,0.705L17.342,17.355C16.836,17.797,16.171,18.018,15.506,18.018z"/></g></svg>',
        replace: true
    }
})
.directive('iconPhone', function(){
    return {
        restrict: 'A',
        template: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 29.731 29.731" xml:space="preserve"><g><path d="M23.895,29.731c-1.237,0-2.731-0.31-4.374-0.93c-3.602-1.358-7.521-4.042-11.035-7.556c-3.515-3.515-6.199-7.435-7.558-11.037C-0.307,6.933-0.31,4.245,0.921,3.015c0.177-0.177,0.357-0.367,0.543-0.563c1.123-1.181,2.392-2.51,4.074-2.45C6.697,0.05,7.82,0.77,8.97,2.201c3.398,4.226,1.866,5.732,0.093,7.478l-0.313,0.31c-0.29,0.29-0.838,1.633,4.26,6.731c1.664,1.664,3.083,2.882,4.217,3.619c0.714,0.464,1.991,1.166,2.515,0.642l0.315-0.318c1.744-1.769,3.25-3.296,7.473,0.099c1.431,1.15,2.15,2.272,2.198,3.433c0.069,1.681-1.27,2.953-2.452,4.075c-0.195,0.186-0.385,0.366-0.562,0.542C26.103,29.424,25.126,29.731,23.895,29.731z M5.418,1C4.223,1,3.144,2.136,2.189,3.141C1.997,3.343,1.811,3.539,1.628,3.722C0.711,4.638,0.804,7.045,1.864,9.856c1.31,3.472,3.913,7.266,7.33,10.683c3.416,3.415,7.208,6.018,10.681,7.327c2.811,1.062,5.218,1.152,6.133,0.237c0.183-0.183,0.379-0.369,0.581-0.56c1.027-0.976,2.192-2.082,2.141-3.309c-0.035-0.843-0.649-1.75-1.825-2.695c-3.519-2.83-4.503-1.831-6.135-0.176l-0.32,0.323c-0.78,0.781-2.047,0.608-3.767-0.51c-1.193-0.776-2.667-2.038-4.379-3.751c-4.231-4.23-5.584-6.819-4.26-8.146l0.319-0.315c1.659-1.632,2.66-2.617-0.171-6.138C7.245,1.651,6.339,1.037,5.496,1.001C5.47,1,5.444,1,5.418,1z"/></g></svg>',
        replace: true
    }
})
.directive('iconSkype', function(){
    return {
        restrict: 'A',
        template: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M499.255,300.554c3.649-20.165,18.925-129.901-62.761-210.175c-6.525-7.648-80.832-90.34-218.022-71.685C200.207,9.196,113.073-29.812,39.528,44.622c-0.691,0.717-67.142,71.678-22.147,163.077c-3.242,14.549-11.546,65.159,12.176,127.259c1.28,4.604,32.707,113.041,151.592,148.482c2.145,0.823,52.709,19.758,118.286,13.955c8.721,3.872,35.858,14.605,69.063,14.605c31.548,0,68.554-9.676,100.448-44.121C473.388,463.356,534.706,398.573,499.255,300.554z M454.056,453.335l-0.274,0.285c-61.643,66.694-144.294,25.653-147.781,23.885l-2.734-1.403l-3.049,0.305c-61.724,6.169-111.161-12.237-112.38-12.664C79.523,431.422,49.895,330.384,49.316,328.463c-25.318-66.38-11.048-118.645-10.906-119.145l1.148-3.998l-1.921-3.694C-3.861,121.998,52.162,61.539,54.439,59.141c70.404-71.263,153.218-22.843,156.694-20.759l3.212,1.946l3.71-0.549c130.98-19.316,199.941,60.931,202.807,64.341l0.721,0.786c80.405,78.653,56.968,193.177,56.724,194.326l-0.64,3.008l1.077,2.866C512.041,393.176,456.567,450.794,454.056,453.335z"/></g></g><g><g><path d="M320.098,219.662l-0.887-0.239c-59.722-10.672-94.688-26.691-94.688-26.691v0.007c-5.204-3.298-12.997-8.473-13.535-14.403c-0.488-5.385,4.345-11.224,6.886-13.623c58.035-29.602,83.785,6.642,84.88,8.223c16.303,24.113,32.964,37.316,49.53,39.242c14.473,1.667,23.113-5.915,23.865-6.618c11.973-10.498,18.046-22.786,18.069-36.507c0.051-26.614-23.735-47.932-24.548-48.639c-69.591-64.89-177.909-27.66-182.31-26.085c-87.713,29.465-69.459,111.811-69.266,112.64l0.346,1.154c25.968,71.831,135.34,81.171,139.975,81.537c52.262,4.126,54.478,29.119,54.569,30.522c1.88,26.304-44.314,34.119-50.829,35.075c-45.615-2.531-56.338-20.307-56.358-20.307l-1.057-1.728c-23.854-31.558-33.144-42.505-53.522-43.033c-16.933-0.335-27.025,6.393-32.433,12.217c-13.65,14.707-11.892,36.417-11.647,38.846l0.234,1.372c20.114,84.095,130.756,83.383,134.527,83.099c6.464,0.396,12.654,0.579,18.63,0.579c138.329-0.01,147.842-100.55,147.903-101.414C414.397,263.385,353.263,229.165,320.098,219.662z M387.697,323.026c-0.315,3.679-9.259,90.112-145.341,81.9c-0.904-0.01-97.694,0.813-114.535-66.329c-0.132-2.744-0.285-15.032,6.22-22.035c3.659-3.943,8.873-5.742,16.638-5.56c9.473,0.244,13.437,3.019,37.006,34.181c3.435,5.885,19.941,28.174,74.388,30.918l0.844,0.041l0.854-0.102c27.29-3.1,72.742-18.671,69.998-56.764c-0.03-1.819-1.545-44.67-73.718-50.372c-1.006-0.081-99.869-8.456-121.802-67.222c-1.372-6.784-11.089-65.175,55.891-87.678c0.996-0.35,100.875-34.74,161.542,21.821c0.183,0.158,17.746,16.155,17.715,33.19c-0.01,7.587-3.598,14.426-11.17,21.07c-0.02,0.015-2.876,1.956-7.552,1.411c-5.783-0.669-17.99-5.492-34.658-30.144c-0.366-0.539-37.037-54.01-112.94-14.534l-1.779,1.169c-1.718,1.397-16.709,14.168-15.205,32.036c1.006,12.038,9.035,22.406,24.586,31.192c1.494,0.701,37.423,17.329,100.133,28.589C321.196,241.777,393.277,265.428,387.697,323.026z"/></g></g></svg>',
        replace: true
    }
})
.name;