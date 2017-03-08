// Based on Editor examples modified by Growlabs
//
// Copyright 2008 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('growlabs');

goog.require('goog.dom')
goog.require('goog.editor.Command')
goog.require('goog.editor.Field')
goog.require('goog.editor.SeamlessField')
goog.require('goog.editor.plugins.BasicTextFormatter')
goog.require('goog.editor.plugins.EnterHandler')
goog.require('goog.editor.plugins.HeaderFormatter')
goog.require('goog.editor.plugins.LinkBubble')
goog.require('goog.editor.plugins.LinkDialogPlugin')
goog.require('goog.editor.plugins.ListTabHandler')
goog.require('goog.editor.plugins.LoremIpsum')
goog.require('goog.editor.plugins.RemoveFormatting')
goog.require('goog.editor.plugins.SpacesTabHandler')
goog.require('goog.editor.plugins.UndoRedo')
goog.require('goog.ui.editor.DefaultToolbar')
goog.require('goog.ui.editor.ToolbarController')
goog.require('goog.html.SafeHtml');



function ClosureEditor(contentElem, toolbarElem) {
  this.field = new goog.editor.SeamlessField(goog.dom.getElement(contentElem))

  // Create and register all of the editing plugins you want to use.
  this.field.registerPlugin(new goog.editor.plugins.BasicTextFormatter())
  this.field.registerPlugin(new goog.editor.plugins.RemoveFormatting())
  this.field.registerPlugin(new goog.editor.plugins.UndoRedo())
  this.field.registerPlugin(new goog.editor.plugins.ListTabHandler())
  this.field.registerPlugin(new goog.editor.plugins.SpacesTabHandler())
  this.field.registerPlugin(new goog.editor.plugins.EnterHandler())
  this.field.registerPlugin(new goog.editor.plugins.HeaderFormatter())
  this.field.registerPlugin(new goog.editor.plugins.LinkDialogPlugin())
  this.field.registerPlugin(new goog.editor.plugins.LinkBubble())

  // Specify the buttons to add to the toolbar, using built in default buttons.
  var buttons = [
    goog.editor.Command.BOLD,
    goog.editor.Command.ITALIC,
    goog.editor.Command.UNDERLINE,
    goog.editor.Command.FONT_COLOR,
    goog.editor.Command.BACKGROUND_COLOR,
    goog.editor.Command.FONT_FACE,
    goog.editor.Command.FONT_SIZE,
    goog.editor.Command.LINK,
    goog.editor.Command.UNDO,
    goog.editor.Command.REDO,
    goog.editor.Command.UNORDERED_LIST,
    goog.editor.Command.ORDERED_LIST,
    goog.editor.Command.INDENT,
    goog.editor.Command.OUTDENT,
    goog.editor.Command.JUSTIFY_LEFT,
    goog.editor.Command.JUSTIFY_CENTER,
    goog.editor.Command.JUSTIFY_RIGHT,
    goog.editor.Command.SUBSCRIPT,
    goog.editor.Command.SUPERSCRIPT,
    goog.editor.Command.STRIKE_THROUGH,
    goog.editor.Command.REMOVE_FORMAT
  ]

  var myToolbar = goog.ui.editor.DefaultToolbar.makeToolbar(buttons, goog.dom.getElement(toolbarElem))

  new goog.ui.editor.ToolbarController(this.field, myToolbar)

  // Watch for field changes, to display below.
  goog.events.listen(this.field, goog.editor.Field.EventType.DELAYEDCHANGE, () => this.onInput(this.field.getCleanContents()))
  goog.events.listen(this.field, goog.editor.Field.EventType.FOCUS, this.onFocus)

  this.field.makeEditable()
}

ClosureEditor.prototype.onInput = function() {}

ClosureEditor.prototype.onFocus = function() {}

ClosureEditor.prototype.setContent = function() {
  this.field.setHtml(false, html)
  this.triggerChange()
}

ClosureEditor.prototype.getContent = function() {
  return this.field.getCleanContents()
}

ClosureEditor.prototype.appendText = function(text) {
  let safe = goog.html.SafeHtml.htmlEscapePreservingNewlines(`\n${text}`)
  let fragment = goog.dom.safeHtmlToNode(safe)
  let el = goog.dom.getElement(this.$refs.content)
  goog.dom.append(el, fragment)
  this.triggerChange()
}

ClosureEditor.prototype.triggerChange = function(text) {
  this.field.dispatchEvent(goog.editor.Field.EventType.CHANGE)
  this.field.dispatchEvent(goog.editor.Field.EventType.DELAYEDCHANGE)
}

goog.exportSymbol('growlabs.ClosureEditor', ClosureEditor);



