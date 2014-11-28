var graph = new joint.dia.Graph;

var paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 900,
    height: 1200,
    gridSize: 3,
    model: graph
   
});

//获取始终文档id
var _beginLink = document.getElementById("mybeginLink");
var _destLink = document.getElementById("mydestLink");

//文档对象
function docType(){
	this.type = null;
	this.name = null;
	this.link = new Array();
	this.numLink = 0;
}
var myDocList = new Array();
var i=0;

//绘制文档对象
function estabDoc(x, y, label) {
    var circle = new joint.shapes.fsa.State({
        position: { x: x, y: y },
        size: { width: 90, height: 40 },
        attrs: { text : { text: label }}
    });
    graph.addCell(circle);
    return circle;
};
var estabDocList = new Array();


//文档信息提交
function on_docSubmit(){
	var _mydocType = document.getElementById("mydocType").value;
	var _mydocName = document.getElementById("mydocName").value;
	var _docType = new docType();
	_docType.name = _mydocName; 
	
	//alert(document.getElementById("mydocType").value);
	if(_mydocType == "RS"){
		var docRS = estabDoc(100,100,_mydocName);
		estabDocList[i] = docRS;
		_docType.type = "RS"; 
		//alert(_docType.type);
		myDocList[i] = _docType;
		//alert(myDocList[i].name);	
		_beginLink.options.add(new Option(myDocList[i].name,i));
		_destLink.options.add(new Option(myDocList[i].name,i));
		i++;
	}else if(_mydocType == "TC"){
		var docTC = estabDoc(500,100,_mydocName);
		estabDocList[i] = docTC;
		_docType.type = "TC"; 		
		//alert(_docType.type);
		myDocList[i] = _docType;
		//alert(myDocList[i].name);	
		_beginLink.options.add(new Option(myDocList[i].name,i));
		_destLink.options.add(new Option(myDocList[i].name,i));
		i++;
	}else if(_mydocType == "AD"){
		var docAD = estabDoc(100,300,_mydocName);
		estabDocList[i] = docAD;
		_docType.type = "AD"; 
		//alert(_docType.type);
		myDocList[i] = _docType;
		//alert(myDocList[i].name);	
		_beginLink.options.add(new Option(myDocList[i].name,i));
		_destLink.options.add(new Option(myDocList[i].name,i));
		i++;
	}else {
		var docTP = estabDoc(500,300,_mydocName);
		estabDocList[i] = docTP;
		_docType.type = "TP"; 
		//alert(_docType.type);
		myDocList[i] = _docType;
		//alert(myDocList[i].name);	
		_beginLink.options.add(new Option(myDocList[i].name,i));
		_destLink.options.add(new Option(myDocList[i].name,i));
		i++;
	}
}


//绘制文档关联信息
function linkDraw(source,target,label,vertices){

	var arrowLink = new joint.shapes.fsa.Arrow({
        source:{ id:source.id},
        target:{ id:target.id},
		labels:[{ position: .5, attrs: { text: { text: label || '', 'font-weight': 'bold' } } }],
        vertices: vertices || []
    });
    graph.addCell(arrowLink);
    return arrowLink;	
}
function on_linkDraw(){
	var m = _beginLink.selectedIndex;
	var n = _destLink.selectedIndex;
	linkDraw(estabDocList[m],estabDocList[n],'');
	var j = myDocList[m].numLink;
	myDocList[m].link[j] = myDocList[n].name;
	//alert(myDocList[m].link[j]);
	myDocList[m].numLink++;
}






