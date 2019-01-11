import {TazerosDatasource} from './datasource';
import {TazerosDatasourceQueryCtrl} from './query_ctrl';

class TazerosConfigCtrl {}
TazerosConfigCtrl.templateUrl = 'partials/config.html';

class TazerosQueryOptionsCtrl {}
TazerosQueryOptionsCtrl.templateUrl = 'partials/query.html';

class TazerosAnnotationsQueryCtrl {}

export {
	TazerosDatasource as Datasource,
	TazerosDatasourceQueryCtrl as QueryCtrl,
	TazerosConfigCtrl as ConfigCtrl,
	TazerosQueryOptionsCtrl as QueryOptionsCtrl,
	TazerosAnnotationsQueryCtrl as AnnotationsQueryCtrl
};