#pragma strict
var xstartposition:float=-600;
var xendposition:float=450;
var speed:float=1.0;
private var starttime:float;
function Start () {
	starttime=Time.time;
}

function Update () {
	transform.position.x=Mathf.Lerp(xstartposition,xendposition,(Time.time-starttime)*speed);
}