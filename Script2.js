
var tab = new Array("AX","AT","BE","BG","HR","CY","CZ","DK","EE","FO","FI","IM","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","GB");



$(document).ready(function()
{
	var k = 0;
	while(k <= 33)
	{
		$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+tab[k]+"", function(json)
	  	{ 
	  		
	      $.each(json, function (key, data)
	      {
	          $.each(data, function (index, data)
	          {
	          	
	            $("#"+k+"").append("<a>"+data.scientificName+"</a>");
	            if(data.scientificName == "Pyrrhula pyrrhula")
	            {
	            	k++;
	            }  
	          })      
	      })
	  	})
	}
		
	  	 
});
