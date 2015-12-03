loadRelativeToScript("engine.js")
tldata = JSON.parse(read("/tmp/tl-data.json"));
for (var i = 0; i < tldata.length; i++) {
    data = tldata[i];
    var textmap = JSON.parse(read(data["dict"]))
    var array = read(data["tree"], 'binary');
    var tree = new DataTree(array.buffer, textmap);
    var overview = new Overview(tree, {});
    overview.init()
}
