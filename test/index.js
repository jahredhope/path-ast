
var fs = require('fs');
var pathAst = require('..');
var assert = require('assert');

// Fixtures
var geomicons = require('geomicons-open/src/js/paths');
var bookmark = pathAst.parse(geomicons.bookmark);
var bookmarkMove = bookmark.commands[0].parameters;
var camera = pathAst.parse(geomicons.camera);
var cameraArc = camera.commands[10].parameters;
var chat = pathAst.parse(geomicons.chat);
var chatCurve = chat.commands[4].parameters;

var chatString = pathAst.stringify(chat);

describe('path-ast', function() {

  it('should have two parameters for M', function() {
    assert.equal( Object.keys(bookmarkMove).length, 2 );
  });

  it('should have seven parameters for A', function() {
    assert.equal( Object.keys(cameraArc).length, 7 );
  });

  it('should have six parameters for C', function() {
    assert.equal( Object.keys(chatCurve).length, 6 );
  });

  it('stringify should match input', function() {
    assert.equal( geomicons.chat.trim(), chatString );
  });

});

