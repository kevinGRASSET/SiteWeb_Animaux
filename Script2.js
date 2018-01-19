var tab = new Array("AX","AT","BE","BG","HR","CY","CZ","DK","EE","FO","FI","FR","GF","DE","GI","GR","HU","IE","IM","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","GB");
var tab2 = new Array("AF","AM","AZ","BH","BD","BT","BN","KH","CN","GE","HK","IN","ID","IR","IQ","IL","JP","JO","KZ","KW","KG","LA","LB","MO","MY","MV","MN","MM","NP","KP","OM","PK","PS","PH","QA","SA","SG","KR","LK","SY","TW","TJ","TH","TL","TR","TM","AE","UZ","VN","YE");
var tabEurope = new Array ();

var m = 0;


 


		$.get( "https://restcountries.eu/rest/v2/regionalbloc/eu", function(json)
            {
            	
            
	            $.each(json, function(key, val)
	            {
	            	
	               tabEurope[m] = ""+val.alpha2Code+"";
	               m++;
	            	
	            	
	            })

	        console.log(tabEurope);
	        console.log(tabEurope[0]);
	        console.log(tabEurope[1]);
	        TabAsia();

          	});


			

function TabAsia(k) 
{

	var l = 0;


	for (var i = 0; i < tabEurope.length; i++) 
	{
  		$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+tabEurope[i]+"", function(json)
	  	{ 
	  		
	      $.each(json, function (key, data)
	      {
	          $.each(data, function (index, data)
	          {	
	            $("#"+l+"").append("<a>"+data.scientificName+"<br/><br/></a>"); 
	            
	           
	          }) 

	      })
			l++;	
	      


	      
	  	})
	}
	
		


	  	 
};
			

  		
	





		








/*function TabAsia(k) 
{
		$(document).ready(function()
		{
				$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+tab2[k]+"", function(json)
			  	{ 
			  		
			      $.each(json, function (key, data)
			      {
			          $.each(data, function (index, data)
			          {	
			            $("#"+k2+"").append("<a>"+data.scientificName+"<br/><br/></a>"); 
			          })      
			      })
			  	})
		});
}*/









