#pragma strict

function Start () {

}

function Update () {

}
function OnGUI(){
	if(GUI.Button(Rect(Screen.width/3,Screen.height/4,100,50),"Play")){
		Application.LoadLevel("IsLet");
	
	}
	if(GUI.Button(Rect(Screen.width/3,Screen.height*2/4,100,50),"Quit")){
		Application.Quit();
	
	}

}