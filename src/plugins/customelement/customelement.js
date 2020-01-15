import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import CustomElemUI from './customelement_ui';

export default class CustomElement extends Plugin {
	static get requires() {
		return [ CustomElemUI ];
	}
	static get pluginName() {
		return 'CustomElement';
	}
}
