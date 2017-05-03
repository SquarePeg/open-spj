
/**
* Class Match
* @author Casey Hill
* @version 0.1
* @usage The Nav View Class
*/

package
{

	import flash.display.Stage;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	import flash.events.TextEvent;	
	
	import fl.controls.Slider;
	import fl.events.SliderEvent;
	import fl.events.SliderEventClickTarget;
	
	/// Custom Classes
	//import com.greensock.core.*;
	//import com.greensock.TweenMax;
			
	
	public class Match extends MovieClip 
	{
		private var _stage:Stage;
		
		private var _match:MovieClip;
		private var _company_mc:MovieClip;
		private var _member_mc:MovieClip;
		private var _candidate_mc:MovieClip;
		
		private var _matchScore:Number = 0;
		private var _sArr:Array;
		private var _data_mc:MovieClip;
		private var _match_txt:TextField;
		private var _textBoxList:Array;
		
		private var _linOverUnder_txt:TextField;
		private var _memLinRecs_txt:TextField;
		private var _memLinMatchingSkills_txt:TextField;
		private var _memLinMatchingGroups_txt:TextField;
		
		private var _canLinRecs_txt:TextField;
		private var _canLinMatchingSkills_txt:TextField;
		private var _canLinMatchingGroups_txt:TextField;
		
		
		private static var MAX_TOTAL:int = 10;
		
		private var _btn:MovieClip;
		
		/// CLASS CONSTRUCT
		
		public function Match()
		{
			// set using below Setters
			
			trace( "in Match" );
			
			_match			= this as MovieClip;
			_company_mc 	= this.company_mc;
			_member_mc 		= this.member_mc;
			_candidate_mc 	= this.candidate_mc;
			
			_data_mc 		= this.data_mc;
			_btn			= _data_mc.update_btn;
			_match_txt 		= _data_mc.match_txt;
			
			_linOverUnder_txt			= this.linOverUnder_txt
			
			_memLinRecs_txt				= this.memLinRecs_txt;
			_memLinMatchingSkills_txt	= this.memLinMatchingSkills_txt;
			_memLinMatchingGroups_txt	= this.memLinMatchingGroups_txt;
			
			_canLinRecs_txt				= this.canLinRecs_txt;
			_canLinMatchingSkills_txt	= this.canLinMatchingSkills_txt;
			_canLinMatchingGroups_txt	= this.canLinMatchingGroups_txt;
			
			
			_sArr = new Array();
			_sArr.push( { "slider": _company_mc.s1, "user": "company", "id": 1, "val": 0 } );
			_sArr.push( { "slider": _company_mc.s2, "user": "company", "id": 2, "val": 0 } );
			_sArr.push( { "slider": _company_mc.s3, "user": "company", "id": 3, "val": 0 } );
			_sArr.push( { "slider": _company_mc.s4, "user": "company", "id": 4, "val": 0 } );
			_sArr.push( { "slider": _company_mc.s5, "user": "company", "id": 5, "val": 0 } );
			
			_sArr.push( { "slider": _member_mc.s1, "user": "member", "id": 1, "val": 0 } );
			_sArr.push( { "slider": _member_mc.s2, "user": "member", "id": 2, "val": 0 } );
			_sArr.push( { "slider": _member_mc.s3, "user": "member", "id": 3, "val": 0 } );
			_sArr.push( { "slider": _member_mc.s4, "user": "member", "id": 4, "val": 0 } );
			_sArr.push( { "slider": _member_mc.s5, "user": "member", "id": 5, "val": 0 } );
			
			_sArr.push( { "slider": _candidate_mc.s1, "user": "candidate", "id": 1, "val": 0 } );
			_sArr.push( { "slider": _candidate_mc.s2, "user": "candidate", "id": 2, "val": 0 } );
			_sArr.push( { "slider": _candidate_mc.s3, "user": "candidate", "id": 3, "val": 0 } );
			_sArr.push( { "slider": _candidate_mc.s4, "user": "candidate", "id": 4, "val": 0 } );
			_sArr.push( { "slider": _candidate_mc.s5, "user": "candidate", "id": 5, "val": 0 } );
			
			
			//_btn.addEventListener( MouseEvent.CLICK, clk, false, 0, true );
			
			createSliders();
			setupTextBoxes();
		}
		
		/*
		private function clk( evt:MouseEvent ):void
		{
			updateAlgorithm();
		}
		*/
		
		
		private function createSliders():void
		{
			var len:int = _sArr.length;
			for(var i:int = 0; i < len; i++)
			{
				var slider:Slider = _sArr[i].slider as Slider;
				
				slider.addEventListener( SliderEvent.CHANGE, slider_OnChange );
			
				if( String( _sArr[i].user ) == "company" )
				{
					var tf:TextField = slider.parent["label_"+ _sArr[i].id +"_txt"] as TextField;
					
					//tf.addEventListener( TextEvent.TEXT_INPUT, label_OnChange, false, 0, true);
					tf.addEventListener( Event.CHANGE, label_OnChange, false, 0, true);
				}
			}
			
		}
		
		
		private function setupTextBoxes():void
		{
			
			_textBoxList = [
				_linOverUnder_txt,
				_memLinRecs_txt,
				_memLinMatchingSkills_txt,
				_memLinMatchingGroups_txt,
				_canLinRecs_txt,
				_canLinMatchingSkills_txt,
				_canLinMatchingGroups_txt
				];
			
			var len:int = _textBoxList.length;
			for(var i:int = 0; i < len; i++)
			{
				var txt:TextField = _textBoxList[i] as TextField;
				txt.addEventListener( Event.CHANGE, txt_OnChange, false, 0, true);
			}
			
		}
		
		private function txt_OnChange( evt:Event ):void
		{
			/*
			var txt:TextField = evt.target as TextField;
			var tfName:String = txt.name;
			
			switch( tfName )
			{
				case "linOverUnder_txt" : 
					break;
				case "memLinRecs_txt" : 
					break;
				case "memLinMatchingSkills_txt" :
					break;
				case "memLinMatchingGroups_txt" :
					break;
				case "canLinRecs_txt" :
					break;
				case "canLinMatchingSkills_txt" :
					break;
				case "canLinMatchingGroups_txt" :
					break;
			}
			*/
			
			updateAlgorithm();
			
		}
		
		private function adjustForExternal( score:int ):int
		{
			var skillsScore:Number = ( ( ( ( Number( _memLinMatchingSkills_txt.text ) + Number( _canLinMatchingSkills_txt.text ) ) / 2) ) * .5);
			var groupsScore:Number = ( ( ( ( Number( _memLinMatchingGroups_txt.text ) + Number( _canLinMatchingGroups_txt.text ) ) / 2) ) * .5);
			var memRecsScore:Number = (Number( memLinRecs_txt.text ) / Number( linOverUnder_txt.text ));
			var canRecsScore:Number = (Number( canLinRecs_txt.text ) / Number( linOverUnder_txt.text ));
			
			score = skillsScore ? (skillsScore + score) : score; 
			
			score = groupsScore ? (groupsScore + score) : score;  
			
			score = memRecsScore ? (memRecsScore + score) : score;
			
			score = canRecsScore ? (canRecsScore + score) : score; 
			
			score = score >= 100 ? 100 : score;
			
			return score
		}
		
		
		
		private function label_OnChange( evt:Event ):void
		{
			var id:int = Number( String( evt.target.name ).split("_")[1] );
						
			var mtf:TextField = _member_mc[ "label_" + id + "_txt" ] as TextField;
			mtf.text = _company_mc[ "label_" + id + "_txt" ].text;
			
			var ctf:TextField = _candidate_mc[ "label_" + id + "_txt" ] as TextField;
			ctf.text = _company_mc[ "label_" + id + "_txt" ].text;
			
		}
		
		
		//private function updateAlgorithm( user:String, id:int, rating:int ):void
		
		private function updateAlgorithm():void
		{	
			// add everything up again
			
			_matchScore = 0;
			
			var len:int = _sArr.length;
			for(var i:int = 0; i < len; i++)
			{
				var userObj:Object = _sArr[i];
				
				if( String( userObj.user ) != "company" )
				{	
					var val1:int = getCompanyValue( Number( userObj.id ) );
					var val2:int = Number( userObj.val );
					_matchScore = _matchScore + ( MAX_TOTAL - Math.abs(val1 - val2) );
				}
			}
			
			//_matchScore = _matchScore / ( _sArr.length * .666667 );
			
			_matchScore = adjustForExternal( _matchScore );
			
			trace("match  >> "+ String( _matchScore )); 
			
			_match_txt.text = String( _matchScore );
			
			//_match_txt.text = String( _matchScore );
		}
		
		
		
		private function getCompanyValue( id:int ):int
		{
			var newVal:int = 0;
			
			var len:int = _sArr.length;
			for(var i:int = 0; i < len; i++)
			{
				var uObj:Object = _sArr[i];
				
				if( String( uObj.user ) == "company" )
				{
					if( Number( uObj.id ) == id )
					{
						newVal = uObj.val;
						break;
					}
				}
				
			}
			
			return newVal;
		}
		
		//
		//
		// EVENT HANDLERS
		//
		//
		
		private function slider_OnChange( evt:SliderEvent ):void
		{
			// get ref to slider
			var slider:Slider = evt.target as Slider;
			
			// get ref to slider group
			var user:String = String( slider.parent.name ).split("_")[0];
			
			// get slider value
			var rating:int = evt.target.value;
			
			// get id of slider
			var id:int = Number( String( slider.name ).split("s")[1] );
			
			// set slider textbox
			var textBox:TextField = slider.parent["v" + id + "_txt"];
			textBox.text = String( rating );
			
			
			var len:int = _sArr.length;
			for(var i:int = 0; i < len; i++)
			{
				if( String( _sArr[i].user ) == user )
				{
					if( Number( _sArr[i].id ) == id )
					{
						var wentUp:Boolean = _sArr[i].val < rating ? true : false;
						_sArr[i].val = rating;
						adjustSliders( id, user, rating, wentUp );
					}
				}
			}
			
			//adjustSliders();
			
			//updateAlgorithm( user, id, rating );
			//updateAlgorithm();
		}
		
		private function adjustSliders( id:int, user:String, rating:int, wentUp:Boolean ):void
		{
			var len:int = _sArr.length;
			for(var i:int = 0; i < len; i++)
			{
				// if NOT the slider that was changed...
				if( ( String( _sArr[i].user ) == user ) && ( Number( _sArr[i].id ) != id ) )
				{
					if( Number( _sArr[i].val == rating ) )
					{
						var slider:Slider = _sArr[i].slider as Slider;
						
						slider.value = rating - 1;
						//if( wentUp ) 
						//else slider.value = rating + 1;
						
						slider.dispatchEvent( 
							new SliderEvent( SliderEvent.CHANGE, 0, SliderEventClickTarget.THUMB, null ) );
						
						break;
					}
				}
			}
			
			updateAlgorithm();
		}
	
	
		
		
		/// PUBLIC METHODS
		
	
			
		
	}
	
}