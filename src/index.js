import 'google-closure-library/closure/goog/css/button.css';
import 'google-closure-library/closure/goog/css/linkbutton.css';
import 'google-closure-library/closure/goog/css/menu.css';
import 'google-closure-library/closure/goog/css/menuitem.css';
import 'google-closure-library/closure/goog/css/menuseparator.css';
import 'google-closure-library/closure/goog/css/tab.css';
import 'google-closure-library/closure/goog/css/tabbar.css';
import 'google-closure-library/closure/goog/css/toolbar.css';
import 'google-closure-library/closure/goog/css/colormenubutton.css';
import 'google-closure-library/closure/goog/css/palette.css';
import 'google-closure-library/closure/goog/css/colorpalette.css';
import 'google-closure-library/closure/goog/css/editor/bubble.css';
import 'google-closure-library/closure/goog/css/editor/dialog.css';
import 'google-closure-library/closure/goog/css/editor/linkdialog.css';
import 'google-closure-library/closure/goog/css/editortoolbar.css';

import 'imports-loader?this=>window!../dist/editor.compiled.js'; // loads the closure library at window.growlabs

export default window.growlabs.ClosureEditor;