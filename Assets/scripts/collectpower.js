#pragma strict
//var collectpowersound:AudioSource;
static var charge:int=0;
static var woodcount:int=0;
static var stonecount:int=0;
static var player:Transform;
var collectpowersound:AudioClip;
var powerimage:Texture2D[];
var meterimage:Texture2D[];
var powerimage_bl:UI.RawImage;
var wood_count:UI.Text;
var stone_count:UI.Text;
var meterimage_bl:Renderer;

function Start () {
	player=gameObject.Find("First Person Coneroller").transform;
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
function woodpickup(){
	AudioSource.PlayClipAtPoint(collectpowersound,transform.position);
	woodcount++;
	wood_count.text="木柴数："+woodcount;
	if(woodcount==1){
		wood_count.enabled=true;
	
	}
}

function stonepickup(){
	AudioSource.PlayClipAtPoint(collectpowersound,transform.position);
	stonecount++;
	stone_count.text="石头数："+stonecount;
	if(stonecount==1){
		stone_count.enabled=true;
	
	}
}
