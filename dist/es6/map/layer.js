import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}layer`)
@generateBindables('layers', ['bingMapType', 'bubbleSettings', 'dataSource', 'enableAnimation', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'layerType', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'shapeData', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate'])

export class Layer {
}

