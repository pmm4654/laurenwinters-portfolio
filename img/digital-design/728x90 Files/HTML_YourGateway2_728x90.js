(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.YourGateway2728x90Conferences = function() {
	this.initialize(img.YourGateway2728x90Conferences);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,20);


(lib.YourGateway2728x90Events = function() {
	this.initialize(img.YourGateway2728x90Events);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,20);


(lib.YourGateway2728x90Meetings = function() {
	this.initialize(img.YourGateway2728x90Meetings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,20);


(lib.YourGateway2728x90 = function() {
	this.initialize(img.YourGateway2728x90);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Scene_1_Meetings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Meetings
	this.instance = new lib.YourGateway2728x90Meetings();
	this.instance.parent = this;
	this.instance.setTransform(384,54);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(15));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Events = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Events
	this.instance = new lib.YourGateway2728x90Events();
	this.instance.parent = this;
	this.instance.setTransform(402,54);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},16).wait(15));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Conferences = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Conferences
	this.instance = new lib.YourGateway2728x90Conferences();
	this.instance.parent = this;
	this.instance.setTransform(361,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(31));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Background
	this.instance = new lib.YourGateway2728x90();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();


(lib.ClickTag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,160,221,0.498)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(363.975,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Scene_1_ClickTag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ClickTag
	this.ClickTag = new lib.ClickTag();
	this.ClickTag.name = "ClickTag";
	this.ClickTag.parent = this;
	this.ClickTag.setTransform(363.9,45,1,1,0,0,0,363.9,45);
	new cjs.ButtonHelper(this.ClickTag, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ClickTag).wait(45));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.HTML_YourGateway2_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		if(this.ClickTag.parent == undefined || this.ClickTag.parent == this)
		this.ClickTag = this.ClickTag.ClickTag;
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.ClickTag.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open(clickTag, "_blank");
		}
	}
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Meetings_obj_
	this.Meetings = new lib.Scene_1_Meetings();
	this.Meetings.name = "Meetings";
	this.Meetings.parent = this;
	this.Meetings.depth = 0;
	this.Meetings.isAttachedToCamera = 0
	this.Meetings.isAttachedToMask = 0
	this.Meetings.layerDepth = 0
	this.Meetings.layerIndex = 0
	this.Meetings.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Meetings).wait(45));

	// Events_obj_
	this.Events = new lib.Scene_1_Events();
	this.Events.name = "Events";
	this.Events.parent = this;
	this.Events.depth = 0;
	this.Events.isAttachedToCamera = 0
	this.Events.isAttachedToMask = 0
	this.Events.layerDepth = 0
	this.Events.layerIndex = 1
	this.Events.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Events).wait(45));

	// Conferences_obj_
	this.Conferences = new lib.Scene_1_Conferences();
	this.Conferences.name = "Conferences";
	this.Conferences.parent = this;
	this.Conferences.setTransform(448.5,64,1,1,0,0,0,448.5,64);
	this.Conferences.depth = 0;
	this.Conferences.isAttachedToCamera = 0
	this.Conferences.isAttachedToMask = 0
	this.Conferences.layerDepth = 0
	this.Conferences.layerIndex = 2
	this.Conferences.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Conferences).wait(45));

	// Background_obj_
	this.Background = new lib.Scene_1_Background();
	this.Background.name = "Background";
	this.Background.parent = this;
	this.Background.setTransform(364,45,1,1,0,0,0,364,45);
	this.Background.depth = 0;
	this.Background.isAttachedToCamera = 0
	this.Background.isAttachedToMask = 0
	this.Background.layerDepth = 0
	this.Background.layerIndex = 3
	this.Background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Background).wait(45));

	// ClickTag_obj_
	this.ClickTag = new lib.Scene_1_ClickTag();
	this.ClickTag.name = "ClickTag";
	this.ClickTag.parent = this;
	this.ClickTag.setTransform(363.9,45,1,1,0,0,0,363.9,45);
	this.ClickTag.depth = 0;
	this.ClickTag.isAttachedToCamera = 0
	this.ClickTag.isAttachedToMask = 0
	this.ClickTag.layerDepth = 0
	this.ClickTag.layerIndex = 4
	this.ClickTag.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ClickTag).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,364,45);
// library properties:
lib.properties = {
	id: '52BBE3EC8EF4445D9E4E71CBA1DEB0EB',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/YourGateway2728x90Conferences.png", id:"YourGateway2728x90Conferences"},
		{src:"images/YourGateway2728x90Events.png", id:"YourGateway2728x90Events"},
		{src:"images/YourGateway2728x90Meetings.png", id:"YourGateway2728x90Meetings"},
		{src:"images/YourGateway2728x90.png", id:"YourGateway2728x90"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['52BBE3EC8EF4445D9E4E71CBA1DEB0EB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;