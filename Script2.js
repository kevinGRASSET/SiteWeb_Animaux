
var tab = new Array("AX","AT","BE","BG","HR","CY","CZ","DK","EE","FO","FI","FR","GF","DE","GI","GR","HU","IE","IM","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","GB");


function Nom_De_La_Fonction(k) 
{
		$(document).ready(function()
		{
				$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+tab[k]+"", function(json)
			  	{ 
			  		
			      $.each(json, function (key, data)
			      {
			          $.each(data, function (index, data)
			          {	
			            $("#"+k+"").append("<a>"+data.scientificName+"<br/><br/></a>"); 
			          })      
			      })
			  	})
		});
}


for(var i = 0; i <= tab.length; i++)
{
	Nom_De_La_Fonction(i)
}
