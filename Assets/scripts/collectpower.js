#pragma strict
//var collectpowersound:AudioSource;
static var charge:int=0;
var collectpowersound:AudioClip;
var powerimage:Texture2D[];
var meterimage:Texture2D[];
var powerimage_bl:UI.RawImage;
var meterimage_bl:Renderer;

function Start () {

}

function Update () {

}
function cellpickup(){
		
	AudioSource.PlayClipAtPoint(collectpowersound,transform.position);
	charge++;
	powerimage_bl.texture=powerimage[charge];
	meterimage_bl.material.mainTexture=meterimage[charge];
	if(charge==1){
		powerimage_bl.enabled=true;
	
	}
	
}